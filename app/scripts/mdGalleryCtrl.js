class MdGalleryCtrl {
  constructor($scope, mdGalleryFac) {
    $scope.slides = mdGalleryFac.slides;
    $scope.currentIndex = 0;
    $scope.setCurrentIndex = (i) => {
      $scope.currentIndex = i;
    };
    $scope.isCurrentSlideIndex = (i) => {
      return $scope.currentIndex === i;
    };
  }
}

var mdGalleryFactory = () => {
  return {
    slides: [
      {
        image: '../images/exterior.png',
        description: 'Truck before and after'
      },
      {
        image: '../images/interior.png',
        description: 'Car before and after'
      },
      {
        image: '../images/seadoo.png',
        description: 'Seadoo before and after'
      },
      {
        image: '../images/wheel.png',
        description: 'Wheel before and after'
      }
    ]
  };
};

angular.module('mdGalleryMod', ['ngAnimate'])
  .factory('mdGalleryFac', mdGalleryFactory)

  .controller('mdGalleryCtrl', MdGalleryCtrl);


