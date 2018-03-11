var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

    var coffeeSources = ['components/coffee/tagline.coffee']

//gulp.task('log', function(){
//gutil.log('Workflows are awesome');
//});

gulp.task('coffee', function(){
    gulp.src(coffeeSources)
         .pipe(coffee({bare: true})
         .on('error', gutil.log)) // bare tells coffee to process it to js file without wrapper
        .pipe(gulp.dest('components/scripts'))  
        });
