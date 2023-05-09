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
        const oView = this.getView();

        //Create dialog
        if (!this.byId('Dialog')) {
          //Load asynchronously dialog XML fragment
          Fragment.load({
            id: oView.getId(),
            name: 'sap.ui.demo.walkthrough.view.Dialog',
            controller: this,
          }).then(function (oDialog) {
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId('Dialog').open();
        }
      },

      onCloseDialog: function () {
        this.byId('Dialog').close();
      },
    });
  }
);
