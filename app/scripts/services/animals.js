'use strict';

/**
 * @ngdoc service
 * @name bovcontrolApp.Animals
 * @description
 * # Animals
 * Service in the bovcontrolApp.
 */
angular.module('bovcontrolApp')
  .service('Animals', function () {

  		function list(){
  			return ['oi','oi2'];
  		}
  		
  		this.list = list;
  });
