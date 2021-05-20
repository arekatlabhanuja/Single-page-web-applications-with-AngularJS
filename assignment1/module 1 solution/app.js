'use strict';
(function () {

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = '';
  $scope.msg = 'Please enter data first';

  $scope.checkText = function() {
    if ($scope.items.length == 0) {
      $scope.msg = 'Please enter data first';
      return;
    } 
    else {
      let listItems = $scope.items.split(',').filter(value => value.trim().length!=0);
      if (listItems.length <= 3) {
        $scope.msg = 'Enjoy!';
      }
      else {
        $scope.msg = 'Too much!';
      }      
    }
  }
}

})();