/*
* @Author: anchen
* @Date:   2016-04-19 12:44:51
* @Last Modified by:   anchen
* @Last Modified time: 2016-04-26 22:03:01
*/
'use strict';
//引入依赖模块
var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   watch = require('gulp-watch'),
   sass = require('gulp-sass'),
   autoprefix = require('gulp-autoprefixer'),
   rename = require('gulp-rename'),
   concat = require('gulp-concat'),
   browserSync = require('browser-sync');

//编译sass到css
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

//合并多个js文件,压缩，并重命名
gulp.task('concat', function () {
    gulp.src('build/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// 自动补全css3浏览器兼容前缀
gulp.task('styles', function() {
  gulp.src(['./build/css/test.css'])
    .pipe(autoprefix('last 2 versions'))
    .pipe(gulp.dest('./dist/css'));
});

//babel转换es2015到es5
gulp.task('babel',function(){
   return gulp.src("app/js/es2015.js")// ES6 源码存放的路径
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest("build/js")); //转换成 ES5 存放的路径
   });

//监控es2015文件，sass文件，自动编译为es5文件，css文件
gulp.task('watch', function () {
   gulp.watch(['app/js/es2015.js','app/sass/*.scss'], ['babel','sass']);
});

//浏览器实时自动更新状态，不用手动刷新
gulp.task('browser-sync', function () {
   var files = [
      'app/**/*'
   ];
   browserSync.init(files, {
      server: {
         baseDir: ['dist']
      }
   });
});
