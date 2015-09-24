class ContactCtrl {
  constructor ($scope, $http) {
    $scope.formData = {};
    $scope.processForm = () => {
      $http({
        method: 'POST',
        url: 'contact-form.php',
        data: $.param($scope.formData),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success(function(data) {
          if (!data.success) {
            $scope.errorName = data.errors.name;
            $scope.errorEmail = data.errors.email;
            $scope.errorMessage = data.errors.message;
          } else {
            $scope.message = data.message;
          }
        });
    };
  }
}

angular.module('contactMod', [])
  .controller('contactCtrl', ContactCtrl);
