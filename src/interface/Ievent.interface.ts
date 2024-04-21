import customClient from "../class/customClient";
import { Events } from "discord.js";

export default interface Ievent {
    client: customClient;
    name:Events;
    description: string;
    once: boolean;

}