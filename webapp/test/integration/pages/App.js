sap.ui.define(
  ['sap/ui/test/Opa5', 'sap/ui/test/actions/Press'],
  function (Opa5, Press) {
    'use strict';

    const sViewName = 'sap.ui.demo.walkthrough.view.HelloPanel';

    Opa5.createPageObjects({
      onTheAppPage: {
        actions: {
          iPressTheSayHelloWithDialogButton: function () {
            return this.waitFor({
              id: 'DialogBtn',
              viewName: sViewName,
              actions: new Press(),
              errorMessage:
                "Did not find the 'Open Dialog' button on the HelloPanel view",
            });
          },
        },

        assertions: {
          iShouldSeeTheHelloDialog: function () {
            return this.waitFor({
              controlType: 'sap.m.Dialog',
              success: function () {
                // we set the view busy, so we need to query the parent of the app
                Opa5.assert.ok(true, 'The dialog is open');
              },
              errorMessage: 'Did not find the dialog control',
            });
          },
        },
      },
    });
  }
);
