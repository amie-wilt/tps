class AboutCtrl {
  constructor($scope, aboutFac) {
    $scope.descriptions = aboutFac.descriptions;
  }
}

var aboutFactory = () => {
  return {
    descriptions: [
      'We\'ve been serving Sarasota and the surrounding areas with premium mobile detailing and pressure washing since 2007.  And our services are exactly that--mobile. We come to you wherever you are. On top of that, we use our own water and electric.',
      'Our system is blah blah blah and blah blah. We use top of the line equipment and products to ensure your vehicles, houses, and businesses will be looking new and remain protected from the environment\'s harsh conditions. ',
      'We are committed to serving our customers with the best detailing in the Sarasota area. Many thanks to our loyal customers for allowing us to do so and welcome to the new ones!'
    ]
  };
};

angular.module('aboutMod', [])
  .factory('aboutFac', aboutFactory)

  .controller('aboutCtrl', AboutCtrl);
