(function(){
	'use strict';
	angular
	.module('app')
	.controller('adresseController',adresseController);

	adresseController.$inject = ['Ville']
	function adresseController(Ville){
		var vm = this;
		vm.villes;
		vm.getVilles = getVilles;
		vm.selectedVille = {};

		function getVilles(){
			return Ville.getVilles()
			.then(function(response){
				vm.villes = response.data;
			},
			function(error){
				this.status = 'Impossible de récupérer les données ' + error.message;
			})

		};

		getVilles();
	}
})();