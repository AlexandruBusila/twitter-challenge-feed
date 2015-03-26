
define([
  "backbone",
  "app/tweets/item/model"
], function (Backbone, TweetModel) {

  return Backbone.Collection.extend({

    url: "api/tweets",
    model: TweetModel

  });

});
