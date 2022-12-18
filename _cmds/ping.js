module.info = "Responds with Pong!"
module.exports = main

const { EmbedBuilder } = require('discord.js');
async function main(client, interaction) {
    // inside a command, event listener, etc.
    const exampleEmbed = new EmbedBuilder()
        .setColor("#BEEAFF")
        .setTitle('RULES')
        .setDescription('12 - 10 - 2022')
        .setAuthor({ name: 'SY Bot by: Mason (Lutfil)', url: 'https://github.com/MasonHuman/SY-Bot' })
        .setThumbnail('https://cdn.discordapp.com/icons/794875797781348402/651222eb91f6a2d2f3845653289f14a0.webp?size=96')
        .addFields(
            { name: '------------------------------------', value: '‍' },
            { name: 'Be respectful.', value: `↳ Respect people's beliefs and their differences. That includes their boundaries, opinions, and such.` },
            { name: 'NSFW is forbidden.', value: `↳ Slight NSFW is alright, as long as it's not over the line. Be sure the person you're talking to is of age or comfortable with these kinds of conversations.` },
            { name: 'Spam', value: `↳ Spamming is annoying, so don't try to do it for peacefulness.` },
            { name: 'Jokes', value: `↳ This includes, but is not limited to the following: Racism, rape, over-the-top suicide jokes, etc. Offensive jokes aren't okay. You don't know if someone's hurt because of a "simple joke."` },
            { name: 'Discrimination', value: `↳ This includes, but is not limited to the following:\nRacism, homophobia, transphobia, etc. Again, be respectful at all times.` },
            { name: '------------------------------------', value: '‍' },
            { name: 'EVENTS', value: `If a staff hosts an event, please follow the rules. This will lessen the stress of the staff team/SYTeam.` },
            { name: 'ABUSE OF POWER [for @syteam．]', value: `This can be done unconsciously, but do try to not abuse your power as a staff member.` },
            { name: 'DMs / PRIVATE CHATS', value: `If you are DMing someone, please try to be respectful. We don't warn people for DMing someone (as long as Person A consents to what Person B), but if you joke about things that you know are horrible, just don't. Don't even try.` },
            { name: '‍', value: `↳ Be sure to follow the rules to avoid getting in trouble! <3` },
            { name: 'est 5 - 18 - 2020', value: `from SYTeam` },
            { name: 'Permenemt Invite link', value: `https://discord.gg/VtDak65k9P`, inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    await interaction.reply({ embeds: [exampleEmbed], content: "@everyone", allowedMentions: { parse: ["everyone"] } });
}