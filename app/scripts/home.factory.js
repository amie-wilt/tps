angular.module('tps.homeFactory', [])

  .factory('Home', [function() {
    "use strict";
    return {
      companyName: "Tony's Performance Services",
      companyServices: [
        {
          name: "Mobile Detailing",
          sref: "mobile-detailing"
        },
        {
          name: "Pressure Washing",
          sref: "pressure-washing"
        }
      ]
    }
  }])
;
