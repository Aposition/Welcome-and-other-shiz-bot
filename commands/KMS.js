exports.run = function(client, message)
{
  message.content = "kill himself";
  var action = require(`./action.js`);
  action.run(client, message);
}
