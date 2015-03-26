
define([
  "jquery",
  "app/app",
  "components/service",
  "app/tweets/layout-view",
  "app/tweets/list/collection",
  "app/tweets/list/view"
], function ($, Application, ServiceComponent, TweetLayoutView,
  TweetCollection, TweetListView) {


    return ServiceComponent.extend({

      onStart: function () {
        // Show Tweets Layout
        this.layout = new TweetLayoutView();
        this.container.show(this.layout);

        // Query for ColumnA
        this.tweetsColumnA = new TweetCollection();
        this.tweetsColumnA.fetch({
          data: {
            name: Application.getStorage("nameColumnA"),
            count: Application.getStorage("countColumnA")
          }
        })
          .done((function (_this) {
            return function () {
              _this.layout.tweetsColumnARegion.show(new TweetListView({
                model: new Backbone.Model({
                  name: Application.getStorage("nameColumnA")
                }),
                collection: _this.tweetsColumnA
              }));
            }
          })(this))
          .fail((function (_this) {
            return function (jqXHR, textStatus, error) {
              _this.layout.tweetsColumnARegion.show(new TweetListView({
                model: new Backbone.Model({
                  name: Application.getStorage("nameColumnA")
                }),
                collection: null,
                errorMessage: error
              }));
            }
          })(this));


        // Query for ColumnB
        this.tweetsColumnB = new TweetCollection();
        this.tweetsColumnB.fetch({
          data: {
            name: Application.getStorage("nameColumnB"),
            count: Application.getStorage("countColumnB")
          }
        })
          .done((function (_this) {
            return function () {
              _this.layout.tweetsColumnBRegion.show(new TweetListView({
                model: new Backbone.Model({
                  name: Application.getStorage("nameColumnB")
                }),
                collection: _this.tweetsColumnB
              }));
            }
          })(this))
          .fail((function (_this) {
            return function (jqXHR, textStatus, error) {
              _this.layout.tweetsColumnBRegion.show(new TweetListView({
                model: new Backbone.Model({
                  name: Application.getStorage("nameColumnB")
                }),
                collection: null,
                errorMessage: error
              }));
            }
          })(this));


        // Query for the TechCrunch collection
        this.tweetsColumnC = new TweetCollection();
        this.tweetsColumnC.fetch({
          data: {
            name: Application.getStorage("nameColumnC"),
            count: Application.getStorage("countColumnC")
          }
        })
          .done((function (_this) {
            return function () {
              _this.layout.tweetsColumnCRegion.show(new TweetListView({
                model: new Backbone.Model({
                  name: Application.getStorage("nameColumnC")
                }),
                collection: _this.tweetsColumnC
              }));
            }
          })(this))
          .fail((function (_this) {
            return function (jqXHR, textStatus, error) {
              _this.layout.tweetsColumnCRegion.show(new TweetListView({
                model: new Backbone.Model({
                  name: Application.getStorage("nameColumnC")
                }),
                collection: null,
                errorMessage: error
              }));
            }
          })(this));
      },


      onClose: function () {
        this.layout.destroy();
      }

    });

});
