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
config.css = {
  src: config.path + '/css/**/*.{sass,scss}',
  dist: config.output + '/css',
  online_dist: config.output + '/' + date_rev + '/css/'
};
config.images = {
  src: config.path + '/images/**/',
  dist: config.output + '/images',
  online_dist: config.output + '/' + date_rev + '/images/'
};
config.favicon = {
  src: config.path + '/favicon/**/',
  dist: config.output + '/favicon'
};
config.fonts = {
  src: config.path + '/fonts/**/*',
  dist: config.output + '/fonts'
};
config.views = {
  src: config.path + '/views/**/*',
  dist: config.output + '/views'
};
config.jsp = {
  src: config.path + '/WEB-INF/jsp/**/*',
  dist: config.output + '/WEB-INF/jsp'
};
config.scripts = {
  src: config.path + '/js/components/**/*.js',
  dist: config.output + '/js'
};
config.concatScript = {
  src: config.path + '/js/merge/**/*.js',
  dist: config.output + '/js',
  online_dist: config.output + '/' + date_rev + '/js/',
  con: config.path
};
config.bowerjs = {
  src: 'src/bower_components/**/*',
  dist: 'dist/bower_components'
};

/*报错处理*/
function handleError(err){
  // 报错时beep一下
  gutil.beep();
  gutil.log(err);
};

/*编译sass文件*/
gulp.task('css', function(){
  return gulp.src(config.css.src)
    .pipe(plumber({errorHandler:handleError}))
    // .pipe(changed(config.css.dist))
    .pipe(sass())
    .pipe(minifycss({compatibility:'ie7'}))
    .pipe(autoprefixer())
    /*.pipe(rename(function (path){
      path.basename += "";
      path.extname = ".css";
    }))*/
    .pipe(gulp.dest(config.css.dist))
});

/*压缩图片*/
gulp.task('images', function(){
  return gulp.src(config.images.src)
    .pipe(plumber())
    // .pipe(changed(config.images.dist))
    .pipe(cache(imagemin({optimizationLevel:3, progressive:true, interlaced:true})))
    .pipe(gulp.dest(config.images.dist));
});

/*压缩图片*/
gulp.task('favicon', function(){
  return gulp.src(config.favicon.src)
    .pipe(plumber())
    // .pipe(changed(config.images.dist))
    .pipe(cache(imagemin({optimizationLevel:3, progressive:true, interlaced:true})))
    .pipe(gulp.dest(config.favicon.dist));
});

/*编译字体*/
gulp.task('fonts', function(){
  return gulp.src(config.fonts.src)
    .pipe(plumber())
    // .pipe(changed(config.fonts.dist))
    .pipe(gulp.dest(config.fonts.dist));
});

/*编译view*/
gulp.task('views', function(){
  return gulp.src(config.views.src)
    .pipe(plumber())
    // .pipe(changed(config.views.dist))
    .pipe(gulp.dest(config.views.dist));
});

/*编译jsp*/
gulp.task('jsp', function(){
  return gulp.src(config.jsp.src)
    .pipe(plumber())
    // .pipe(changed(config.jsp.dist))
    .pipe(gulp.dest(config.jsp.dist));
});

/*编译ftl文件*/
gulp.task('ftl', function(){
  return gulp.src(config.path + '/WEB-INF/json/**/*.json')
    .pipe(plumber())
    // .pipe(changed(config.ftl.dist))
    .pipe(freemarker({
        viewRoot: config.ftl.src,
        options: {}
    }))
    .pipe(gulp.dest(config.ftl.dist));
});
/*编译bower_components*/
gulp.task('bowerjs', function(){
  return gulp.src(config.bowerjs.src)
    .pipe(plumber())
    // .pipe(changed(config.bowerjs.dist))
    .pipe(gulp.dest(config.bowerjs.dist));
});

/*合并、压缩script*/
gulp.task('concatScript', function(){
  return gulp.src(config.concatScript.src)
    .pipe(plumber())
    // .pipe(changed(config.concatScript.dist))
    .pipe(concatScript({
      relativeUrls:config.concatScript.con
    }))
    // .pipe(uglify({preserveComments:'some'}))
    /*.pipe(rename(function (path){
      //path.basename += ".min";
      path.extname = '.js';
    }))*/
    .pipe(gulp.dest(config.concatScript.dist))
});

/*线上css文件生成*/
gulp.task('css_online', function(){
  return gulp.src(config.css.src)
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
    .pipe(gulp.dest(config.css.online_dist))
    // .pipe(rev.manifest())
    // .pipe(gulp.dest(config.output + "/rev/css/" + date_rev))
});

/*线上合并、压缩script*/
gulp.task('concatScript_online', function(){
  return gulp.src(config.concatScript.src)
    .pipe(plumber())
    // .pipe(changed(config.concatScript.dist))
    .pipe(concatScript({
      relativeUrls:config.concatScript.con
    }))
    .pipe(uglify({preserveComments:'some'}))
    /*.pipe(rename(function (path){
      //path.basename += ".min";
      path.extname = '.js';
    }))*/

    // .pipe(rev())
    .pipe(gulp.dest(config.concatScript.online_dist))
    // .pipe(rev.manifest())
    // .pipe(gulp.dest(config.output + "/rev/js/" + date_rev))
});
/*线上压缩图片*/
gulp.task('images_online', function(){
  return gulp.src(config.images.src)
    .pipe(plumber())
    // .pipe(changed(config.images.dist))
    .pipe(cache(imagemin({optimizationLevel:3, progressive:true, interlaced:true})))
    .pipe(gulp.dest(config.images.online_dist));
});

/*改变版本号*/
gulp.task('rev', function(){
  return gulp.src([config.output + "/rev/**/*.json", config.views.src])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest(config.views.dist))
});

/*测试环境修改环境变量文件*/
gulp.task('template_test', function () {
  return gulp.src('src/views/ssi/*.html')
    .pipe(template({date_rev: date_rev}))
    .pipe(replace('data.pro.mtime.com', 'data1.pro.mtime.com'))
    .pipe(gulp.dest(config.views.dist + '/ssi/'));
});

gulp.task('template_test_node', function (){
  return gulp.src('config/config.src.js')
    .pipe(template({date_rev: date_rev}))
    .pipe(rename('config.js'))
    .pipe(gulp.dest('config/'));
});

/*修改环境变量文件*/
gulp.task('template', function () {
    return gulp.src('src/views/ssi/*.html')
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
  gulp.watch(config.css.src, ['css']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.fonts.src, ['fonts']);
  gulp.watch(config.views.src, ['views']);
  gulp.watch(config.scripts.src, ['concatScript']);
  gulp.watch(config.concatScript.src, ['concatScript']);
  gulp.watch(config.bowerjs.src, ['bowerjs']);
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
  return gulp.src([config.css.dist, config.images.dist, config.fonts.dist, config.views.dist, config.scripts.dist, config.bowerjs.dist], {read:false})
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