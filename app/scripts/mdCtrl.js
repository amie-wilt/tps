class MdCtrl {
  constructor($scope, mdFac) {
    $scope.title = mdFac.title;
    $scope.tagline = mdFac.tagline;
    $scope.descriptionTagline = mdFac.descriptionTagline;
    $scope.descriptions = mdFac.descriptions;
    $scope.isActive = false;
    $scope.activeButton = () => {
      $scope.isActive = !$scope.isActive;
    };
  }
}

var mdFactory = () => {
  return {
    title: 'Mobile Detailing',
    tagline: 'Our water. Our electric. Your convenience.',
    descriptionTagline: 'Take pride in your ride.',
    descriptions: [
      'Everything needs maintenance, your vehicle is no exception. TPS provides premium mobile detailing services to preserve the value of your vehicle and to protect it from harmful contaminants. By keeping up with regular detailing, you\'ll get top dollar when it\'s time to trade or sell.',
      'Our services range from a basic wash to a full detail for anything with a motor--even boats and planes. This includes waxing, carpet/upholstery shampooing and conditioning, headlight restoration and tire shining. The best part is that we are completely mobile, which means no interruptions in your schedule. We\'ll happily come to you wherever you are.',
      'For more information, check out our services and pricing, and be sure to visit our photo gallery for some before and afters. If you would like to schedule an appointment or have any questions or comments, please fill out our form or call or text 941.536.3939. We look forward to hearing from you!',
      'TPS'
    ]
  };
};

angular.module('mdMod', [])
  .factory('mdFac', mdFactory)

  .controller('mdCtrl', MdCtrl);
