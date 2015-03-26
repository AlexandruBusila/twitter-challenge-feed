
define([
  "marionette",
  "text!app/tweets/template.html"
], function (Marionette, TweetsLayoutTemplate) {

  return Marionette.LayoutView.extend({

    className: "tweets-collection-container row",
    template: function () {
      return TweetsLayoutTemplate;
    },

    regions: {
      tweetsColumnARegion: ".tweet-collection-column-a",
      tweetsColumnBRegion: ".tweet-collection-column-b",
      tweetsColumnCRegion: ".tweet-collection-column-c"
    }

  });

});
