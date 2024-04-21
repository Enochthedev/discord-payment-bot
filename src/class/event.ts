import { Events } from "discord.js";
import Ievent from "../interface/Ievent.interface";
import customClient from "./customClient";
import IeventOption from "../interface/IeventOption.interface";


export default class Event implements Ievent{
    client: customClient;
    name: Events;
    description: string;
    once: boolean;


    constructor (client: customClient, options: IeventOption) {
        this.client = client;
        this.name = options.name;
        this.description = options.description;
        this.once = options.once;
    }

    Execute(...args:any): void {}
}
