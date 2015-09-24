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
    description: 'Phasellus odio velit, iaculis ut enim vitae, sodales laoreet dolor. Sed porta diam in nisl tincidunt, finibus maximus dolor rhoncus. Nulla quis sollicitudin nunc. Nulla tempus nisi augue, eu sodales tortor consequat eget. Fusce in mi non ex fermentum tincidunt.'
  };
};

angular.module('pwServicesMod', [])
  .factory('pwServicesFac', pwServicesFactory)

  .controller('pwServicesCtrl', PwServicesCtrl);
