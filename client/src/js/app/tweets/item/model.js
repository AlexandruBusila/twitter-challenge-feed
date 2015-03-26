
define([
  "underscore",
  "backbone"
], function (_, Backbone) {

  return Backbone.Model.extend({

    parse: function (response, options) {
      //console.log("Twitter data", response);
      // Here it is just for formatting purposes and not to flatten the model
      // If nested, events will fuck up unless loaded a Backbone plugin
      // Also since we don't do model.save() it's not too bad if we change the data :)
      var result = _.cloneDeep(response);

      // Formatting of the date
      result.created_at = (new Date(result.created_at)).toLocaleDateString();

      // Formatting of the text string
      for (var i = 0, len = result.entities.user_mentions.length; i < len; ++i) {
        result.text =
          result.text.replace("@" + result.entities.user_mentions[i].name,
            "<a href=\"https://twitter.com/" +
              result.entities.user_mentions[i].screen_name + "\">" +
                "@" + result.entities.user_mentions[i].name +
            "</a>");
        result.text =
          result.text.replace("@" + result.entities.user_mentions[i].screen_name,
            "<a href=\"https://twitter.com/" +
              result.entities.user_mentions[i].screen_name + "\">" +
                "@" + result.entities.user_mentions[i].screen_name +
            "</a>");
      }
      for (var i = 0, len = result.entities.urls.length; i < len; ++i) {
        result.text =
          result.text.replace(result.entities.urls[i].url,
            "<a href=\"" + result.entities.urls[i].expanded_url + "\">" +
              result.entities.urls[i].url +
            "</a>");
      }
      if (result.entities.media) {
        for (var i = 0, len = result.entities.media.length; i < len; ++i) {
          result.text =
            result.text.replace(result.entities.media[i].url,
              "<a href=\"" + result.entities.media[i].media_url_https + "\">" +
                result.entities.media[i].url +
              "</a>");
        }
      }


      return result;
    }

  });

});
