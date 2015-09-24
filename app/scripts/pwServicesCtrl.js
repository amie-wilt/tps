class PwServicesCtrl {
  constructor($scope, pwServicesFac) {
    $scope.pwServices = pwServicesFac.pwServices;
    $scope.description = pwServicesFac.description;
  }
}

var pwServicesFactory = () => {
  return {
    pwServices: [
      'Pressure Cleaning',
      'Sealing',
      'Re-Screening'
    ],
    description: 'Prices vary depending on the job and are based on the condition and size of the property. We offer free estimates so please contact us at 941.333.5555 or fill out the form.'
  };
};

angular.module('pwServicesMod', [])
  .factory('pwServicesFac', pwServicesFactory)

  .controller('pwServicesCtrl', PwServicesCtrl);
