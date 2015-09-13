class MdServicesCtrl {
  constructor ($scope, mdServicesFac) {
    $scope.mdServices = mdServicesFac.mdServices;
  }
}

var mdServicesFactory = () => {
  return {
    mdServices: [
      {
        name: 'Basic Package',
        includes: 'Wash, vacuum, dusting & wiping down the dash and doors, windows inside and out, tire shine',
        prices: [
          {
            type: 'Car',
            typePrice: 30
          },
          {
            type: 'Truck, Van, SUV',
            typePrice: 40
          }
        ]
      },
      {
        name: 'Wash & Wax',
        includes: 'Everything from Basic Package plus Wax',
        prices: [
          {
            type: 'Car',
            typePrice: 80
          },
          {
            type: 'Truck, Van, SUV',
            typePrice: 100
          }
        ]
      },
      {
        name: 'Full Detail',
        includes: 'Everything from Basic Package plus carpet shampoo, dash doors, seats and middle console cleaned and conditioned, wax/polish and wheels.',
        prices: [
          {
            type: 'Car',
            typePrice: 120
          },
          {
            type: 'Truck, Van, SUV',
            typePrice: 160
          }
        ]
      },
      {
        name: 'Exterior-only Wash & Wax',
        includes: 'Exterior wash and wax only',
        prices: [
          {
            type: 'Car',
            typePrice: 60
          },
          {
            type: 'Truck, Van, SUV',
            typePrice: 80
          }
        ]
      }
    ]
  };
};


angular.module('mdServicesMod', [])

  .factory('mdServicesFac', mdServicesFactory)

  .controller('mdServicesCtrl', MdServicesCtrl);
