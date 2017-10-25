const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'lol') {
    	message.reply('lel');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('PONG!');
  	}
});

if (command === "remove") {
        let num1 = parseInt(args[0]);
        message.channel.bulkDelete(num1 + 1);
        if (args[0] === "1") {

            message.channel.send("Deleted " + num1 + " message.")

        } else if (num1 > 1) {

            message.channel.send("Deleted " + num1 + " messages.");

        }

    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
