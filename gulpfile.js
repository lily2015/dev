/**
 * @author lixue
 * @version [beta 1.0.0]
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concatScript = require('gulp-file-concat'),
    clean = require('gulp-clean'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    livereload = require('gulp-livereload'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    template = require('gulp-template'),
    replace = require('gulp-replace'),
    port = 5620;

var date_rev = new Date(),
  y, m, d, hh, mm, ss;
y = date_rev.getFullYear();
m = date_rev.getMonth()+1;
d = date_rev.getDate();
hh = date_rev.getHours();
mm = date_rev.getMinutes();
ss = date_rev.getSeconds();

m = m > 10 ? m : '0' + m;
d = d > 10 ? d : '0' + d;
date_rev = [y, m, d, hh, mm, ss].join('');
/*文件路径配置*/
var config = {
  path: 'src',
  output: 'dist'
};

/*报错处理*/
function handleError(err){
  // 报错时beep一下
  gutil.beep();
  gutil.log(err);
};

/*编译sass文件*/
gulp.task('css', function(){
  return gulp.src(config.path + '/css/**/*.{sass,scss}')
    .pipe(plumber({errorHandler:handleError}))
    // .pipe(changed(config.css.dist))
    .pipe(sass())
    .pipe(minifycss({compatibility:'ie7'}))
    .pipe(autoprefixer())
    /*.pipe(rename(function (path){
      path.basename += "";
      path.extname = ".css";
    }))*/
    .pipe(gulp.dest(config.output + '/css'))
});

/*压缩图片*/
gulp.task('images', function(){
  return gulp.src(config.path + '/images/**/')
    .pipe(plumber())
    // .pipe(changed(config.images.dist))
    .pipe(cache(imagemin({optimizationLevel:3, progressive:true, interlaced:true})))
    .pipe(gulp.dest(config.output + '/images'));
});

/*压缩图片*/
gulp.task('favicon', function(){
  return gulp.src(config.path + '/favicon/**/')
    .pipe(plumber())
    // .pipe(changed(config.images.dist))
    .pipe(cache(imagemin({optimizationLevel:3, progressive:true, interlaced:true})))
    .pipe(gulp.dest(config.output + '/favicon'));
});

/*编译字体*/
gulp.task('fonts', function(){
  return gulp.src(config.path + '/fonts/**/*')
    .pipe(plumber())
    // .pipe(changed(config.fonts.dist))
    .pipe(gulp.dest(config.output + '/fonts'));
});

/*编译view*/
gulp.task('views', function(){
  return gulp.src(config.path + '/views/**/*')
    .pipe(plumber())
    // .pipe(changed(config.views.dist))
    .pipe(gulp.dest(config.output + '/views'));
});

/*编译jsp*/
gulp.task('jsp', function(){
  return gulp.src(config.path + '/WEB-INF/jsp/**/*')
    .pipe(plumber())
    // .pipe(changed(config.jsp.dist))
    .pipe(gulp.dest(config.output + '/WEB-INF/jsp'));
});

/*编译bower_components*/
gulp.task('bowerjs', function(){
  return gulp.src(config.path + '/bower_components/**/*')
    .pipe(plumber())
    // .pipe(changed(config.bowerjs.dist))
    .pipe(gulp.dest(config.output + '/bower_components'));
});

/*合并、压缩script*/
gulp.task('concatScript', function(){
  return gulp.src(config.path + '/js/merge/**/*.js')
    .pipe(plumber())
    // .pipe(changed(config.concatScript.dist))
    .pipe(concatScript({
      relativeUrls:config.path
    }))
    // .pipe(uglify({preserveComments:'some'}))
    /*.pipe(rename(function (path){
      //path.basename += ".min";
      path.extname = '.js';
    }))*/
    .pipe(gulp.dest(config.output + '/js'))
});

/*线上css文件生成*/
gulp.task('css_online', function(){
  return gulp.src(config.path + '/css/**/*.{sass,scss}')
    .pipe(plumber({errorHandler:handleError}))
    // .pipe(changed(config.css.dist))
    .pipe(sass())
    .pipe(minifycss({compatibility:'ie7'}))
    .pipe(autoprefixer())
    /*.pipe(rename(function (path){
      path.basename += "";
      path.extname = ".css";
    }))*/
    // .pipe(rev())
    .pipe(gulp.dest(config.output + '/' + date_rev + '/css/'))
    // .pipe(rev.manifest())
    // .pipe(gulp.dest(config.output + "/rev/css/" + date_rev))
});

