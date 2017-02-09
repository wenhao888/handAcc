var etalag = angular.module("etalag",[]);
etalag.directive('etalagDisplay', function ($timeout) {
    return {
        restrict:'ACE',
        link:function (scope, element, attrs, controller) {
            $timeout(function () {
                var option= {
                    cursor: 'pointer'
                    , imageCrossfade: true
                    , zoomWindowHeight: 550
                    , zoomWindowWidth: 702
                };


                $("#zoom").elevateZoom(option);

                $(".gallery-img").mouseenter(function(e){
                    e.preventDefault();
                    var dataZoomImg = $(this).attr('data-zoom-image');
                    var dataImg = $(this).attr('data-image');
                    //alert(dataImgg + dataZoomImg);
                    var mainImg = $('#zoom');
                    mainImg.attr('src',dataImg);
                    mainImg.data('zoom-image',dataZoomImg).elevateZoom(option);

                });
            })

        }
    }
});