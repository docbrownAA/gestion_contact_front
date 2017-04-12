(function() {

	'use strict';
	angular
		.module('app')
		.factory('Personne', Personne);
	Personne.$inject = ['$http'];

	function Personne($http) {
		var urlBase = 'http://localhost:8088/';
		var service = {
			getPersonnes: getPersonnes,
			getPersonne: getPersonne,
			savePersonne:savePersonne
		};

		function getPersonnes() {
			return $http({
				method: 'GET',
				url: urlBase + 'personnes'
			}).success(function(data, status, headers, config) {
				return data;
			}).error(function(data, status, headers, config) {

			});
		};

		function getPersonne(id) {
			return $http({
				method: 'GET',
				url: urlBase + 'personnes/' + id
			}).success(function(data, status, headers, config) {
				return data;
			}).error(function(data, status, headers, config) {

			});

		};

		function savePersonne(personne) {
			return $http({
				method: 'POST',
				data: personne,
				url: urlBase + 'personnes'
			}).success(function(response) {
				console.log(response);
			}).error(function(response) {
				console.log(response);
			});
		};


		return service;

	}
})();