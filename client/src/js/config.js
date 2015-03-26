
define([
  "underscore",
  "app/app"
], function (_, Application) {

  // Customize Underscore templates
  _.templateSettings = {
    interpolate: /\{\{=(.+?)\}\}/g,
    escape: /\{\{-(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
  };

  // Store if not defined
  Application.defaultStorage("nameColumnA", "AppDirect");
  Application.defaultStorage("nameColumnB", "laughingsquid");
  Application.defaultStorage("nameColumnC", "techcrunch");

  Application.defaultStorage("countColumnA", 30);
  Application.defaultStorage("countColumnB", 30);
  Application.defaultStorage("countColumnC", 30);

});
