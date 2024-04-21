import { Events } from "discord.js";

export default interface IeventOption {
    name: Events;
    description: string;
    once: boolean;
}