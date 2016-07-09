(function() {
  'use strict';

  angular
    .module('porterTraining')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
