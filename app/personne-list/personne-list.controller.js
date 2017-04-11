'use strict';
/**
 *  Module
 *
 */
angular.module('app').
controller('personneListController', ['Personne',
	function(Personne) {
		var vm = this;

		vm.getPersonnes = function() {
			Personne.getPersonnes()
				.then(function(response) {
						vm.personnes = response.data;
						console.log(vm.personnes);
					},
					function(error) {
						this.status = 'Impossible de récupérer les données ' + error.message;
					})

		};
		vm.getPersonnes();
	}
])