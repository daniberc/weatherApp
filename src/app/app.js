'use strict';

(function (angular) {

  angular.module('app', ['ui.router']);

  angular.module('app').config(['$stateProvider', '$urlRouterProvider', appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {

    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };
    
    var about = {
      name: 'about',
      url: '/about',
      template: '<view-about></view-about>'
    };

    $stateProvider.state(main);
    $stateProvider.state(about);

    // Definimos una ruta por defecto
    $urlRouterProvider.otherwise('/main');

  };




})(angular);