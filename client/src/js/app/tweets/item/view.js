
define([
  "underscore",
  "marionette",
  "text!app/tweets/item/template.html"
], function (_, Marionette, tweetItemTemplate) {

  return Marionette.ItemView.extend({

    tagName: "div",
    className: "tweet-data-container",

    template: _.template(tweetItemTemplate)

  });

});
