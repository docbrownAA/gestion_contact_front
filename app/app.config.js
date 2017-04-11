'use strict';

angular.
  module('app').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
       /* when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).*/
        when('/personnes',{
          controller:'personneListController',
          templateUrl: '/personne-list/personne-list.template.html',
          controllerAs:'persListCtrl'
        })
        .when('/personnes/:personneId',{
          controller :'personneDetailController',
          templateUrl: 'personne-detail/personne-detail.template.html',
          controllerAs:'persDetCtrl'
        })
        .otherwise('/personnes');
    }
  ]);
