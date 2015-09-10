angular.module('mdServicesMod', [])
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

  .controller('mdServicesCtrl', function($scope, mdServicesFactory) {
    "use strict";
    $scope.mdServices = mdServicesFactory.mdServices;
  })
;
