angular.module('homeMod', [])
  .factory('homeFactory', [function() {
    "use strict";
    return {
      companyName: "Tony's Performance Services",
      companyServices: [
        {
          name: "Mobile Detailing",
          sref: "mobile-detailing"
        },
        {
          name: "Pressure Washing",
          sref: "pressure-washing"
        }
      ]
    }
  }])

  .controller('homeCtrl', function($scope, homeFactory) {
    $scope.companyName = homeFactory.companyName;
    $scope.companyServices = homeFactory.companyServices;
  })
;

//class HomeCtrl {
//  constructor($scope, homeFactory) {
//    "use strict";
//    $scope.companyName = homeFactory.companyName;
//    $scope.companyServices = homeFactory.companyServices;
//  }
//}
