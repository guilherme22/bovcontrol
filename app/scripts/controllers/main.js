'use strict';

/**
 * @ngdoc function
 * @name bovcontrolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bovcontrolApp
 */
angular.module('bovcontrolApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
