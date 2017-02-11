var angular= require("angular");
require("../shared/validators");

var userDetail= angular.module("registration",[require('angular-resource'),"validators","ngPasswordStrength"]);

userDetail.factory("emailQuery",["$resource", function ($resource) {
    return $resource("/api/users/email/_search",{}, {
        search: {
            method:'post',
            array:false
        }
    })
}]);

userDetail.controller("registrationController",["$scope", "emailQuery", function ($scope) {

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
    };

    $scope.$watch("user.password", function(value, oldValue) {
        if (value == oldValue) {
            $scope.user.confirmPassword = $scope.user.password
        }
    })

}]);


userDetail.directive("noneDupEmailValidator",["emailQuery","$q",function(emailQuery, $q) {
    return {
        restrict : "C",
        require: 'ngModel',
        link: function(scope, elem, attr, ngModel) {
            var skipId= attr["skipId"];
            ngModel.$asyncValidators.dupEmail = function (modelValue, viewValue) {
                return $q(function (resolve, reject) {
                    emailQuery.search({}, {query: {email: modelValue || viewValue, skipId: skipId}}, function(user) {
                        if (user.id) {
                            reject();
                        } else {
                            resolve();
                        }
                      }, function() {
                        reject();
                    })
                });
            };
        }
    }
}]);

