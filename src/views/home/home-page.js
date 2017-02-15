var angular=require("angular");
var home = angular.module("home",["ui.bootstrap","slick"]);

home.controller("homeController", ["$scope", function($scope) {
    $scope.slides= [
        {   id: 0,
            src:"/images/coverImage_1.jpg"
        },
        {   id: 1,
            src:"/images/image1.jpg"
        },
        {   id: 2,
            src:"/images/image3.jpg"
        },
        {   id: 3,
            src:"/images/image4.jpg"
        }
    ];
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

}]);

