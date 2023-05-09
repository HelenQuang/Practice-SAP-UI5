sap.ui.define(
  ['sap/ui/base/ManagedObject', 'sap/ui/core/Fragment'],
  function (ManagedObject, Fragment) {
    'use strict';

    return ManagedObject.extend('sap.ui.walkthrough.controller.Dialog', {
      constructor: function (oView) {
        this._oView = oView;
      },

      exit: function () {
        delete this._oView;
      },

      open: function () {
        const oView = this._oView;

        //Create dialog
        if (!oView.byId('Dialog')) {
          const oFragmentController = {
            onCloseDialog: function () {
              oView.byId('Dialog').close();
            },
          };

          //Load asynchronously dialog XML fragment
          Fragment.load({
            id: oView.getId(),
            name: 'sap.ui.demo.walkthrough.view.Dialog',
            controller: oFragmentController,
          }).then(function (oDialog) {
            //Connect dialog to the root view of the component
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          oView.byId('Dialog').open();
        }
      },
    });
  }
);
