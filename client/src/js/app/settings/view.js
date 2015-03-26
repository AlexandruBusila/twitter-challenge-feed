
define([
  "underscore",
  "marionette",
  "text!app/settings/template.html",
  "app/app"
], function (_, Marionette, settingsTemplate, Application) {

  return Marionette.ItemView.extend({

    className: "container",
    tagName: "div",
    template: _.template(settingsTemplate),

    events: {
      "click #btn-settings-save": "saveSettings"
    },

    saveSettings: function () {
      // Databinding would be awesome here
      var sNameColA = this.$("#input-name-column-a"),
        sNameColB = this.$("#input-name-column-b"),
        sNameColC = this.$("#input-name-column-c"),
        sCountColA = this.$("#input-count-column-a"),
        sCountColB = this.$("#input-count-column-b"),
        sCountColC = this.$("#input-count-column-c");
      this.model.set("nameColumnA",
        sNameColA.val() || sNameColA.attr("placeholder"));
      this.model.set("nameColumnB",
        sNameColB.val() || sNameColB.attr("placeholder"));
      this.model.set("nameColumnC",
        sNameColC.val() || sNameColC.attr("placeholder"));
      this.model.set("countColumnA",
        sCountColA.val() || sCountColA.attr("placeholder"));
      this.model.set("countColumnB",
        sCountColB.val() || sCountColB.attr("placeholder"));
      this.model.set("countColumnC",
        sCountColC.val() || sCountColC.attr("placeholder"));

      // No need for futures since we overwrote the save
      this.model.save();

      Application.commands.execute("refresh:tweets");
    }

  });

});
