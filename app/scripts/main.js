'use strict';

angular.module('tps', [
  'ui.router',
  'tps.homeCtrl',
  'tps.homeFactory',
  'tps.mdServicesCtrl',
  'tps.mdServicesFactory'
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
        templateUrl: '../views/mobile-detailing.html'
      })
      .state('mobile-detailing.md-services', {
        url: 'mobile-detailing/services',
        templateUrl: '../partials/md-services.html',
        controller: 'mdServicesCtrl'
      })
      .state('pressure-washing', {
        url: '/pressure-washing',
        templateUrl: '../views/pressure-washing.html'
      })
  }])
;
