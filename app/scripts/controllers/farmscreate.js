'use strict';

/**
 * @ngdoc function
 * @name bovcontrolApp.controller:FarmscreateCtrl
 * @description
 * # FarmscreateCtrl
 * Controller of the bovcontrolApp
 */
angular.module('bovcontrolApp')
  .controller('FarmscreateCtrl', function ($scope) {
   
  	function initialize() {
		var input = document.getElementById('searchTextField');
		var autocomplete = new google.maps.places.Autocomplete(input);
	}

	initialize();

  });
