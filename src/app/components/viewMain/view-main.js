(function (angular) {

  // Pantalla principal de la app
  angular.module('app').component('viewMain', {
    templateUrl: 'app/components/viewMain/view-main-template.html',
    controller: ['$state', '$q', '$http', 'factoryCities', 'factoryWeather', viewMain],
    controllerAs: 'viewMain'
  });

  function viewMain($state, $q, $http, factoryCities, factoryWeather) {
    var vm = this;
    vm.gotCity = false;

    vm.$onInit = function () {
      vm.cities = factoryCities.getAllCities();
    }
    vm.getComunity = function () {
      vm.gotComunity = vm.gotComunity;
      vm.days = [];
    };



    vm.selectCity = function () {
      console.log('seleccionamos', vm.SelectedCity);
      vm.weatherInfo = {};

      if (vm.SelectedCity) {
        factoryWeather.getWeatherByCity(vm.SelectedCity, 'ES').then(function (data) {
          vm.weatherInfo = data;
          console.log('Recibiendo....', vm.weatherInfo.response.data.city.name);
        }, function (e) {
          console.log('CACHIS');
        });
      }
    }


  }

})(angular);