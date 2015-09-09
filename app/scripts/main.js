'use strict';

angular.module('tps', [
  'ui.router',
  'tps.homeCtrl',
  'tps.homeFactory'
])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {                    //name of state
        url: '/home',                     //the url that will show at the top in url bar
        templateUrl: 'views/home.html',   //the location of the html file for the state
        controller: 'homeCtrl'            //the controller associated with the state
      })
      .state('mobile-detailing', {
        url: '/mobile-detailing',
        templateUrl: 'views/mobile-detailing/mobile-detailing.html'
      })
      .state('pressure-washing', {
        url: '/pressure-washing',
        templateUrl: 'views/pressure-washing/pressure-washing.html'
      })
  }])

  //.controller('MobileDetailServicesCtrl', ($scope) => {
  //  $scope.services = {
  //    carWash: {
  //      name: 'Car Wash',
  //      price: 25
  //    },
  //    washWax: {
  //      name: 'Wash and Wax',
  //      price: 50
  //    },
  //    fullDetail: {
  //      name: 'Full Detail',
  //      price: '130'
  //    }
  //  }
  //})
;
