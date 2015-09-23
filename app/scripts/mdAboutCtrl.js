class MdAboutCtrl {
  constructor($scope, mdAboutFac) {
    $scope.descriptions = mdAboutFac.descriptions;
  }
}

var mdAboutFactory = () => {
  return {
    descriptions: [
      'We have been serving Sarasota and the surrounding areas with premium mobile detailing since 2007. Our service is exactly what it says--mobile. We come to you wherever you are. On top of that, we use our own water and electric. We also understand the importance of a job well done, which is why we do 100% hand washing and waxing.',
      'Our system is blah blah blah and blah blah. We use top of the line equipment and products to ensure your vehicle will be looking new and will be protected from the environment\'s harsh conditions. We don\'t believe this will be an issue, but if you feel our work isn\'t up to your standards, please notify us immediately and we will remedy the situation as soon as possible.',
      'We are committed to serving our customers with the best detailing in the Sarasota area. Many thanks to our loyal customers for allowing us to do so and welcome to the new ones!'
    ]
  };
};

angular.module('mdAboutMod', [])
  .factory('mdAboutFac', mdAboutFactory)

  .controller('mdAboutCtrl', MdAboutCtrl);
