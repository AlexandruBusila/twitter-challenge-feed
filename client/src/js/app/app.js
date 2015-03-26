
define([
  "jquery",
  "marionette",
  "app/layout-view"
], function ($, Marionette, AppLayoutView) {

  return new (Marionette.Application.extend({

    initialize: function () {
      // Local storage yay
      this.storage = {};
      this.storageKeys = {};

      this.$body = $(document.body);
      this.layout = new AppLayoutView();
      this.layout.render();
    },


    setStorage: function (key, data) {
      var _key = key.toString();
      this.storageKeys[_key] || (this.storageKeys[_key] = true);

      // Check if storage exists
      if (typeof(Storage) === undefined) {
        storage[_key] = data;
      } else {
        window.localStorage.setItem(_key, data);
      }

      return data;
    },

    getStorage: function (key) {
      var _key = key.toString();

      // Check if storage exists
      var result = null;
      if (typeof(Storage) === undefined) {
        result = storage[_key];
      } else {
        result = window.localStorage[_key];
      }

      if (result != null) {
        this.storageKeys[_key] = true;
      }

      return result;
    },

    defaultStorage: function (key, data) {
      return this.getStorage(key) || this.setStorage(key, data);
    },

    setStorageObject: function (dataObject) {
      var _properties = Object.getOwnPropertyNames(dataObject);
      for (var i = 0, len = _properties.length; i < len; ++i) {
        this.setStorage(_properties[i], dataObject[_properties[i]]);
      }
    },

    getStorageObject: function () {
      var result = {},
        _properties = Object.getOwnPropertyNames(this.storageKeys);

      for (var i = 0, len = _properties.length; i < len; ++i) {
        result[_properties[i]] = this.getStorage(_properties[i]);
      }

      return result;
    }

  }))();

});
