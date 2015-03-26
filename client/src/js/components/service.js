
define([
  "marionette"
], function (Marionette) {

  return Marionette.Object.extend({

    initialize: function (options) {
      this.container = options.container;
      this.start();
    },

    start: function () {
      this.triggerMethod('before:start');
      this._isStarted = true;
      this.triggerMethod('start');
    },

    stop: function () {
      this.triggerMethod('before:stop');
      this._isStarted = false;
      this.triggerMethod('stop');
    },

    isStarted: function () {
      return this._isStarted === true;
    }

  });

});
