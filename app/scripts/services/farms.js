'use strict';

/**
 * @ngdoc service
 * @name bovcontrolApp.Farms
 * @description
 * # Farms
 * Service in the bovcontrolApp.
 */
angular.module('bovcontrolApp')
  .service('Farms', function (URL_SERVICE,$http,$q) {
	    function list(){
  			 var deferred = $q.defer();
	            $http.get(URL_SERVICE+'/farms')
	                .then(function(result){
	                    deferred.resolve(result.data);
	                },function(result){
	                    deferred.reject(result.data);
	                });
	            return deferred.promise;
	  		}

	  	function get(id){
	  		var deferred = $q.defer();
	            $http.get(URL_SERVICE+'/farms/' +id)
	                .then(function(result){
	                    deferred.resolve(result.data);
	                },function(result){
	                    deferred.reject(result.data);
	                });
	            return deferred.promise;
	  		}
	  	

	  	function deleteFarms (id){
	  		var deferred = $q.defer();
	            $http.delete(URL_SERVICE+'/farms/'+id)
	                .then(function(result){
	                    deferred.resolve(result.data);
	                },function(result){
	                    deferred.reject(result.data);
	                });
	            return deferred.promise;
	  		}
	  	

	  	function update (data) {
	  		var deferred = $q.defer();
	            $http.update(URL_SERVICE+'/farms', data)
	                .then(function(result){
	                    deferred.resolve(result.data);
	                },function(result){
	                    deferred.reject(result.data);
	                });
	            return deferred.promise;
	  		}
	  	

	  	function post(data) {
	  		var deferred = $q.defer();
	            $http.post(URL_SERVICE+'/farms',data)
	                .then(function(result){
	                    deferred.resolve(result.data);
	                },function(result){
	                    deferred.reject(result.data);
	                });
	            return deferred.promise;
	  		}
	  	

  		
  	return {
  		get: get,
  		list: list,
  		post: post,
  		update: update,
  		deleteFarms: deleteFarms
  	}
  
  });
