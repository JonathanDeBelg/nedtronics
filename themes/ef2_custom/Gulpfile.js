/*
    EF2 Gulp configuratie voor standaard Drupal 8 thema

    Versie 03-05-2018
    
    - Compileert CSS
    - G-zipt CSS
    - Check JS
    - Check JS-bestanden uit warnings en errors
    - Voegt JS-bestanden samen uit map 'js/source' en bundelt deze in js/bundle.js
    - Upload CSS en JS bestanden als dit aan is gezet in de instellingen. Houdt rekening met gewijzigde en nieuwe bestanden
    - 03-05-2018: Upload werkt met SSH-keys, dus zonder wachtwoorden

*/

/* ------------------------- Instellingen ------------------------ */

const useUpload = false;
const uploadHost = 'vs108x.uniserver.nl';
const uploadUser = '';
const uploadPass = '';
const uploadBasePath = '/var/www/vhosts/drupal8.ef2.nl/httpdocs/themes/ef2_custom'; //Zonder trailing slash

/* -------------------------------------------------------------- */

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const stripCssComments = require('gulp-strip-css-comments');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat')

gulp.task('styles', function(done) {
    gulp.src('scss/**/*.scss')        
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))        
        .pipe(autoprefixer())
        .pipe(stripCssComments())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./css/'))
        .on('end', function(error) {
            if (error) {
              console.log(error)
            }
            // Signal that the task is over
            done();
          })
});

gulp.task('jshint', function() {
 return gulp.src('js/source/*.js')
   .pipe(jshint())
   .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', function() {
 return gulp.src('js/source/*.js')
   .pipe(sourcemaps.init())
   .pipe(concat('bundle.js'))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./js'));
});

//Watch task
gulp.task('default',function() {
    console.log(' ______ ______ ___     _____       _         _____                         _ \n'+
                '|  ____|  ____|__ \\   / ____|     | |       |  __ \\                       | |\n'+
                '| |__  | |__     ) | | |  __ _   _| |_ __   | |  | |_ __ _   _ _ __   __ _| |\n'+
                '|  __| |  __|   / /  | | |_ | | | | | \'_ \\  | |  | | \'__| | | | \'_ \\ / _` | |\n'+
                '| |____| |     / /_  | |__| | |_| | | |_) | | |__| | |  | |_| | |_) | (_| | |\n'+
                '|______|_|    |____|  \\_____|\\__,_|_| .__/  |_____/|_|   \\__,_| .__/ \\__,_|_|\n'+
                '                                    | |                       | |            \n'+
                '                                    |_|                       |_|            ');

    //SCSS compiles en comprimeren
    gulp.watch('scss/**/*.scss', gulp.series('styles'));    
    // gulp.watch('css/*.css', gulp.series('compress-css'));

    //JS checken en comprimeren
    gulp.watch('js/source/*.js', gulp.series('jshint', 'build-js'));
    // gulp.watch('js/*.js', gulp.series('compress-js'));    
});

gulp.task('default',function() {
    return gulp.watch('scss/**/*.scss', gulp.series('styles'));    
});