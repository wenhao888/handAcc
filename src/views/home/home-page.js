var angular=require("angular");
var home = angular.module("home",["ui.bootstrap","slick",require('angular-resource')]);
home.factory("emailSubscribe",["$resource", function ($resource) {
    return $resource("/api/subscribe",{}, {
        subscribe: {
            method:'post',
            array:false
        }
    });
}]);

home.controller("homeController", ["$scope", function($scope) {
    $scope.slides= [
        {   id: 0,
            src:"/images/coverImage_1.jpg"
        },
        {   id: 1,
            src:"/images/22.jpg"
        },
        {   id: 2,
            src:"/images/33.jpg"
        }
    ];
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

}]);

home.controller("footerController",["$scope","emailSubscribe",function ($scope,emailSubscribe) {
    $scope.subscribe = function () {
        if(!!$scope.email){
            emailSubscribe.subscribe({},{email:$scope.email},function (data) {
                window.location ="subscribe";
            },function (err) {
                console.log(err);
            });
        }
    }
}]);



