(function() {
  function initNgModules(element) {
      var elements=element.querySelectorAll("[ng-module]") || [];

      for (i = 0; i < elements.length; ++i) {
          var e=elements[i];
          var module=$(e).attr('ng-module');
          angular.bootstrap(e, [module]);
      }
  }

  angular.element(document).ready(function() {
        initNgModules(document);
  });
})();
