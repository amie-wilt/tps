'use strict';

angular.module('tps', [
  'ui.router',
  'homeMod',
  'mdAboutMod',
  'mdGalleryMod',
  'mdServicesMod',
  'pwAboutMod',
  'pwServicesMod'
])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {                    //name of state
        url: '/home',                     //the url that will show at the top in url bar
        templateUrl: 'views/home.html',   //the location of the html file for the state
        controller: 'homeCtrl'            //the controller associated with the state,
      })
      .state('mobile-detailing', {
        url: '/mobile-detailing',
        templateUrl: '../views/mobile-detailing.html'
      })
      .state('mobile-detailing.about', {
        url: '/mobile-detailing/about',
        templateUrl: '../partials/md-about.html',
        controller: 'mdAboutCtrl'
      })
      .state('mobile-detailing.services', {
        url: '/mobile-detailing/services',
        templateUrl: '../partials/md-services.html',
        controller: 'mdServicesCtrl'
      })
      .state('mobile-detailing.gallery', {
        url: '/mobile-detailing/gallery',
        templateUrl: '../partials/md-gallery.html',
        controller: 'mdGalleryCtrl'
      })
      .state('mobile-detailing.contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      })
      .state('pressure-washing', {
        url: '/pressure-washing',
        templateUrl: '../views/pressure-washing.html'
      })
      .state('pressure-washing.about', {
        url: '/pressure-washing/about',
        templateUrl: '../partials/pw-about.html',
        controller: 'pwAboutCtrl'
      })
      .state('pressure-washing.services', {
        url: '/pressure-washing/services',
        templateUrl: '../partials/pw-services.html',
        controller: 'pwServicesCtrl'
      })
      .state('pressure-washing.contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      });
  })
;
