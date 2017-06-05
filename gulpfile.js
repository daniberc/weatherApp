// Importamos gulp
const gulp = require('gulp');

// Validador de codigo eslint
// const eslint = require('gulp-eslint');

// Servidor http BrowerSync
const browserSync = require('browser-sync').create(); // Creamos el servidor
const reload      = browserSync.reload;  // Utilizamos el metodo reload del servidor

// concatenador de archivos
// const concat = require('gulp-concat');


// al metodo TASK se pasan 2 paramétros: nombre tarea + function
// la task default se ejecutará al invocar gulp sin especificar tarea
// Si queremos encadear tareas, las pasamos como segundo parametro mediante un array
//      --> La tarea default se ejecutará la última


// Concatenamos todos los ficheros js
gulp.task('concat-js', function() {
  return gulp.src(['./src/**/*.js', '!.src/**/ejemplo*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});


// Server http
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
      index: 'index.html',
      https: false
    },
  });

  
});

// Watches
gulp.task('watch', ['browserSync'], function (){
  gulp.watch("src/app/**/*.js").on("change", reload);
  gulp.watch("src/app/**/*.html").on("change", reload);
  gulp.watch("src/app/**/*.css").on("change", reload);
})

// Tarea que lanza el validador de eslint
gulp.task('lint', () => {
    // Indicamos los archivos que queremos procesar, con "!" se indica los ficheros que NO queremos procesar
    return gulp.src(['src/**/*.js', '!mocks/**'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
})


gulp.task('default', ['browserSync','watch'], function(){
    console.log('lanzando server');

})

