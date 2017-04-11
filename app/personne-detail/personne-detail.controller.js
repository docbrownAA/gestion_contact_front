angular.module('app')
	.controller('personneDetailController', ['Personne', '$routeParams', '$location',
		function(Personne, $routeParams,$location) {
			var vm = this;
			vm.idPersonne = $routeParams.personneId;
			vm.detail = {};
			vm.detail.telephones = false;
			vm.detail.adresses = false;
			vm.detail.expandAll = true;

			vm.getPersonne = function(idPersonne) {
				Personne.getPersonne(idPersonne).then(function(response) {
					vm.personne = response.data;
				}, function(error) {
					vm.status = 'erreur lors de la récupération de la personne:' + idPersonne + ', ' + error.message;
				})
			}

			vm.showDetail = function(test){
				angular.forEach(vm.detail, function(value,key){
					if(key == test){
						vm.detail[key] = !value;
					}
				})
			}

			vm.expand = function(){
				var expand = vm.detail.expandAll;
				angular.forEach(vm.detail, function(value,key){
					vm.detail[key]= expand;
				})
				vm.detail.expandAll = ! vm.detail.expandAll;
			}

			vm.back = function(){
				$location.path('/personnes');
			}

			vm.getPersonne(vm.idPersonne);
		}
	]);