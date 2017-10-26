const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command === "remove") {
        
        let modRole = message.guild.roles.find("name", "Bot Commander");
        
        if (message.member.roles.has(modRole.id)) {

            let num1 = parseInt(args[0]);
            message.channel.bulkDelete(num1 + 1);
            if (args[0] === "1") {

                message.channel.send("Deleted " + num1 + " message.")

            } else if (num1 > 1) {

                message.channel.send("Deleted " + num1 + " messages.");

            }
            
        } else {

            message.reply("You do not have the permission to use this command.");

        }

    }
    
    if (command === "lol") {
        
        message.reply("lel");
        
    }
    
    if (command === "ping") {
        
        message.channel.send("PONG!");
        
    }
    
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
