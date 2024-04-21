import { Client, Collection } from "discord.js";
import Iclient from "../interface/IcustomClient.interface";
import Config from "../interface/Iconfig.interface";
import Handler from "./handler"
import Command from "./command";
import subCommand from "./subCommand";

//call the config file with the token that is in the config.ts file

export default class customClient extends Client implements Iclient{
    config: Config;
    handler: Handler
    command: Collection<string, Command>;
    subCommand: Collection<string, subCommand>;
    cooldowns: Collection<string, Collection<string, number>>;

    constructor(config: Config) {
        super({ intents: [] });
        this.config = config;
        this.handler = new Handler(this);
        this.command = new Collection();
        this.subCommand = new Collection();
        this.cooldowns = new Collection();
    }
    

    Init(): void {
        this.LoadHandlers()
        this.login(this.config.token)
            .then (() => {
                console.log('Bot is ready');
                console.log('Logged in as ' + this.user?.tag)
            }).catch((error) => {
                console.log('Error in logging in: ' + error);
            });
    }
    LoadHandlers(): void{
        this.handler.LoadEvents();
        this.handler.LoadCommands();
    }


}