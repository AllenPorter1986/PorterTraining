(function () {
  'use strict';

  angular
    .module('porterTraining')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $window) {
    var vm = this;
    vm.init = init;
    vm.updateFrequency = updateFrequency;
    vm.start = start;
    vm.stop = stop;
    vm.map = {};

    vm.frequency = 440;
    vm.keyReference = 69;
    vm.toneScale = 12;
    vm.notePosition = 60;

    function getFrequencyOfNote(x) {
      return Math.pow(2, (x - vm.keyReference) / vm.toneScale) * vm.frequency;
    }

    function updateFrequency() {      
      vm.osc.frequency.value = getFrequencyOfNote(vm.notePosition);
    }

    function stop() {
      vm.osc.stop(0);
    }
    function start() {
      vm.osc.start(0);
    }

    function playNote(e) {
      if (e) {

      }
    }


    function init() {
      vm.context = new $window.AudioContext();
      vm.h = $window.innerHeight;

      vm.osc = vm.context.createOscillator();
      vm.osc.frequency.value = getFrequencyOfNote(vm.notePosition);
      vm.osc.connect(vm.context.destination);

      // var gain = vm.context.createGain();
      // gain.gain.value = 100;
      // gain.connect(osc.frequency);

      // var osc2 = vm.context.createOscillator();
      // osc2.frequency.value = 1;
      // osc2.connect(gain);
      // osc2.type = "square";
      // osc2.start(0);
    }
    $window.onkeypress = playNote;

    $window.onkeydown = $window.onkeyup = function (e) {
      e = e || event; // to deal with IE
      vm.map[e.keyCode] = e.type == 'keydown';
      $scope.$apply();
      /* insert conditional here */
    }
    
    init();
  }
})();
