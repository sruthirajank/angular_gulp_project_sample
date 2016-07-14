(function() {
  'use strict';

  angular
    .module('jsProjects')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
