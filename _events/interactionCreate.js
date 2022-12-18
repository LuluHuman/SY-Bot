module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    require("./."+command)(client, interaction)
}