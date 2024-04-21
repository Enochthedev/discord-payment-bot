import customClient from './class/customClient';
import { Client,  Events, GatewayIntentBits, Collection } from 'discord.js';
import {envSetup} from './config/envConfig.setup';
import config from './config/config';


//loading all imports


envSetup(); 
//creating a new client
(new customClient(config).Init());
// const client = new Client({
//   intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],

// });


// //creating a new collection
// client.commands = new Collection();

// console.log('Hi there!');
// console.log('just a few seconds the bot is loading up');


// // When the client is ready, run this code (only once).
// // The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// // It makes some properties non-nullable.
// client.once(Events.ClientReady, readyClient => {
// 	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
// });



// client.login(config.token);



