//var angular=require("angular");

var home = angular.module("home",["ui.bootstrap"]);

home.controller("homeController", ["$scope", function($scope) {
    $scope.slides= [
        {   id: 1,
            src:"/public/images/image1.jpg"
        },
        {   id: 2,
            src:"/public/images/image2.jpg"
        },
        {   id: 3,
            src:"/public/images/image3.jpg"
        },
        {   id: 4,
            src:"/public/images/image4.jpg"
        }
    ];
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.message = "hello";

}]);

