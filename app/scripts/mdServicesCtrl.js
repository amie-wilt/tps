class MdServicesCtrl {
  constructor ($scope, mdServicesFactory) {
    $scope.mdServices = mdServicesFactory.mdServices;
  }
}

var mdServicesFactory = () => {
  return {
    mdServices: [
      {
        name: 'Wash',
        price: '30'
      },
      {
        name: 'Wash and Wax',
        price: 50
      },
      {
        name: 'Full Detail',
        price: '130'
      }
    ]
  };
};


angular.module('mdServicesMod', [])

  .factory('mdServicesFactory', mdServicesFactory)

  .controller('mdServicesCtrl', MdServicesCtrl);
