(function (angular) {

  angular.module('app').component('viewFooter', {
    templateUrl: 'app/components/commons/footer/footer-template.html',
    controller: ['$state', viewFooter],
    controllerAs: 'viewFooter'
  });

  function viewFooter($state) {
    var vm = this;

    vm.goToAbout = function () {

      $state.go('about');
    }
  }

})(angular);