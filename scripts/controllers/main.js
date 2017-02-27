define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name sampleAngularJsProjectApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the sampleAngularJsProjectApp
   */
  angular.module('sampleAngularJsProjectApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