/*线上合并、压缩script*/
gulp.task('concatScript_online', function(){
  return gulp.src(config.path + '/js/merge/**/*.js')
    .pipe(plumber())
    // .pipe(changed(config.concatScript.dist))
    .pipe(concatScript({
      relativeUrls:config.path
    }))
    .pipe(uglify({preserveComments:'some'}))
    /*.pipe(rename(function (path){
      //path.basename += ".min";
      path.extname = '.js';
    }))*/

    // .pipe(rev())
    .pipe(gulp.dest(config.output + '/' + date_rev + '/js/'))
    // .pipe(rev.manifest())
    // .pipe(gulp.dest(config.output + "/rev/js/" + date_rev))
});
/*线上压缩图片*/
gulp.task('images_online', function(){
  return gulp.src(config.path + '/images/**/')
    .pipe(plumber())
    // .pipe(changed(config.images.dist))
    .pipe(cache(imagemin({optimizationLevel:3, progressive:true, interlaced:true})))
    .pipe(gulp.dest(config.output + '/' + date_rev + '/images/'));
});

/*改变版本号*/
gulp.task('rev', function(){
  return gulp.src([config.output + "/rev/**/*.json", config.path + '/views/**/*'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest(config.output + '/views'))
});

/*测试环境修改环境变量文件*/
gulp.task('template_test', function () {
  return gulp.src(config.path + '/views/ssi/*.html')
    .pipe(template({date_rev: date_rev}))
    .pipe(replace('data.pro.mtime.com', 'data1.pro.mtime.com'))
    .pipe(gulp.dest(config.output + '/views/ssi/'));
});

gulp.task('template_test_node', function (){
  return gulp.src('config/config.src.js')
    .pipe(template({date_rev: date_rev}))
    .pipe(rename('config.js'))
    .pipe(gulp.dest('config/'));
});

/*修改环境变量文件*/
gulp.task('template', function () {
    return gulp.src(config.path + '/views/ssi/*.html')
      // .pipe(template({date_rev: date_rev}))
      // .pipe(replace('data.pro.mtime.com', 'data1.pro.mtime.com'))
      // .pipe(gulp.dest(config.views.dist + '/ssi/'));
});
gulp.task('template_node', function (){
  return gulp.src('config/config.src.js')
    // .pipe(template({date_rev: date_rev}))
    .pipe(rename('config.js'))
    .pipe(gulp.dest('config/'));
})

/*文件改动监听*/
gulp.task('watch', function(){
  gulp.watch(config.path + '/css/**/*.{sass,scss}', ['css']);
  gulp.watch(config.path + '/images/**/', ['images']);
  gulp.watch(config.path + '/fonts/**/*', ['fonts']);
  gulp.watch(config.path + '/views/**/*', ['views']);
  gulp.watch(config.path + '/js/components/**/*.js', ['concatScript']);
  gulp.watch(config.path + '/js/merge/**/*.js', ['concatScript']);
  gulp.watch(config.path + '/bower_components/**/*', ['bowerjs']);
});

/*任务执行*/
gulp.task('output', ['css', 'images', 'favicon', 'fonts', 'views', 'jsp', 'concatScript', 'bowerjs'], function(){
  gulp.start('template');
  gulp.start('template_node');
});

/*任务执行*/
gulp.task('output_test', ['css_online', 'images_online', 'favicon', 'fonts', 'views', 'jsp', 'concatScript_online', 'bowerjs'], function(){
  // gulp.start('rev');
  gulp.start('template_test');
  gulp.start('template_test_node');
});

/*任务执行*/
gulp.task('output_online', ['css_online', 'images_online', 'favicon', 'fonts', 'views', 'jsp', 'concatScript_online', 'bowerjs'], function(){
  // gulp.start('rev');
  // gulp.start('template');
  gulp.start('template_test');
  gulp.start('template_test_node');
});

/*清空*/
gulp.task('clean', function(){
  return gulp.src([config.output], {read:false})
    .pipe(plumber())
    .pipe(clean());
});

/*在线清空*/
gulp.task('clean_online', function(){
  return gulp.src([config.output], {read:false})
    .pipe(plumber())
    .pipe(clean());
});

/*启动*/
gulp.task('default', ['clean'], function(){
  gulp.start('output', 'watch');
});

/*测试环境启动*/
gulp.task('test', ['clean_online'], function(){
  gulp.start('output_test');
});

/*线上启动*/
gulp.task('online', ['clean_online'], function(){
  gulp.start('output_online');
});