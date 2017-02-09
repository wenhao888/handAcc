var angular=require("angular");
var productDetail = angular.module("productDetail",[]);

productDetail.controller("detailController",["$scope", function($scope) {
    $scope.currentIndex=0;
    $scope.clickImage= function(index) {
        $scope.currentIndex = index;
    }
}]);

productDetail.directive('etalagDisplay', function ($timeout) {
    return {
        restrict:'ACE',
        link:function (scope, element, attrs, controller) {
            console.log("directive");

            $timeout(function () {
                var option= {
                    cursor: 'pointer',
                    imageCrossfade: true,
                    zoomWindowHeight: 550,
                    zoomWindowWidth: 702,
                    lensSize: 10,
                };

                $("#zoom").elevateZoom(option);

                $(".gallery-img").mouseenter(function(e){
                    e.preventDefault();
                    var dataZoomImg = $(this).attr('data-zoom-image');
                    var dataImg = $(this).attr('data-image');
                    var mainImg = $('#zoom');
                    mainImg.attr('src',dataImg);
                    mainImg.data('zoom-image',dataZoomImg).elevateZoom(option);

                });
            })
        }
    }
});