class PwCtrl {
  constructor($scope, pwFac) {
    $scope.title = pwFac.title;
    $scope.tagline = pwFac.tagline;
    $scope.descriptionTagline = pwFac.descriptionTagline;
    $scope.descriptions = pwFac.descriptions;
    $scope.isActive = false;
    $scope.activeButton = () => {
      $scope.isActive = !$scope.isActive;
    };
  };
}

var pwFactory = () => {
  return {
    title: 'Pressure Washing',
    tagline: 'Our water. Our electric. Your convenience.',
    descriptionTagline: 'Get your free estimate today!',
    descriptions: [
      'asdf;ksjd',
      'asdf'
    ]
  };
};

angular.module('pwMod', [])
  .factory('pwFac', pwFactory)

  .controller('pwCtrl', PwCtrl);
