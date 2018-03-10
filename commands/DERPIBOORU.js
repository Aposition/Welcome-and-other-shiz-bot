const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.run = function(client, message)
{
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.channel.nsfw || message.channel.type === "dm") //If the channel is NSFW or was send in PM
  {
    getClopList(message); //call getClopList with the given tags and the message object
  }
  else
  {
    message.channel.send("This channel isn't NSFW, do you want our little fillies to be traumatized ?");
  }
}

function setClopList(data, message)
{
  var clopList = data.split("\"full\""); //Split the differents images found in the clopList array
  for(var i = 1; i <= clopList.length - 1; i++) //For every element of the array
  {
    var start_url = clopList[i].indexOf("\"full\"") + 5; //Find the start of the URL
    var end_url = clopList[i].indexOf("\"},"); //Find the end of the URL
    clopList[i] = clopList[i].substring(start_url,end_url); //Replace the whole text by just the URL
  }
  clopList.shift(); //Remove the first element
  if(clopList[0] === undefined)
  {
    message.channel.send("No porn could be found (you should probably tell @Gaiben#7736 about it)");
    return;
  }
  message.channel.send("Here you go, some not so family friendly porn");
  message.channel.send("https://" + clopList[Math.floor(Math.random() * clopList.length)]); //Send a random element of the array
  return true;
}

function getClopList(message)
{
  var r34 = new XMLHttpRequest();
  r34.open("GET","https://derpibooru.org/tags/explicit.json?key=8PJq9sL9kzLzrYe1ycxh", true);
  r34.send(null); //send a GET request to the URL above
  r34.addEventListener("readystatechange", function()
  {
    if(r34.readyState === 4) //if the page is fully loaded
    {
      return setClopList(r34.responseText, message); //call setClopList with a parameter which is the text of the site
    }
  });
}
