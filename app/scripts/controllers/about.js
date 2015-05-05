'use strict';

/**
 * @ngdoc function
 * @name bovcontrolApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bovcontrolApp
 */
angular.module('bovcontrolApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
