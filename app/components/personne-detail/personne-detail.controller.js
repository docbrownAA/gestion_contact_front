(function() {

	'use strict';
	angular.module('app')
		.controller('personneDetailController', personneDetailController);

	personneDetailController.$inject = ['Personne', '$routeParams', '$location'];

	function personneDetailController(Personne, $routeParams, $location) {
		var vm = this;
		vm.idPersonne = $routeParams.personneId;
		vm.detail = {};
		vm.detail.telephones = false;
		vm.detail.adresses = false;
		vm.detail.expandAll = true;

		vm.getPersonne = getPersonne;
		vm.showDetail = showDetail;
		vm.expand = expand;
		vm.back = back;

		function getPersonne(idPersonne) {
			Personne.getPersonne(idPersonne).then(function(response) {
				vm.personne = response.data;
			}, function(error) {
				vm.status = 'erreur lors de la récupération de la personne:' + idPersonne + ', ' + error.message;
			})
		}

		function showDetail(test) {
			angular.forEach(vm.detail, function(value, key) {
				if (key == test) {
					vm.detail[key] = !value;
				}
			})
		}

		function expand() {
			console.log('coucou');
			var expand = vm.detail.expandAll;
			angular.forEach(vm.detail, function(value, key) {
				vm.detail[key] = expand;
			})
			vm.detail.expandAll = !vm.detail.expandAll;
		}

		function back() {
			$location.path('/personnes');
		}

		getPersonne(vm.idPersonne);
	}
})();