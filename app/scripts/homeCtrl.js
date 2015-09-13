class HomeCtrl {
  constructor($scope, homeFactory) {
    $scope.companyName = homeFactory.companyName;
    $scope.companyServices = homeFactory.companyServices;
  }
}

var homeFactory = () => {
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
};

angular.module('homeMod', [])

  .factory('homeFactory', homeFactory)

  .controller('homeCtrl', HomeCtrl);
