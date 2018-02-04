var http = require('http');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Discord = require('discord.js');
const client = new Discord.Client();
var clopList;
var emoji;
var msg;

client.login("Token");

function setClopList(data)
{
  clopList = data.split("<post "); //Split the differents images found in the clopList array
  for(var i = 1; i <= clopList.length - 1; i++) //For every element of the array
  {
    var start_url = clopList[i].indexOf("file_url=") + 10; //Find the start of the URL
    var end_url = clopList[i].indexOf("parent_id=") - 2; //Find the end of the URL
    clopList[i] = clopList[i].substring(start_url,end_url); //Replace the whole text by just the URL
  }
  clopList.shift(); //Remove the first element
  if(clopList[0] === undefined)
  {
    msg.channel.send("No porn could be found with your stupid ass tag");
    return;
  }
  msg.channel.send("Here you go, some not so family friendly porn");
  msg.channel.send(clopList[Math.floor(Math.random() * clopList.length)]); //Send a random element of the array
  return true;
}

function getClopList(tag)
{
  var r34 = new XMLHttpRequest();
  r34.open("GET","https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=100&tags=" + tag,true);
  r34.send(null); //send a GET request to the URL above
  r34.addEventListener("readystatechange", function()
  {
    if(r34.readyState === 4) //if the page is fully loaded
    {
      return setClopList(r34.responseText); //call setClopList with a parameter which is the text of the site
    }
  });
}

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
});

client.on('message', function(message)
{
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toUpperCase();
  switch(command)
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

    case "PONYO":
      emoji = client.emojis.find("name", "Ponyo");
      message.channel.send(`Heres a pone being silly ${emoji}`);
      break;

    case "#RULE34":
      if(message.channel.nsfw || message.channel.type === "dm") //If the channel is NSFW or was send in PM
      {
        getClopList(args[0]); //call getClopList with the given tags and the message object
      }
      else
      {
        message.channel.send("This channel isn't NSFW, do you want our little fillies to be traumatized ?");
      }
      break;

    case "SLAP":
      if(args[0])
      {
        if(args[0] != message.author)
        {
          var random = (Math.floor(Math.random() * 6) + 1);
          message.channel.send("Rolled a " + random);
          if(random > 4)
          {
            message.channel.send(message.author.username + " succeeded to slap " + args[0]);
          }
          else if(random < 2)
          {
            message.channel.send(message.author.username + " missed so badly " + args[0] + " that he fell");
          }
          else
          {
            message.channel.send(message.author.username + " didn't succeed to slap " + args[0]);
          }
        }
      }
      else
      {
        message.reply("Who are you trying to slap lmao");
      }
      break;

    default:
      break;
  }
});
