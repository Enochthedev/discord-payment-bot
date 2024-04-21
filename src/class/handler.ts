import Ihandler from '../interface/Ihandler.interface';
import customClient from './customClient';
import path from 'path';
import { glob } from "glob"
import Event from "./event"
import Command from './command';
import subCommand from './subCommand';

export default class handler implements Ihandler {
    client: customClient; 
    constructor(client: customClient){
        this.client = client;
    }

    async LoadEvents() {
        const file = (await glob('build/event/**/*.js')).map((filePath: any) => path.resolve(filePath));

        file.map(async (file: string) =>{
            const event: Event = new(await import(file)).default(this.client);

            if (!event.name)
                return delete require.cache[require.resolve(file)] && console.log(`${file.split("/").pop()} does not have name.`);


            const execute = (...args: any[]) => event.Execute(...args)
            //@ts-ignore
            if (event.once) this.client.once(event.name, execute);
            //@ts-ignore
            else this.client.on(event.name, execute);

            return delete require.cache[require.resolve(file)]
        })
    }    

    async LoadCommands() {
        const file = (await glob('build/commands/**/*.js')).map((filePath: any) => path.resolve(filePath));

        file.map(async (file: string) =>{
            const command: Command|subCommand = new(await import(file)).default(this.client);

            if (!command.name)
                return delete require.cache[require.resolve(file)] && console.log(`${file.split("/").pop()} does not have name.`);

            if (file.split("/").pop()?.split(".")[2]) 
                return this.client.subCommand.set(command.name, command);
            
            this.client.command.set(command.name, command as Command);

            return delete require.cache[require.resolve(file)]
        })
    }

}
