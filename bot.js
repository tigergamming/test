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

client.User.setGame('#Help for help');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
