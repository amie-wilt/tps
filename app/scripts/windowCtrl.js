class WindowCtrl {
  constructor($scope, windowFac) {
    $scope.title = windowFac.title;
    $scope.tagline = windowFac.tagline;
    $scope.descriptionTagline = windowFac.descriptionTagline;
    $scope.descriptions = windowFac.descriptions;
    $scope.isActive = false;
    $scope.activeButton = () => {
      $scope.isActive = !$scope.isActive;
    };
  }
}

var windowFactory = () => {
  return {
    title: 'Window Cleaning',
    tagline: 'Our water. Our electric. Your convenience.',
    descriptionTagline: 'Get your windows super clean!',
    descriptions: [
      'Lorem ipsum dolor sit amet, eam falli malorum disputando et. Prima idque ignota vis ut. Vim aliquid constituam cu, sed eu vocibus probatus maiestatis. Quot officiis no per, quo mollis ponderum ei. Oratio dolores adolescens id has. Et labores vivendum his, vis summo vocibus ocurreret ei, no nam purto graeci abhorreant',
        'An aeque noluisse qui. Has viderer partiendo facilisis ut. In viderer vocibus eos. Dictas ullamcorper eum an. Ne novum gubergren vix, no quo iisque alienum vulputate. Omnes vivendo quo ei, at maluisset expetendis usu.',
        'Case vivendo no vim. Ea aperiam delectus cum. Ut harum consul iriure sed, omnis equidem sed id. Nec mucius propriae dissentias ex, accusata quaerendum nam no.'
    ]
  };
};

angular.module('windowMod', [])
  .factory('windowFac', windowFactory)

  .controller('windowCtrl', WindowCtrl);
