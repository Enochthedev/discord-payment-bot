import { ChatInputCommandInteraction } from "discord.js";
import customClient from "./customClient";
import IsubCommand from "../interface/IsubCommand.interface";
import IsubCommandOptions from "../interface/IsubCommandOptions.interface";

export default class subCommand implements IsubCommand {
    client: customClient;
    name: string;

    constructor(client: customClient, options: IsubCommandOptions) {
        this.client = client;
        this.name = options.name;
    }
    Execute(interaction: ChatInputCommandInteraction): void {
    }
}