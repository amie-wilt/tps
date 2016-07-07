class HomeCtrl {
  constructor($scope, homeFac) {
    $scope.companyName = homeFac.companyName;
    $scope.companyServices = homeFac.companyServices;
    $scope.companyTagline = homeFac.companyTagline;
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
      },
      {
        name: 'Window Cleaning',
        sref: 'window-cleaning'
      }
    ],
    companyTagline: 'Our water. Our electric. Your convenience.'
  };
};

angular.module('homeMod', [])
  .factory('homeFac', homeFactory)

  .controller('homeCtrl', HomeCtrl);

  //.animation('.home-page-company-name', () => {
  //  return {
  //
  //  }
  //});
