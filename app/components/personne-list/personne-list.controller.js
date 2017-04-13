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
		vm.gotoPersonne = gotoPersonne;
		vm.deletePersonne = deletePersonne;

		function getPersonnes() {
			return Personne.getPersonnes()
				.then(function(response) {
						vm.personnes = response.data;
					},
					function(error) {
						this.status = 'Impossible de récupérer les données ' + error.message;
					})

		};

		function nouveau(){
			console.log('ok');
			$location.path('/nouveau');
		}

		function gotoPersonne(id){
			$location.path('/personnes/'+id)
		}

		function deletePersonne(idPersonne){
			Personne.deletePersonne(idPersonne)
			.then(function(){
				getPersonnes();
			});
		}

		getPersonnes();
	}

})();