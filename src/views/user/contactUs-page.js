var angular= require("angular");
var contactUs = angular.module("contactUs",[]);

contactUs.controller("contactUsController", ["$scope", function($scope) {
    $scope.submitted = false;
    $scope.cancel=function(){
        window.history.back();
    };

    $scope.submit = function($valid, $event) {
        $scope.submitted=true;

        if (!$valid) {
            $event.preventDefault();
            return;
        }
    };

    $scope.$watch("email", function(value) {
        $scope.contact= getUserContact(value, $scope.phone);
    });


    $scope.$watch("phone", function(value) {
        $scope.contact= getUserContact($scope.email, value);
    });

    function getUserContact(email, phone) {
        email = (email || "").trim();
        phone = (phone || "").trim();

        return email || phone;
    }
}]);