exports.run = function(client, message, args)
{
  var action = require('./action.js');
  action.run(client,message,args);
}
