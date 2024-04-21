import {SlashCommandBuilder} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with server info!'),
    async execute(interaction: {
        guild: any; reply: (arg0: string) => any; 
}) {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    },
};