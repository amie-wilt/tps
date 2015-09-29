class GalleryCtrl {
  constructor($scope, galleryFac) {
    $scope.slides = galleryFac.slides;
    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = (i) => {
      $scope.currentIndex = i;
    };
    $scope.isCurrentSlideIndex = (i) => {
      return $scope.currentIndex === i;
    };
    $scope.prevSlide = () => {
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextSlide = () => {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
  }
}

var galleryFactory = () => {
  return {
    slides: [
      {
        image: '../images/mobile-detailing/exterior.png',
        description: 'Truck before and after'
      },
      {
        image: '../images/mobile-detailing/interior.png',
        description: 'Car before and after'
      },
      {
        image: '../images/mobile-detailing/seadoo.png',
        description: 'Seadoo before and after'
      },
      {
        image: '../images/mobile-detailing/wheel.png',
        description: 'Wheel before and after'
      },
      {
        image: '../images/mobile-detailing/exotics.png',
        description: 'Exotics'
      },
      {
        image: '../images/mobile-detailing/exterior2.png',
        description: 'SUV before and after'
      },
      {
        image: '../images/mobile-detailing/wheel2.png',
        description: 'Wheel before and after'
      },
      {
        image: '../images/pressure-washing/bricks.png',
        description: 'Bricks before and after'
      },
      {
        image: '../images/pressure-washing/decks.png',
        description: 'Decks before and after'
      },
      {
        image: '../images/pressure-washing/gazebo.png',
        description: 'Gazebo before and after'
      },
      {
        image: '../images/pressure-washing/wall.png',
        description: 'Wall before and after'
      },
      {
        image: '../images/pressure-washing/wall2.png',
        description: 'Wall before and after'
      }
    ]
  };
};

angular.module('galleryMod', ['ngAnimate'])
  .factory('galleryFac', galleryFactory)

  .controller('galleryCtrl', GalleryCtrl)

  .animation('.slide-animation', () => {
    return {
      addClass: (element, className, done) => {
        if (className === 'ng-hide') {
          TweenMax.to(element, 0.5, {
            left: -element.parent().width(),
            onComplete: done
          });
        } else {
          done();
        }
      },
      removeClass: (element, className, done) => {
        if (className === 'ng-hide') {
          TweenMax.set(element, {
            left: element.parent().width()
          });
          TweenMax.to(element, 0.5, {
            left: 0,
            onComplete: done
          });
        } else {
          done();
        }
      }
    };
  });


