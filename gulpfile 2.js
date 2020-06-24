var gulp = require('gulp'),
    // imagemin = require('gulp-imagemin'), //图片压缩
    sass = require('gulp-sass'),          //sass
    minifycss = require('gulp-minify-css'), //css压缩
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'), //js压缩
    rename = require('gulp-rename'), //重命名
    concat = require('gulp-concat'), //合并文件
    clean = require('gulp-clean'),//清空文件夹
    htmlmin = require('gulp-htmlmin'); //html 处理

// // 样式处理任务
// gulp.task('styles', function () {
//     var styleSrc = "./src/css/*.sss",
//         styleDst = "./dist/css";
//     return gulp.src(styleSrc)    //引入所有CSS
//         // .pipe(concat('main.css'))           //合并CSS文件
//         .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//         .pipe(gulp.dest(styleDst))      //完整版输出
//         .pipe(rename({ suffix: '.min' }))   //重命名
//         .pipe(minifycss())                  //CSS压缩
//         .pipe(gulp.dest(styleDst))      //压缩版输出
//         .pipe(notify({ message: '样式文件处理完成' }));
// });


// //css 压缩
// // gulp.task('minifycss', function () {
// //     var cssSrc = './src/css/*.css',
// //         cssDst = './dist/css';
// //     return gulp.src(cssSrc) //被压缩的文件
// //         .pipe(rename({
// //             suffix: '.min'
// //         }))
// //         .pipe(minifycss()) //执行压缩
// //         .pipe(gulp.dest(cssDst)); //输出文件夹
// // });

// //less压缩
// // gulp.task('testLess', function () {
// //     var cssSrc = './src/less/*.less',
// //         cssDst = './dist/css';
// //     return gulp.src(cssSrc) //被压缩的文件
// //         .pipe(rename({
// //             suffix: '.min'
// //         }))
// //         .pipe(less()) //执行压缩
// //         .pipe(gulp.dest(cssDst)); //输出文件夹
// // });


// gulp.task('testSass', function () {
//     var cssSrc = "./src/scss/*.scss",
//         cssDst = "./dist/css";
//     return gulp.src(cssSrc)
//         .pipe(sass({ style: 'expanded', }))
//         .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//         .pipe(gulp.dest(cssDst))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(minifycss())
//         .pipe(gulp.dest(cssDst))
//         .pipe(notify({ message: 'Styles task complete' }));
// });


// // // 图片处理
// // gulp.task('imagemin', function () {
// //     var imgSrc = './src/images/*',
// //         imgDst = './dist/images';
// //     return gulp.src(imgSrc)
// //         .pipe(imagemin())
// //         .pipe(gulp.dest(imgDst));
// // });


// // js处理
// gulp.task('uglify', function () {
//     var jsSrc = './src/js/*.js',
//         jsDst = './dist/js';
//     return gulp.src(jsSrc)
//         // .pipe(rename({
//         //     suffix: '.min'
//         // }))
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         // .pipe(uglify())
//         .pipe(gulp.dest(jsDst));
// });



// //html 处理
// // gulp.task('htmlmin', function () {
// //     var options = {
// //         removeComments: true, //清除HTML注释
// //         collapseWhitespace: true, //压缩HTML
// //         collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
// //         removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
// //         removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
// //         removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
// //         minifyJS: true, //压缩页面JS
// //         minifyCSS: true //压缩页面CSS
// //     };
// //     var htmlSrc = './src/*.html',
// //         htmlDst = './dist';
// //     gulp.src(htmlSrc)
// //         .pipe(htmlmin(options))
// //         .pipe(gulp.dest(htmlDst)); //同名的html,会直接替换
// // });
// // clean被执行时,先清空对应目录下图片、样式、js
// gulp.task('clean', function () {
//     return gulp.src(['./dist/css', './dist/js', './dist/images'], {
//         read: false
//     })
//         .pipe(clean());
// });
// //watch
// // gulp.watch('./src/css/*.css', ['minifycss']);
// gulp.task('watch', function () {
//     //css
//     gulp.watch('./src/css/*.css', ['styles']);
//     //less
//     // gulp.watch('./src/less/*.less', ['testLess']);
//     //sass
//     gulp.watch('./src/scss/*.scss', ['testSass']);
//     //css
//     gulp.watch('./src/js/*.js', ['uglify']);
//     // //css
//     // gulp.watch('./src/images/*', ['imagemin']);
//     //css
//     // gulp.watch('./src/*.html', ['htmlmin']);
// });


// 默认预设任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', function () {
    console.log("执行了");
    //gulp.start('styles', 'testSass', 'uglify', 'watch');
});