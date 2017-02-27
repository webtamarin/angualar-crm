define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name sampleAngularJsProjectApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the sampleAngularJsProjectApp
   */
  angular.module('sampleAngularJsProjectApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
