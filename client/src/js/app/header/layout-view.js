
define([
  "marionette",
  "text!app/header/template.html"
], function (Marionette, HeaderTemplate) {

  return Marionette.LayoutView.extend({

    tagName: "div",
    className: "navbar navbar-inverse navbar-static-top",

    template: function () {
      return HeaderTemplate;
    }

  });

});
