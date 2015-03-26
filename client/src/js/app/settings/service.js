
define([
  "app/app",
  "components/service",
  "app/settings/view",
  "app/settings/model"
], function (Application, ServiceComponent,
  SettingsView, SettingsModel) {

  return ServiceComponent.extend({

    onStart: function () {
      // Show the settings configuration view
      this.settingsModel = new SettingsModel();
      this.settingsModel.fetch(); // This one is not a promise

      this.view = new SettingsView({
        model: this.settingsModel
      });
      this.container.show(this.view);
    },


    onBeforeStop: function () {
      // Clean up
      this.container.reset();
      this.settingsModel.off("change");
    }

  });

});
