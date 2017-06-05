(function(angular) {

  angular.module('app').component('viewAbout', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/about/about-template.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',viewAbout],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'viewAbout'
});

function viewAbout ($state){
  var vm = this;
 
}

})(angular)