sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        // Call the init function of the UI parent
        UIComponent.prototype.init.apply(this, arguments);

        // Set data JSON models
        var oData = {
          recipient: {
            name: "Helen Quang",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);
      },
    });
  }
);
