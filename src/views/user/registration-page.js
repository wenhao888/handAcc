var angular= require("angular");
require("../shared/validators");

var reg= angular.module("registration",[require('angular-resource'),"validators","ngPasswordStrength"]);

reg.factory("emailQuery",["$resource", function ($resource) {
    return $resource("/api/users/email/_search",{}, {
        search: {
            method:'post',
            array:false
        }
    })
}]);

reg.controller("registrationController",["$scope", "emailQuery", function ($scope) {

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


reg.directive("noneDupEmailValidator",["emailQuery","$q",function(emailQuery, $q) {
    return {
        restrict : "C",
        require: 'ngModel',
        link: function(scope, elem, attr, ngModel) {
            ngModel.$asyncValidators.dupEmail = function (modelValue, viewValue) {
                return $q(function (resolve, reject) {
                    emailQuery.search({}, {query: {email: modelValue || viewValue}}, function(user) {
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

