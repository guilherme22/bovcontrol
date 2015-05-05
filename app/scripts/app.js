'use strict';

/**
 * @ngdoc overview
 * @name bovcontrolApp
 * @description
 * # bovcontrolApp
 *
 * Main module of the application.
 */
angular
  .module('bovcontrolApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/farms', {
        templateUrl: 'views/farms.html',
        controller: 'FarmsCtrl'
      })
      .when('/animals', {
        templateUrl: 'views/animals.html',
        controller: 'AnimalsCtrl'
      })
      .when('/farms/create', {
        templateUrl: 'views/farmscreate.html',
        controller: 'FarmscreateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant('URL_SERVICE','http://front-api.bovcontrol.com/');
