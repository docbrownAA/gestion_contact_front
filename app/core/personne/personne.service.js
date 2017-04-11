'use strict';
angular.module('core.personne')
	.factory('Personne', ['$http', function($http) {
		var urlBase = 'http://localhost:8088/';
		var Personne = {};

		Personne.getPersonnes = function(){
			return $http.get(urlBase+'personnes');
		};

		Personne.getPersonne = function(id){
			return $http.get(urlBase+'personnes/'+id)
		}
		return Personne;
	}])