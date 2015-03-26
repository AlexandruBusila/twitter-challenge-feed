
// Register CoffeeScript so we can load ".coffee" files :)
var __coffeeScriptRegister = require("coffee-script/register");


// Load up and boot up the HTTP server
var server = module.exports = require(__dirname + "/backend/server.coffee");
server.start(function () {
  console.log("--> Serving challenge!");
});
