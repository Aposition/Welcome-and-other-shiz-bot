const Discord = require('discord.js');
const client = new Discord.Client();
var emoji = undefined;

client.login('MTY2NjUyNjg2MjY2MTM4NjI1.DUXJjQ.nirmk7cimcHZ_x5mcJXqfBfbwJo');

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
  switch(message.content.toUpperCase())
  {
    case "#KMS":
      emoji = client.emojis.find("name", "TheCobain");
      message.channel.send(`Here's a gun, you know what to do ${emoji}`);
      break;

    case "#SEXYPON":
      emoji = client.emojis.find("name", "NSFW");
      message.channel.send(`Here, have this ${emoji}`);
      break;

    case "FUCKME":
      message.channel.send("__When, where, and how? But most importantly, WHY????__");
      break;

    case "APOGEE":
      message.channel.send("Yeah?");
      break;

    case "WANNA FUCK?":
      message.channel.send("Yeah?")
      break;

    case "WANNA FUCK?":
      message.channel.send("You bet!");
      break;

    case "SPREAD IT THEN.":
      message.channel.send("Alright. *Spreads pussy*");
      break;

    case "#WEWLAD":
      emoji = client.emojis.find("name", "TheRevenge");
      message.channel.send(`The wewest of the wew ${emoji}`);
      break;

    case "DERPY":
      emoji = client.emojis.find("name", "Thecute");
      message.channel.send(`Super cuteness for you ${emoji}`);
      break;

    default:
      break;
  }
});
