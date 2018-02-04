const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.run = function(client, message, args)
{
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
  console.log("test");
  var clopList = data.split("<post "); //Split the differents images found in the clopList array
  for(var i = 1; i <= clopList.length - 1; i++) //For every element of the array
  {
    var start_url = clopList[i].indexOf("file_url=") + 10; //Find the start of the URL
    var end_url = clopList[i].indexOf("parent_id=") - 2; //Find the end of the URL
    clopList[i] = clopList[i].substring(start_url,end_url); //Replace the whole text by just the URL
  }
  clopList.shift(); //Remove the first element
  if(clopList[0] === undefined)
  {
    message.channel.send("No porn could be found with your stupid ass tag");
    return;
  }
  message.channel.send("Here you go, some not so family friendly porn");
  message.channel.send(clopList[Math.floor(Math.random() * clopList.length)]); //Send a random element of the array
  return true;
}

function getClopList(tag, message)
{
  var r34 = new XMLHttpRequest();
  r34.open("GET","https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=100&tags=" + tag,true);
  r34.send(null); //send a GET request to the URL above
  r34.addEventListener("readystatechange", function()
  {
    if(r34.readyState === 4) //if the page is fully loaded
    {
      return setClopList(r34.responseText, message); //call setClopList with a parameter which is the text of the site
    }
  });
}
