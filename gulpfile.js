const gulp = require('gulp');

var sass = require('gulp-ruby-sass'),          //sass
    minifycss = require('gulp-minify-css'), //css压缩
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'), //js压缩
    rename = require('gulp-rename'), //重命名
    concat = require('gulp-concat'), //合并文件
    clean = require('gulp-clean'),//清空文件夹
    htmlmin = require('gulp-htmlmin'); //html 处理


//先执行整体拷贝
gulp.task('copydome', (done) => {
    var cssSrc = ['./src/**/*.*','!./src/'],
        cssDst = './dist/';
    return gulp.src(cssSrc) //被压缩的文件
        .pipe(gulp.dest(cssDst)); //输出文件夹
        done();
});


// js处理
gulp.task('uglify', function (done) {
    var jsSrc = ['./src/pages/**/*.js'],
        jsDst = './dist/pages';
    return gulp.src(jsSrc)
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        // .pipe(uglify())
        .pipe(gulp.dest(jsDst));
        done();
});


// clean被执行时,先清空对应目录下图片、样式、js
gulp.task('clean', function (done) {
    return gulp.src(['./dist/**/*'], {
        read: false
    })
        .pipe(clean());
        done();
});

//watch
gulp.task('watch', function (done) {
    // //sass
    // gulp.watch('./src/scss/*.scss', ['testSass']);
    //css
    gulp.watch('./src/**/*.js', ['uglify']);
    done()
});



// 默认预设任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', function (done) {
    console.log("执行了");
    gulp.series('clean','copydome', 'uglify', 'watch');
    done();
});


// // 当执行这个任务时，function 就会被调用。
// gulp.task('hello', function (done) {
//     console.log('Hello World.')
//     done()
// });


// gulp.task('uglify', () =>
//     gulp.src('./src/**/*.js')
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(gulp.dest('./dist'))
// );
