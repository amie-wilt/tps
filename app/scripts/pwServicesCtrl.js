class PwServicesCtrl {
  constructor ($scope, pwServicesFac) {
    $scope.pwServices = pwServicesFac.pwServices;
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
  .factory('pwServicesFac', pwServicesFactory)

  .controller('pwServicesCtrl', PwServicesCtrl);
