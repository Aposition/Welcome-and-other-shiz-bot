const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();

client.login("TOKEN");

client.on('ready', function()
{
  console.log('Is running nigga!');
});

client.on('guildMemberAdd', function(member)
{
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  var welcome = [
    `Welcome, Stay a while and splooge ${member}`,
    `Welcome to Apogee's puss, slide right in ${member}`,
    `I will eat your ass ponyo ${member}`,
    `Feel free to be as lewd as possible ${member}`,
    `Welcome to the motherfuckin tilt-a-whirl ${member}`,
    `Yeet fam ${member}`,
    `Go ahead and have some fun ${member}`,
    `You better buff Glaz ${member}`,
    `NANI!?! OwO ${member}`,
    `Oh lord ${member} is here`,
    `Gonna shoot you if you touch Apogee ${member}`,
    `Welcome, if you're feeling scuicidal you've come to the right place, cause I wanna fucking kill myself too *flips chair* ${member}`,
    `You are bae ${member}`,
    `Peep my tag ${member}`];
  channel.send(welcome[Math.floor(Math.random() * welcome.length)]);

  var roles = member.guild.roles;
  for(var[key, role] of roles)
  {
    if(role.name.toUpperCase() === "PONY LOVER")
    {
      member.addRole(role);
    }
    if(role.name.toUpperCase() === "NO NSFW VIEWING")
    {
      member.addRole(role);
    }
  }

});

client.on('message', function(message)
{
  if (message.author.id === client.user.id) return; //If it's the bot talking
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toUpperCase();
  try
  {
    var commandFile = require(`./commands/${command}.js`);
    commandFile.run(client,message);
  }
  catch(err) {}

  switch(command)
  {
    case "BECOME":
      if(args[0] === "CLOPPER")
      {
        var roles = message.member.guild.roles;
        for(var[key, role] of roles)
        {
          if(role.name.toUpperCase() === "CLOPPERS")
          {
            message.member.addRole(role);
          }
          if(role.name.toUpperCase() === "NO NSFW VIEWING")
          {
            message.member.removeRole(role);
          }
        }
        message.reply("You are now a clopper ( ͡° ͜ʖ ͡°)")
      }
      break;

    case "#SEXYPON":
      var emoji = client.emojis.find("name", "NSFW");
      message.channel.send(`Here, have this ${emoji}`);
      break;

    case "FUCKME":
      message.channel.send("__When, where, and how? But most importantly, WHY????__");
      break;

    case "APOGEE":
      message.channel.send("Yeah?");
      break;

    case "WANNA FUCK?":
      message.channel.send("You bet!");
      break;

    case "SPREAD IT THEN.":
      message.channel.send("Alright. *Spreads pussy*");
      break;

    case "#WEWLAD":
      var emoji = client.emojis.find("name", "TheRevenge");
      message.channel.send(`The wewest of the wew ${emoji}`);
      break;

    case "DERPY":
      var emoji = client.emojis.find("name", "Thecute");
      message.channel.send(`Super cuteness for you ${emoji}`);
      break;

    case "PONYO":
      var emoji = client.emojis.find("name", "Ponyo");
      message.channel.send(`Heres a pone being silly ${emoji}`);
      break;

   case "AYYBB":
     var emoji = client.emojis.find("name", "EyyBby");
     message.channel.send(`Ayyyyyyyyyy ${emoji}`);
     break;

    default:
      break;
  }
});
