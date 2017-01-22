var angular=require("angular");

var contactConfirm= angular.module("contactConfirm",[]);


contactConfirm.controller("contactConfirmController",["$scope", function($scope) {
    $scope.close = function() {
        window.history.go(-2);
    }
}]);