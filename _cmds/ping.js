module.info = "Responds with Pong!"
module.exports = main

const { EmbedBuilder } = require('discord.js');
async function main(client, interaction) {
    // inside a command, event listener, etc.
    const exampleEmbed = new EmbedBuilder()
        .setColor("#BEEAFF")
        .setTitle('RULES | @everyone')
        .setDescription('12 - 10 - 2022')
        .setAuthor({ name: 'Made by: Mason (Lutfil)', url: 'https://github.com/MasonHuman' })
        .setThumbnail('https://cdn.discordapp.com/icons/794875797781348402/651222eb91f6a2d2f3845653289f14a0.webp?size=96')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    await interaction.reply({ embeds: [exampleEmbed] });
}