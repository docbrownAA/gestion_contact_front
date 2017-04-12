(function() {
	'use strict';
	// Define the `app` module
	angular
		.module('app', [
			'ngAnimate',
			'ngRoute',
			'core',
			'phoneDetail',
			'phoneList',
			'personneList',
			'personneDetail'
		])
		.config(routeConfig);


	routeConfig.$inject = ['$locationProvider', '$routeProvider'];

	function routeConfig($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.
			/* when('/phones', {
			   template: '<phone-list></phone-list>'
			 }).
			 when('/phones/:phoneId', {
			   template: '<phone-detail></phone-detail>'
			 }).*/
		when('/personnes', {
				controller: 'personneListController',
				templateUrl: '/personne-list/personne-list.template.html',
				controllerAs: 'persListCtrl'
			})
			.when('/personnes/:personneId', {
				controller: 'personneDetailController',
				templateUrl: 'personne-detail/personne-detail.template.html',
				controllerAs: 'persDetCtrl'
			})
			.when('/nouveau', {
				controller: 'personneNouveauController',
				templateUrl: 'personne-nouveau/personne-nouveau.template.html',
				controllerAs: 'pnCtrl'
			})
			.otherwise('/personnes');
	};
})();