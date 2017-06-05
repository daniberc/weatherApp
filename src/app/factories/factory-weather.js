(function (angular) {

    /* Inyectamos $q para gestionar promesas y $http para las llamadas ajax */
    angular.module('app').factory('factoryWeather', ['$q', '$http', factoryWeather]);
    function factoryWeather($q, $http) {
        var module = {};
        var self = module;

        // Recupera el tiempo para una ciudad
        module.getWeatherByCity = function (_city_, _country_) {

            var ajax_url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + _city_ + ',' + _country_ + '&appid=0467bbad2230162c7dc089ff287cdc7f&units=metric&lang=es&cnt=7';
            console.log('ajax_url', ajax_url)
            var defered = $q.defer();

            $http.get(ajax_url, '').then(

                function (response) {
                    console.log('fue bien');

                    self.weatherInfo = {response};

                    defered.resolve(self.weatherInfo);

                },
                function (e) {
                    console.log('ha cascado')
                }
            )
            return defered.promise;
        };

        return module;
    };

})(angular);



