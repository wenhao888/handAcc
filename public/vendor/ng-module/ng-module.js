(function() {
  function initNgModules(element) {
      var elements=element.querySelectorAll("[ng-module]") || [];
      elements.forEach(function(e) {
         var module=$(e).attr('ng-module');
          angular.bootstrap(e, [module]);

      });
  }

  angular.element(document).ready(function() {
        initNgModules(document);
  });
})();
