(function() {
	'use strict';
	/**
	 *  Module
	 *
	 */
	angular
		.module('app')
		.controller('personneListController', personneListController);
	personneListController.$inject = ['Personne','$location'];

	function personneListController(Personne,$location) {
		var vm = this;
		vm.getPersonnes = getPersonnes;
		vm.nouveau = nouveau;

		function getPersonnes() {
			return Personne.getPersonnes()
				.then(function(response) {
						vm.personnes = response.data;
						console.log(vm.personnes);
					},
					function(error) {
						this.status = 'Impossible de récupérer les données ' + error.message;
					})

		};

		function nouveau(){
			$location.path('/nouveau');
		}

		getPersonnes();
	}

})();