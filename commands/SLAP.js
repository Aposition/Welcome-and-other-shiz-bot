exports.run = function(client, message, args)
{
  if(args[0])
  {
    if(args[0] != message.author)
    {
      var random = (Math.floor(Math.random() * 6) + 1);
      message.channel.send("Rolled a " + random);
      if(random > 4)
      {
        message.channel.send(message.author.username + " succeeded to slap " + message.content.substring(5));
      }
      else if(random < 2)
      {
        message.channel.send(message.author.username + " missed so badly " + message.content.substring(5) + " that he fell");
      }
      else
      {
        message.channel.send(message.author.username + " didn't succeed to slap " + message.content.substring(5));
      }
    }
  }
  else
  {
    message.reply("Who are you trying to slap lmao");
  }
}
