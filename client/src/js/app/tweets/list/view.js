
define([
  "underscore",
  "marionette",
  "text!app/tweets/list/template.html",
  "app/tweets/item/view"
], function (_, Marionette, tweetListTemplate, TweetItemView) {

  return Marionette.CompositeView.extend({

    className: "col-md-4 col-sm-6 col-xs-12",
    template: _.template(tweetListTemplate),

    childViewContainer: ".tweet-collection-elements",
    childView: TweetItemView,


    initialize: function (options) {
      if ((!this.collection) && (!options.collection)) {
        this.error = {};
        this.error.message = options.errorMessage;
      }
    },

    onRender: function () {
      if (this.error) {
        this.$(".tweet-collection-elements")
          .html("<p class=\"tweet-collection-error\">" +
            this.error.message + "</p>");
      }
    }

  });

});
