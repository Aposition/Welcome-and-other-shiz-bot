exports.run = function(client, message)
{
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(args[0])
  {
    if(args[0] != message.author)
    {
      var random = (Math.floor(Math.random() * 6) + 1);
      message.channel.send("Rolled a " + random);
      if(random > 3) //6,5 or 4
      {
        message.channel.send(message.author.username + " succeeded to " + command  + " " + message.content.substring(command.length + 1));
      }
      else if(random < 2) //1
      {
        message.channel.send(message.author.username + " missed so badly " + message.content.substring(command.length + 1) + " that he fell and got " + command + "ed back");
      }
      else //2 or 3
      {
        message.channel.send(message.author.username + " didn't succeed to " + command + " " + message.content.substring(command.length + 1));
      }
    }
  }
  else
  {
    message.reply("Who are you trying to " + command + " lmao");
  }
}
