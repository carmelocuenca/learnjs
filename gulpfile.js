var gulp = require('gulp'),

browserSync = require('browser-sync');

gulp.task('default', function() {

console.log('Hello Gulp');

});

gulp.task('browser-sync', function() {

browserSync({

// You can use wildcards in here.

files: 'public/**/*.html, public/**/*.js, ',

// We can pick port 8081 or 8082, if you are more of a 2's kind of guy, go for the 8082. Highly recommended.

port: 8082

});

});