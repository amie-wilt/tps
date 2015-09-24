'use strict';

angular.module('tps', [
  'ui.router',
  'homeMod',
  'aboutMod',
  'mdMod',
  'mdServicesMod',
  'galleryMod',
  'contactMod',
  'pwMod',
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
      .state('contact', {
        url: '/contact',
        templateUrl: '/views/contact.html',
        controller: 'contactCtrl'
      })
      .state('mobile-detailing', {
        url: '/mobile-detailing',
        templateUrl: '../views/mobile-detailing.html',
        controller: 'mdCtrl'
      })
      .state('mobile-detailing.about', {
        url: '/about',
        templateUrl: '../partials/about.html',
        controller: 'aboutCtrl'
      })
      .state('mobile-detailing.services', {
        url: '/mobile-detailing/services',
        templateUrl: '../partials/md-services.html',
        controller: 'mdServicesCtrl'
      })
      .state('mobile-detailing.gallery', {
        url: '/mobile-detailing/gallery',
        templateUrl: '../partials/md-gallery.html',
        controller: 'galleryCtrl'
      })
      .state('mobile-detailing.contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })
      .state('pressure-washing', {
        url: '/pressure-washing',
        templateUrl: '../views/pressure-washing.html',
        controller: 'pwCtrl'
      })
      .state('pressure-washing.about', {
        url: '/about',
        templateUrl: '../partials/about.html',
        controller: 'aboutCtrl'
      })
      .state('pressure-washing.services', {
        url: '/pressure-washing/services',
        templateUrl: '../partials/pw-services.html',
        controller: 'pwServicesCtrl'
      })
      .state('pressure-washing.gallery', {
        url: '/pressure-washing/gallery',
        templateUrl: '../partials/pw-gallery.html',
        controller: 'galleryCtrl'
      })
      .state('pressure-washing.contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      });
  })
;
