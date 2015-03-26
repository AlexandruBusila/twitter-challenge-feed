
var gulp = require("gulp"),
  gulpPlugins = require("gulp-load-plugins")();


// Paths for file
var paths = {
  clientVendors: __dirname + "/client/vendors/",
  clientSrc: "client/src/",
  clientServeDev: "backend/public/static/",
  clientTest: "client/test/",
  clientTestLib: "client/test/lib/"
};


// Function to load Gulp file tasks
var loadGulpFile = function (path) {
  (require(path))(gulp, gulpPlugins, paths);
};

// Load Gulp file tasks
loadGulpFile(__dirname + "/gulp/client-deploy.js");


// Tasks
gulp.task("default", [
  "client-deploy-watch"
], function (done) {

  var exec = require("child_process").exec,
    open = require("open");

  exec("node main.js", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);

    done(err);
  });

  // Wait for server to start to open URL (1 sec or so)
  setTimeout(function () {
    open("http://localhost:3000");
  }, 1000);

});
