sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/Formatter',
  ],
  function (Controller, JSONModel, Formatter) {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.InvoiceList', {
      onInit: function () {
        var oViewModel = new JSONModel({
          currency: 'EUR',
        });
        this.getView().setModel(oViewModel, 'view');
      },
      formatter: Formatter,
    });
  }
);
