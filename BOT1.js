const Discord = require('discord.js');
const client = new Discord.Client();
client.login('BOT TOKEN');

client.on('ready', () => {
  console.log('Is running nigga!');
  });
  client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  var welcome = [`Welcome, Stay a while and splooge ${member}`, `Welcome to Apogee's puss, slide right in ${member}`, `I will eat your ass ponyo ${member}`, `Feel free to be as lewd as possible ${member}`, `Welcome to the motherfuckin tilt-a-whirl ${member}`]
  channel.send(welcome[Math.floor(Math.random() * welcome.length)])
});

client.on('message', function(message)
{
    if(message.content.toUpperCase() == "#KMS")
    {
      const emoji = client.emojis.find("name", "TheCobain");
      message.channel.send(`Here's a gun, you know what to do ${emoji}` )
    }

    if(message.content.toUpperCase() == "#SEXYPON")
	  {
   		const emoji = client.emojis.find("name", "NSFW");
  	  message.channel.send(`Here, have this ${emoji}`)
		}

    if(message.content.toUpperCase() == "FUCKME")
    {
      message.channel.send("__When, where, and how? But most importantly, WHY????__")
    }

   	if(message.content.toUpperCase() == "APOGEE")
    {
      message.channel.send("Yeah?")
    }

    if(message.content.toUpperCase() == "WANNA FUCK?")
    {
       message.channel.send("You bet!")
    }

    if(message.content.toUpperCase() == "SPREAD IT THEN.")
    {
      message.channel.send("Alright. *Spreads pussy*")
    }

    if(message.content.toUpperCase() == "#WEWLAD")
    {
      const emoji = client.emojis.find("name", "TheRevenge");
      message.channel.send(`The wewest of the wew ${emoji}`)
    }
      if(message.content.toUpperCase() == "DERPY")
    {
      const emoji = client.emojis.find("name", "Thecute");
      message.channel.send(`Super cuteness for you ${emoji}`)
    }
});
