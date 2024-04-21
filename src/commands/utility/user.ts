import {SlashCommandBuilder} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user info!'),
    async execute(interaction: {
        user: any; reply: (arg0: string) => any; 
}) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
    },
};