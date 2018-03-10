const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.run = function(client, message)
{
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.channel.nsfw || message.channel.type === "dm") //If the channel is NSFW or was send in PM
  {
    getClopList(args[0], message); //call getClopList with the given tags and the message object
  }
  else
  {
    message.channel.send("This channel isn't NSFW, do you want our little fillies to be traumatized ?");
  }
}

function setClopList(data, message)
{
  var clopList = data.split("\"full\""); //Split the differents images found in the clopList array
  var length = clopList.length
  for(var i = 1; i <= length - 1; i++) //For every element of the array
  {
    var start_extension = clopList[i].indexOf(".");
    start_extension = clopList[i].indexOf(".", start_extension + 1);
    var end_extension = clopList[i].indexOf("\"", start_extension);
    extension = clopList[i].substring(start_extension + 1, end_extension); //Replace the whole text by just the URL
    var start_url = clopList[i].indexOf("\"full\"") + 5; //Find the start of the URL
    var end_url = end_extension; //Find the end of the URL
    if(extension === "mp3" || extension === "mp4" || extension === "webm")
    {
      clopList.splice(i, 1);
      i--;
      length--;
      continue;
    }
    clopList[i] = clopList[i].substring(start_url,end_url); //Replace the whole text by just the URL
  }

  clopList.shift(); //Remove the first element
  if(clopList[0] === undefined)
  {
    message.channel.send("No porn could be found with your stupid ass tag");
    return;
  }
  console.log("https://" + clopList[Math.floor(Math.random() * clopList.length)]);
  message.channel.send("https://" + clopList[Math.floor(Math.random() * clopList.length)]); //Send a random element of the array
  return true;
}

function getClopList(tag, message)
{
  var r34 = new XMLHttpRequest();
  if(tag === undefined)
  {
    r34.open("GET","https://derpibooru.org/tags/explicit.json?key=8PJq9sL9kzLzrYe1ycxh", true);
  }
  else
  {
    r34.open("GET","https://derpibooru.org/search.json?key=8PJq9sL9kzLzrYe1ycxh&q=" + tag, true);
  }
  r34.send(null); //send a GET request to the URL above
  r34.addEventListener("readystatechange", function()
  {
    if(r34.readyState === 4) //if the page is fully loaded
    {
      return setClopList(r34.responseText, message); //call setClopList with a parameter which is the text of the site
    }
  });
}
