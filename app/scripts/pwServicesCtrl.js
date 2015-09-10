angular.module('pwServicesMod', [])
  .factory('pwServicesFactory', function() {
    return {
      pwServices: [
        {
          name: "Residential",
          price: 200
        },
        {
          name: "Commercial",
          price: 2000
        }
      ]
    }
  })

  .controller('pwServicesCtrl', function($scope, pwServicesFactory) {
    $scope.pwServices = pwServicesFactory.pwServices;
  })
;
