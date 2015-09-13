class HomeCtrl {
  constructor($scope, homeFac) {
    $scope.companyName = homeFac.companyName;
    $scope.companyServices = homeFac.companyServices;
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

  .factory('homeFac', homeFactory)

  .controller('homeCtrl', HomeCtrl);
