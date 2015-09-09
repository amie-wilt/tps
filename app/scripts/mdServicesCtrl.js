angular.module('tps.mdServicesCtrl', [])
  .controller('mdServicesCtrl', ['$scope', 'mdServices', function($scope, mdServices) {
    "use strict";
    $scope.mdServices = mdServices.;
  }])
;
