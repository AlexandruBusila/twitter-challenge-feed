
define([
  "backbone",
  "app/app"
], function (Backbone, Application) {

  return Backbone.Model.extend({

    save: function () {
      // Save everything from this model
      Application.setStorageObject(this.toJSON());
    },

    fetch: function () {
      // Set this model hash (attributes) to the storage
      this.set(Application.getStorageObject());
    }
  });
});
