var angular=require("angular");
var productDetail = angular.module("productDetail",['etalag']);

productDetail.controller("detailController",["$scope", function($scope) {
    $scope.currentIndex=0;
    $scope.clickImage= function(index) {
        $scope.currentIndex = index;
    }
}]);