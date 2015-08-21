var gulp = require('gulp'),
    $ = require("gulp-load-plugins")(),
    glob = require('glob');
    babelify = require('babelify'),
    browserify = require('browserify'),
    html = require('html-browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    spritesmith = require('gulp.spritesmith'),
    assign = require('lodash.assign'),
    plumber = require('gulp-plumber');

var DEST = "./dist",
    SRC = "./src"

var paths = {
  js: [SRC + "/**/*.js", "!" + SRC + "/**/_*.js"],
  css: [SRC + "/**/*.scss", "!" + SRC + "/**/_*.scss"],
  img: [SRC + "/**/*.{png,jpg,gif}"],
  sprite: [SRC + "/**/sprite/*.{png,jpg,gif}"]
};

gulp.task('sass', ['sprite'], function () {
  gulp.src(paths.css)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest(DEST));
});

gulp.task('sprite', function() {
  var a = gulp.src(paths.sprite).pipe(plumber()).pipe(spritesmith({                                                                                                                                
    imgName: 'assets/images/sprite.png',                                                                                                                                                        
    cssName: 'assets/css/_sprite.scss',
    imgPath: '/assets/images/sprite.png',                                                                                                                                                       
    algorithm: 'binary-tree',                                                                                                                                                                  
    cssFormat: 'scss',                                                                                                                                                                       
    padding: 4                                                                                                                                                                                 
  }));                                                                                                                                                                                         
  a.img.pipe(gulp.dest(SRC));                                                                                                                                                                  
  a.img.pipe(gulp.dest(DEST));                                                                                                                                                                 
  a.css.pipe(gulp.dest(SRC));                                                                                                                                                           
});     

var customOpts = {
  entries:[SRC + '/app.js'],
  extensions: ['.js'],
  transform: [babelify, html],
  debug: true,
},
opts = assign({}, watchify.args, customOpts),
b = watchify(browserify(opts)),
bundle = function() {
  return b.bundle()
    .on('error',  $.util.log.bind($.util), 'Browserify Error')
    .pipe($.plumber())
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DEST));
}

gulp.task('browserify', bundle);
b.on('update', bundle);
b.on('log', $.util.log);

gulp.task('watch', function() {
  gulp.watch(paths.css[0], ['sass']);
  gulp.watch(paths.js[0], ['browserify']);
});

gulp.task('default', ['watch']);
