var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    htmlclean = require('gulp-htmlclean');
    concat = require('gulp-concat');

// JS zip
gulp.task('uglify', function() {
    return gulp.src(['./public/js/**/.js','!./public/js/**/*min.js']) // 只是排除min.js文件还是不严谨，一般不会有问题，根据自己博客的修改我的修改为return gulp.src(['./public/**/*.js','!./public/zuoxi/**/*.js',,'!./public/radio/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public/js')); // 对应修改为 ./public 即可
});
// public-fancybox-js zip
gulp.task('fancybox:js', function() {
    return gulp.src('./public/vendors/fancybox/source/jquery.fancybox.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/vendors/fancybox/source/'));
});
// combine JS
gulp.task('jsall', function () {
    return gulp.src('./public/**/*.js')
         // rename
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public'));
});
// public-fancybox-css zip
gulp.task('fancybox:css', function() {
    return gulp.src('./public/vendors/fancybox/source/jquery.fancybox.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./public/vendors/fancybox/source/'));
});
// CSS zip
gulp.task('cssmin', function() {
    return gulp.src(['./public/css/main.css','!./public/css/*min.css'])
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css/'));
});
// images zip
gulp.task('images', function() {
    gulp.src('./public/uploads/*.*')
        .pipe(imagemin({
            progressive: false
        }))
        .pipe(gulp.dest('./public/uploads/'));
});
// zip all html files of /public, ./public/**/*.html 表示 /public 下所有 html
    gulp.task('minify-html', function() {
      return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
             removeComments: true,
             minifyJS: true,
             minifyCSS: true,
             minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
    });
gulp.task('build', ['uglify', 'jsall', 'cssmin', 'images', 'fancybox:js', 'fancybox:css','minify-html']);
