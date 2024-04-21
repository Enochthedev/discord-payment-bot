import { Events } from "discord.js";
import customClient from "../../class/customClient";
import Event from "../../class/event";


export default class Ready extends Event {
    constructor(client: customClient){
        super(client,{
            name: Events.ClientReady,
            description: "Ready Event",
            once: true
        })
    }
    Execute(){
        console.log(`${this.client.user?.tag} is now ready!`)
    }
}