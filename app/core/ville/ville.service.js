(function(){
	'use strict';
	angular
	.module('app')
	.factory('Ville',Ville);
	Ville.$inject=['$http'];

	function Ville($http){
		var urlBase = 'http://localhost:8088/villes'
		var Ville = {
			getVilles: getVilles
		};

		function getVilles(){
			return $http({
				method:'GET',
				url:urlBase
			}).success(function(data,status,headers,config){
				return data;
			}).error(function(response){
				return response;
			})
		};

		return Ville;
	}
})();