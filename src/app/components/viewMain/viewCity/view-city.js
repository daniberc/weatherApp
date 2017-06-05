(function (angular) {

  angular.module('app').component('viewCity', {
    templateUrl: 'app/components/viewMain/viewCity/view-city-template.html',
    controller: ['$state', 'factoryWeather', viewCity],
    controllerAs: 'viewCity',
    bindings: {
      weatherInfo: '<'
    }
  });

  function viewCity($state, factoryWeather) {
    var vm = this;

    vm.$onInit = function () {
      //      debugger
      var options = { weekday: "long", year: "numeric", month: "short", day: "numeric" };
      vm.weatherInfo = factoryWeather.weatherInfo.response.data;
      var num;
      var ranges = [];
      var averages = [];
      // Convertimos 
      // - las fechas a un formato legible
      // - las temperaturas a una decimal
      for (i = 0; i < vm.weatherInfo.cnt; i++) {


        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(vm.weatherInfo.list[i].dt * 1000);

        // Inicializamos los rangos de temperaturas
        ranges.push([vm.weatherInfo.list[i].dt * 1000, vm.weatherInfo.list[i].temp.min, vm.weatherInfo.list[i].temp.max]);
        averages.push([vm.weatherInfo.list[i].dt * 1000, vm.weatherInfo.list[i].temp.day]);

        // Cambiamos el formato de la fecha
        vm.weatherInfo.list[i].dt = date.toLocaleDateString("es-ES", options);
        // Temperatura del día
        num = vm.weatherInfo.list[i].temp.day;
        vm.weatherInfo.list[i].temp.day = num.toFixed(1);
        // Temperatura mínima
        num = vm.weatherInfo.list[i].temp.min;
        vm.weatherInfo.list[i].temp.min = num.toFixed(1);
        // Temperatura máxima
        num = vm.weatherInfo.list[i].temp.max;
        vm.weatherInfo.list[i].temp.max = num.toFixed(1);

      }

      // Grafico 
      Highcharts.chart('container', {
        title: {text: 'Evolución temperaturas'},
        xAxis: {type: 'datetime'},
        yAxis: {title: {text: null}},
        tooltip: {crosshairs: true,
                  shared: true,
                  valueSuffix: '°C'},
        legend: {},
        series: [{
                  name: 'Temperature',
                  data: averages,
                  zIndex: 1,
                  marker: {fillColor: 'white',
                          lineWidth: 2,
                          lineColor: Highcharts.getOptions().colors[0]}
                  }, {
                  name: 'Range',
                  data: ranges,
                  type: 'arearange',
                  lineWidth: 0,
                  linkedTo: ':previous',
                  color: Highcharts.getOptions().colors[0],
                  fillOpacity: 0.3,
                  zIndex: 0,
                  marker: {enabled: false}
                }],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#ECF0F1'],
            [1, '#96A6A6']
         ]
      } }                
          });
        };
 }

})(angular);
