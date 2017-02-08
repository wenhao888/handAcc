var etalag = angular.module("etalag",[]);
etalag.directive('etalagDisplay', function ($timeout) {
    return {
        restrict:'ACE',
        link:function (scope, element, attrs, controller) {
            $timeout(function () {
                $("#zoom").elevateZoom({
                    gallery: 'gallery'
                    , cursor: 'pointer'
                    , galleryActiveClass: 'active'
                    , imageCrossfade: true
                    , zoomWindowHeight: 550
                    , zoomWindowWidth: 702
                });
                //pass the images to Fancybox
                $("#zoom").bind("click", function (e) {
                    var ez = $('#zoom').data('elevateZoom');
                    $.fancybox(ez.getGalleryList());
                    return false;
                });
            })

        }
    }
});