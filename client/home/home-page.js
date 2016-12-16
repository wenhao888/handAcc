var angular=require("angular");

var home = angular.module("home",[]);

home.controller("homeController", ["$scope", function($scope) {
    $scope.info="hello";
}]);

console.log("home is initialized");