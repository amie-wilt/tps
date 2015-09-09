angular.module('tps.mdServicesFactory', [])
  .factory('mdServicesFactory', [function () {
    "use strict";
    return {
      mdServices: [
        {
          name: 'Wash',
          price: '30'
        },
        {
          name: 'Wash and Wax',
          price: 50
        },
        {
          name: 'Full Detail',
          price: '130'
        }
      ]
    }
  }])
;
