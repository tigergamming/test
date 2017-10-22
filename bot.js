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

  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
