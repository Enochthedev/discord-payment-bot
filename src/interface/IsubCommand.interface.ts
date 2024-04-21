import { ChatInputCommandInteraction } from "discord.js";
import customClient from "../class/customClient";

export default interface IsubCommand {
    client: customClient;
    name: string;

    Execute(interaction: ChatInputCommandInteraction): void;
}