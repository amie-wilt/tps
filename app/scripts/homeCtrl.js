class HomeCtrl {
  constructor($scope, homeFactory) {
    $scope.companyName = homeFactory.companyName;
    $scope.companyServices = homeFactory.companyServices;
  }
}

angular.module('homeMod', [])

.factory('homeFactory', [function () {
  return {
    companyName: 'Tony\'s Performance Services',
    companyServices: [
      {
        name: 'Mobile Detailing',
        sref: 'mobile-detailing'
      },
      {
        name: 'Pressure Washing',
        sref: 'pressure-washing'
      }
    ]
  };
}])

  .controller('homeCtrl', HomeCtrl)
;
