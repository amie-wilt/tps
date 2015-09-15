class ContactCtrl {
  constructor ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData;
    $scope.submitButtonDisabled = false;
    $scope.submitted = false;
    $scope.submit = (contactForm) => {
      $scope.submitted = true;
      $scope.submitButtonDisabled = true;
      if (contactForm.$valid) {
        $http({
          method: 'POST',
          url: 'contact-form.php',
          data: $.param($scope.formData),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).success(function(data) {
          console.log(data);
          if (data.success) {
            $scope.submitButtonDisabled = true;
            $scope.resultMessage = data.message;
            $scope.result = 'bg-success';
          } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = data.message;
            $scope.result = 'bg-danger';
          }
        });
      } else {
        $scope.submitButtonDisabled = false;
        $scope.resultMessage = 'Failed. Please fill out the required fields.';
        $scope.result = 'bg-danger';
      }
    };
  }
}

angular.module('contactMod', [])
  .controller('contactCtrl', ContactCtrl);
