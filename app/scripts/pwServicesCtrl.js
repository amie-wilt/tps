class PwServicesCtrl {
  constructor ($scope, pwServicesFactory) {
    $scope.pwServices = pwServicesFactory.pwServices;
  }
}

var pwServicesFactory = () => {
  return {
    pwServices: [
      {
        name: 'Residential',
        price: 200
      },
      {
        name: 'Commercial',
                price: 2000
            }
        ]
    };
};

angular.module('pwServicesMod', [])
  .factory('pwServicesFactory', pwServicesFactory)

  .controller('pwServicesCtrl', PwServicesCtrl);
