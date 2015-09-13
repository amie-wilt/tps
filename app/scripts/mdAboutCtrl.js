class MdAboutCtrl {
  constructor ($scope, mdAboutFac) {
    $scope.description = mdAboutFac.description;
  }
}

var mdAboutFactory = () => {
  return {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus imperdiet dui id volutpat. Etiam sed feugiat elit. Donec viverra eu purus et aliquam. Proin ut aliquet eros. Phasellus vel risus diam. Nunc quis dui eu massa tempor iaculis nec eu nisi. Morbi dapibus tristique lectus, sit amet dapibus elit finibus et. Donec nec ipsum lorem. Sed luctus ut nisl non tincidunt. Aliquam fringilla ex velit, sed accumsan urna tempor et. Phasellus ultricies placerat placerat. Suspendisse ut nibh vel quam rutrum dapibus. Maecenas lectus dui, maximus sed lacus vitae, volutpat iaculis lacus. Quisque et tortor a leo eleifend gravida eu sed quam. Nam vel dolor elementum, sollicitudin tellus sed, molestie augue. Vestibulum euismod id nibh ac convallis.'
  };
};

angular.module('mdAboutMod', [])
  .factory('mdAboutFac', mdAboutFactory)

  .controller('mdAboutCtrl', MdAboutCtrl);
