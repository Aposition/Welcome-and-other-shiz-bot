on exports.run = function(client, message)
{
  console.log("SUCC")
  var action = require('./action.js');
  action.run(client,message);
}
