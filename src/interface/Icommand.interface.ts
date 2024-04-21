import { AutocompleteInteraction, ChatInputCommandInteraction } from "discord.js";
import customClient from "../class/customClient";
import Category from "../enums/category";

export default interface Icommand {
    client: customClient;
    name: string;
    description: string;
    category: Category;
    options: object;
    default_member_permission: bigint;
    dm_permission: boolean;
    cooldown: number;


    Execute(interaction: ChatInputCommandInteraction): void;
    AutoComplete(interaction:AutocompleteInteraction): void;
}