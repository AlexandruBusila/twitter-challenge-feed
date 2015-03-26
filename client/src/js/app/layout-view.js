
define([
  "marionette",
  "text!app/template.html"
], function (Marionette, appTemplate) {

  return Marionette.LayoutView.extend({

    el: ".application",
    template: function () {
      return appTemplate;
    },

    regions: {
      headerRegion: ".app-header",
      settingsRegion: ".app-settings",
      tweetsRegion: ".app-tweets"
    }
  });

});
