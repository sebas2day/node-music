var gulp = require('gulp');
var gulp_jspm = require('gulp-jspm');
var tsc = require('gulp-typescript');
var run = require('gulp-run');

var tsProject = tsc.createProject('tsconfig.json', {
	typescript: require('typescript') // Make sure we use the latest typescript version
});

var TS_SRC = 'src/**/*.ts';

gulp.task('default', ['watch']);

gulp.task('run', function(){
	run('npm start').exec();
});

gulp.task('build', function(){
	return gulp.src(TS_SRC)
		.pipe(tsc(tsProject))
		.pipe(gulp.dest('src/'));
});

gulp.task('watch', ['build', 'run'], function(){
	gulp.watch(TS_SRC, ['build']);
});

// TODO: make this usable for distribution
gulp.task('jspm', function(){
    return gulp.src('src/app/main.js')
        .pipe(gulp_jspm())
        .pipe(gulp.dest('dist/'));
});