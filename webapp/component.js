sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
    './controller/Dialog',
  ],
  function (UIComponent, JSONModel, ResourceModel, Dialog) {
    'use strict';

    return UIComponent.extend('sap.ui.demo.walkthrough.Component', {
      metadata: {
        manifest: 'json',
      },

      init: function () {
        // Call the init function of the UI parent
        UIComponent.prototype.init.apply(this, arguments);

        // Set data JSON models
        const oData = {
          recipient: {
            name: 'Helen Quang',
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        //Set dialog
        this._dialog = new Dialog(this.getRootControl());

        //Create the view
        this.getRouter().initialize();
      },

      exit: function () {
        this._dialog.destroy();
        delete this._dialog;
      },

      openDialog: function () {
        this._dialog.open();
      },
    });
  }
);
