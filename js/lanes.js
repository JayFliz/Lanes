var app = angular.module('lanesApp', []);

app.controller('GridGenCtrl', function($scope) {

  $scope.gutterWidth = 20;
  $scope.containerWidth = 960;
  $scope.breakpoint = 550;
  var totalCols = 12;

  $scope.gutterAsPercent = function() {
    return ($scope.gutterWidth / $scope.containerWidth) * 100;
  }

  $scope.calculateGrid = function(numColumns) {
    var colWidth = 100 / totalCols;
    var gutterPercentage = $scope.gutterAsPercent();

    return colWidth * numColumns - (gutterPercentage * (totalCols - numColumns) / totalCols);
  }

  $scope.gridOffsetCalculate = function(numColumns) {
    var gutterPercentage = $scope.gutterAsPercent();
    return $scope.calculateGrid(numColumns) +  gutterPercentage;
  }

  $scope.onTextClick = function($event) {
    $event.target.select();
  }


});