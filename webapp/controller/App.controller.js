sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onClick: function () {
        //Fn for clicking button
        MessageToast.show("Thank you for clicking me!");
      },

      onInit: function () {
        const oData = {
          recipient: {
            name: "Helen Quang",
          },
        };

        const oModel = new JSONModel(oData);

        //Set data model to the view
        this.getView().setModel(oModel);
      },
    });
  }
);
