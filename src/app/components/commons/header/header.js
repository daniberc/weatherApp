(function (angular) {

  angular.module('app').component('viewHeader', {
    templateUrl: 'app/components/commons/header/header-template.html',
    controller: ['$state', 'factoryCities', viewHeader],
    controllerAs: 'viewHeader'
  });

  function viewHeader($state, factoryCities) {
    var vm = this;

    vm.$onInit = function () {
    }
    vm.goToMain = function () {
      $state.go('main');
    }
  }

})(angular);