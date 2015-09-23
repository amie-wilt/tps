class MdAboutCtrl {
  constructor ($scope, mdAboutFac) {
    $scope.description = mdAboutFac.description;
  }
}

var mdAboutFactory = () => {
  return {
    description: 'Tony\'s Performance Services has been serving Sarasota with premium mobile detailing since 2007. Our service is exactly what it says--mobile. We come to you wherever you are. On top of that, we use our own water and electric.'
  };
};

angular.module('mdAboutMod', [])
  .factory('mdAboutFac', mdAboutFactory)

  .controller('mdAboutCtrl', MdAboutCtrl);
