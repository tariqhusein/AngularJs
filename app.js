(function () {
'use strict';
  angular.module('NameCalculator',[]).
  controller('NameCalculatorController',function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.DisplayTotalValue = function () {
      var totalValue = GetTotalvalue($scope.name);
      $scope.totalValue = totalValue;
    };
  })
  function GetTotalvalue(name) {
    var value = 0;
    for(var i =0;i<name.length ;i++){
      value +=name.charCodeAt(i);
    }
    return value;
  }
})();
