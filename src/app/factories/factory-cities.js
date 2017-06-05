(function (angular) {

  /* Inyectamos $q para gestionar promesas y $http para las llamadas ajax */
  angular.module('app').factory('factoryCities', ['$q', '$http', factoryCities]);
  function factoryCities($q, $http) {
    var module = {};
    var self = module;

    var cities = {

      'Andalucia': ['Almería', 'Cadíz','Córdoba','Granada','Huelva','Granada','Jaén','Malaga','Sevilla'],
      'Aragón': ['Huesca', 'Teruel', 'Zaragoza'],
      'Asturias': ['Oviedo'],
      'Baleares': ['Palma de Mallorca'],
      'Canarias': ['Las Palmas de Gran Canaria','Santa Cruz de Tenerife'],
      'Cantabria': ['Santander'],
      'Castilla-La Mancha': ['Albacete','Ciudad Real','Cuenca','Guadalajara','Toledo'],
      'Castilla y León': ['Ávila', 'Burgos','León','Palencia','Salamanca','Segovia','Soria','Valladolid','Zamora'],
      'Cataluña': ['Barcelona','Gerona','Lérida','Tarragona'],
      'Ceuta (Ciudad Autónoma)': ['Ceuta'],
      'Extremadura': ['Badajoz','Cáceres'],
      'Galicia': ['A Coruña','Lugo', 'Ourense','Pontevedra'],
      'La Rioja': ['Logroño'],
      'Madrid': ['Madrid'],
      'Melilla (Ciudad Autónoma)': ['Melilla'],
      'Murcia': ['Murcia'],
      'Navarra': ['Pamplona'],
      'País Vasco': ['Bilbao','Donostia-San Sebastián','Vitoria'],
      'Valencia': ['Alicante','Castellón de la Plana', 'Valencia']
    };
    // Permite devolver todas las comunidades
    module.getAllCities = function () {
        return cities;
    };

    return module;
  };

})(angular);



