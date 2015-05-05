'use strict';

/**
 * @ngdoc function
 * @name bovcontrolApp.controller:FarmsCtrl
 * @description
 * # FarmsCtrl
 * Controller of the bovcontrolApp
 */
angular.module('bovcontrolApp')
  .controller('FarmsCtrl', function ($scope,Farms,$location) {

  	function callbackListHandler (data){
  		if(data){
  			$scope.farms = data;
  		}
  	}

  	Farms.list().then(callbackListHandler);

  	$scope.addFarm = function() { 
  		$location.path('/farms/create')
  	};
  });
