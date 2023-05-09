sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 'sap/ui/core/Fragment'],
  function (Controller, MessageToast, Fragment) {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.HelloPanel', {
      onClick: function () {
        //Read message from i18n model
        const oView = this.getView();
        const oBundle = oView.getModel('i18n').getResourceBundle();
        const sRecipient = oView.getModel().getProperty('/recipient/name');
        const sMsg = oBundle.getText('helloMsg', [sRecipient]);

        //Show message
        MessageToast.show(sMsg);
      },

      onOpenDialog: function () {
        this.getOwnerComponent().openDialog();
      },
    });
  }
);
