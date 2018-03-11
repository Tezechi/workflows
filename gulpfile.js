var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

    var coffeeSources = ['components/coffee/tagline.coffee']
    var jsSources = [
        'components/scripts/rclick.js',
        'components/scripts/pixgrid.js',
        'components/scripts/tagline.js',
        'components/scripts/template.js'
    ];

//gulp.task('log', function(){
//gutil.log('Workflows are awesome');
//});

gulp.task('coffee', function(){
    gulp.src(coffeeSources)
         .pipe(coffee({bare: true})
         .on('error', gutil.log)) // bare tells coffee to process it to js file without wrapper
        .pipe(gulp.dest('components/scripts'))  
        });

gulp.task('js', function(){
   gulp.src(jsSources) 
   .pipe(concat('scripts.js'))
   .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))
});
