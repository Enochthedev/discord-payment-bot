import Event from "../../class/event";
import customClient from "../../class/customClient";
import { ChatInputCommandInteraction, Events } from "discord.js";
import Command from "../../class/command";

export default class CommandHandler extends Event {
    constructor(client: customClient){
        super(client, {
            name: Events.InteractionCreate,
            description: "Command Handler event",
            once: false
    })
    };
    Execute(interaction: ChatInputCommandInteraction): void{
        if(!interaction.isChatInputCommand()) return;

        const command: Command = this.client.command.get(interaction.commandName)!;
    }
}