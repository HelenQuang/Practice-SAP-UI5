sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onInit: function () {
        const oData = {
          recipient: {
            name: "Helen Quang",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);

        //Set i18n model to the view
        const i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.getView().setModel(i18nModel, "i18n");
      },

      onClick: function () {
        //Read message from i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        //Show message
        MessageToast.show(sMsg);
      },
    });
  }
);
