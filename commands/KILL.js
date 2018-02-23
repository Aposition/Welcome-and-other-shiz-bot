exports.run = function(client, message)
{
  var action require(`./action.js`);
  action.run(client, message);
}
