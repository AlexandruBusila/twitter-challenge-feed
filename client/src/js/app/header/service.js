
define([
  "components/service",
  "app/header/layout-view"
], function (ServiceComponent, HeaderLayoutView) {

  return ServiceComponent.extend({

    onStart: function () {
      this.container.show(new HeaderLayoutView());
    }

  });

});
