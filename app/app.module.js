(function() {
	'use strict';
	// Define the `app` module
	angular
		.module('app', [
			'ngAnimate',
			'ngRoute',
			'core',
			'personneList',
			'personneDetail'
		])
		.config(routeConfig);


	routeConfig.$inject = ['$locationProvider', '$routeProvider'];

	function routeConfig($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.
		when('/personnes', {
				controller: 'personneListController',
				templateUrl: 'components/personne-list/personne-list.template.html',
				controllerAs: 'persListCtrl'
			})
			.when('/personnes/:personneId', {
				controller: 'personneDetailController',
				templateUrl: 'components/personne-detail/personne-detail.template.html',
				controllerAs: 'persDetCtrl'
			})
			.when('/nouveau', {
				controller: 'personneNouveauController',
				templateUrl: 'components/personne-nouveau/personne-nouveau.template.html',
				controllerAs: 'pnCtrl'
			})
			.otherwise('/personnes');
	};
})();