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
        var oData = {
          recipient: {
            name: 'Helen Quang',
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        //Set dialog
        this._dialog = new Dialog(this.getRootControl());
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
