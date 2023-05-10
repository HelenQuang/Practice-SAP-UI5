sap.ui.define(
  ['sap/ui/core/util/MockServer', 'sap/base/util/UriParameters'],
  function (MockServer, UriParameters) {
    'use strict';

    return {
      init: function () {
        // Create mock server
        const oMockServer = new MockServer({
          rootUri: 'https://services.odata.org/V2/Northwind/Northwind.svc/',
        });

        const oUriParameters = new UriParameters(window.location.href);

        // Configure mock server with a delay
        MockServer.config({
          autoRespond: true,
          autoRespondAfter: oUriParameters.get('serverDelay') || 500,
        });

        // Simulate
        const sPath = '../localService';
        oMockServer.simulate(sPath + '/metadata.xml', sPath + '/mockdata');

        // Start mock server
        oMockServer.start();
      },
    };
  }
);
