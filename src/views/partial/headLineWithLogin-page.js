var angular=require("angular");

var headLine = angular.module("headLine", [require('angular-resource'),"ngCookies"]);


headLine.controller("headLineController", ["$scope", "$cookies",function ($scope, $cookies) {
    $scope.token=$cookies.getObject("token") || {};
}]);




