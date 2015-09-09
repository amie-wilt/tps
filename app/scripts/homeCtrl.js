angular.module('tps.homeCtrl', [])
  .controller('homeCtrl', ['$scope', 'Home', function($scope, Home) {
    "use strict";
    $scope.companyName = Home.companyName;
    $scope.companyServices = Home.companyServices;
  }])
;
