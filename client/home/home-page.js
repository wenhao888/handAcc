require("angular-touch");
require("angular-carousel");
var angular=require("angular");



var home = angular.module("home",['angular-carousel']);
home.controller("homeController", ["$scope", function($scope) {
    $scope.info="hello";
}]);

console.log("home is initialized");