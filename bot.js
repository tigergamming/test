const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on("ready", function() {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(prefix + "help");
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
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
    
    if (command === "help") {
        
        message.channel.send("You can view the list of commands at https://definitelynotjosh.github.io/JoshBot");
        
    }
    
    if (command === "lol") {
        
        message.reply("lel");
        
    }
    
    if (command === "ping") {
        
      message.channel.send('Pong...').then(msg => {
            
            msg.edit(`**Pong**! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`);
        
      });
        
    }

    if (command === "website") {
        
       message.channel.send("You can view my website here: https://definitelynotjosh.github.io/JoshBot");
        
    }
    
    if (command === "depressme") {
        
        message.author.sendMessage("You are a lonely person. You have crippling depression. You have no friends. Nobody likes you.");
        
    }
  
    if (command === "invite") {
        
        message.channel.send("You can add JoshBot to your server here: https://discordapp.com/oauth2/authorize?client_id=371553407569362955&scope=bot&permissions=8");
        
    }
  
      if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

    }

  
    let mess = message.content.split(" ").slice(1);
    
    if (command === "say") {
        
        message.channel.send(mess.join(" "));
        
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
