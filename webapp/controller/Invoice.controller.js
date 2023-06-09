sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/Formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
  ],
  function (Controller, JSONModel, Formatter, Filter, FilterOperator) {
    'use strict';

    return Controller.extend('sap.ui.demo.walkthrough.controller.InvoiceList', {
      onInit: function () {
        const oViewModel = new JSONModel({
          currency: 'EUR',
        });
        this.getView().setModel(oViewModel, 'view');
      },

      formatter: Formatter,

      onFilterInvoices: function (oEvent) {
        //Build filter array based on query input
        const aFilter = [];
        const sQuery = oEvent.getParameter('query');
        if (sQuery) {
          aFilter.push(
            new Filter('ProductName', FilterOperator.Contains, sQuery)
          );
        }

        //Bind filter array to the invoice list
        const oList = this.byId('invoiceList');
        const oBinding = oList.getBinding('items');
        oBinding.filter(aFilter);
      },

      onPress: function (oEvent) {
        const oItem = oEvent.getSource();
        const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo('detail', {
          invoicePath: window.encodeURIComponent(
            oItem.getBindingContext('invoice').getPath().substr(1)
          ),
        });
      },
    });
  }
);
