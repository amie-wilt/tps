class WindowServicesCtrl {
  constructor ($scope, windowServicesFac) {
    $scope.windowServices = windowServicesFac.windowServices;
  }
}

var windowServicesFactory = () => {
  return {
    windowServices: [
      'Pressure Cleaning',
      'Sealing',
      'Re-Screening'
    ],
    description: 'Prices vary depending on the job and are based on the condition and size of the property. We offer free estimates so please contact us at 941.333.5555 or fill out the form.'
  };
};

angular.module('windowServicesMod', [])
  .factory('windowServicesFac', windowServicesFactory)

  .controller('windowServicesCtrl', WindowServicesCtrl);

