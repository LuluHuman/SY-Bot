//Modules
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

//Info
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { botToken, cliendId } = require('./config/config.json');

client.commands = new Map();

//Logger
fs.readdir('./_events/', (err, files) => {
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        
        console.log(`Loading... [⭐]Event ${file}`)

        const event = require(`./_events/${file}`);
        let eventName = file.split(".")[0];
    
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./_cmds/', (err, files) => {
    files.forEach(file => {
        if (!file.endsWith(".js")) return;

        console.log(`Loading... [/]Command ${file}`)

        const eventPath = `./_cmds/${file}`
        let eventName = file.split(".")[0];

        client.commands.set(eventName, eventPath);
    });
});


client.login(botToken);