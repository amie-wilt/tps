angular.module('mdServicesMod', [])
  .factory('mdServicesFactory', [function () {
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
    };
  }])

  .controller('mdServicesCtrl', function($scope, mdServicesFactory) {
    $scope.mdServices = mdServicesFactory.mdServices;
  })
;
