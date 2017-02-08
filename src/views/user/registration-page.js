var angular= require("angular");
require("../shared/validators");

var reg= angular.module("registration",[require('angular-resource'),"validators","ngPasswordStrength"]);

reg.factory("query",["$resource", function ($resource) {
    return $resource("/api/users/email/_search")
}]);

reg.controller("registrationController",["$scope", "query", function ($scope, query) {
    $scope.cancel = function () {
        window.history.back();
    };

    $scope.submit = function (valid, $event) {
      $scope.submitted = true;

      if (!valid) {
          $event.preventDefault();
      }
    };

    $scope.formatStrength=function(value) {
        var value = typeof value == 'undefined' ? 0: value;
       return "strength: " + value;
    }

}]);

