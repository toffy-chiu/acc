var gulp=require('gulp');
var jade=require('gulp-jade');
var uglify=require('gulp-uglify');
var sass=require('gulp-sass');
var rename=require('gulp-rename');
var del=require('del');

gulp.task('vendor', function(){
    gulp.src('./vendor/js/*')
        .pipe(gulp.dest('./dist/js/'))
    ;
    gulp.src('./vendor/css/*')
        .pipe(gulp.dest('./dist/css/'))
    ;
    gulp.src('./vendor/fonts/*')
        .pipe(gulp.dest('./dist/font/'))
    ;
});

gulp.task('image', function(){
    gulp.src('./images/*')
        .pipe(gulp.dest('./dist/image/'))
    ;
});

gulp.task('template', function(){
    gulp.src('./views/*.jade')
        .pipe(jade({pretty:true,locals:{test:'sdfsdfwewe'}}))
        .pipe(gulp.dest('./dist/'))
    ;
});

gulp.task('styles', function(){
    gulp.src('./src/scss/*.scss')
        .pipe(sass({outputStyle:'compressed'}))
//        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css/'))
    ;
});

gulp.task('scripts', function(){
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
    ;
});

gulp.task('clean', function(){
    del.sync('./dist/*');
});

gulp.task('default', ['clean'], function(){
    gulp.start('template', 'styles', 'scripts', 'image', 'vendor');
});