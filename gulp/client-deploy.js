
var rjs = require("requirejs")


module.exports = function (gulp, plugins, paths) {

  gulp.task("client-js-copy-dep-rjs", function () {

    return gulp.src(paths.clientVendors + "requirejs/require.js")
      .pipe(gulp.dest(paths.clientServeDev + "js/"));

  });


  gulp.task("client-js-build", function (done) {

    rjs.optimize({
      baseUrl: paths.clientSrc + "js/",
      name: "main",
      paths: {

        "text": paths.clientVendors + "requirejs-text/text",

        "underscore": paths.clientVendors + "lodash/lodash",
        "jquery": paths.clientVendors + "jquery/dist/jquery",

        "backbone": paths.clientVendors + "backbone/backbone",
        "marionette": paths.clientVendors + "marionette/lib/backbone.marionette"
      },
      shim: {
        "jquery": {
          exports: "$"
        }
      },
      optimize: "none",
      stubModules: ["text"],
      out: paths.clientServeDev + "js/bundle.js"
    }, function (buildResponse) {
      plugins.util.log(buildResponse);
      done();
    }, function (err) {
      plugins.util.log(err);
      done();
    });

  });


  gulp.task("client-css-build", function () {

    return gulp.src([
      paths.clientSrc + "css/bootstrap.css",
      paths.clientSrc + "css/main.css"
    ])
      .pipe(plugins.order([
        paths.clientSrc + "css/bootstrap.css",
        paths.clientSrc + "css/main.css"
      ]))
      .pipe(plugins.concat("bundle.css"))
      .pipe(gulp.dest(paths.clientServeDev + "css/"));

  });


  gulp.task("client-deploy", [
    "client-js-copy-dep-rjs",
    "client-js-build",
    "client-css-build"
  ], function () {

    gulp.watch(paths.clientSrc + "js/**/*", ["client-js-build"]);

    gulp.watch(paths.clientSrc + "css/**/*", ["client-css-build"]);

  });

};
