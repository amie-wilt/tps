'use strict';

angular.module('tps', [
  'ui.router'
])

  .config(function($stateProvider, $urlRouterProvider) {

  })

  .controller('MobileDetailServicesCtrl', ($scope) => {
    $scope.services = {
      carWash: {
        name: 'Car Wash',
        price: 25
      },
      washWax: {
        name: 'Wash and Wax',
        price: 50
      },
      fullDetail: {
        name: 'Full Detail',
        price: '130'
      }
    }
  })
;
