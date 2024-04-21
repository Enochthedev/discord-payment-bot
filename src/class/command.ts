import Category from "../enums/category";
import Icommand from "../interface/Icommand.interface";
import IcommandOptions from "../interface/IcommandOption.interface";
import customClient from "./customClient";
import { ChatInputCommandInteraction, CacheType, AutocompleteInteraction } from "discord.js";


export default class Command implements Icommand {
    client: customClient;
    name: string;
    description: string;
    category: Category;
    options: object;
    default_member_permission: bigint;
    dm_permission: boolean;
    cooldown: number;

    constructor(client: customClient, options: IcommandOptions) {
        this.client = client;
        this.name = options.name;
        this.description = options.description;
        this.category = options.category;
        this.options = options.options;
        this.default_member_permission = options.default_member_permission;
        this.dm_permission = options.dm_permission;
        this.cooldown = options.cooldown;
    }

    Execute(interaction: ChatInputCommandInteraction<CacheType>): void {
    }
    AutoComplete(interaction: AutocompleteInteraction<CacheType>): void {
    }

}