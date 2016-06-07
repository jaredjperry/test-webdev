module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            target: ['Gruntfile.js', 'src/**/*.js*', 'test/**/*.js*']
        },
        bower_concat: {
            main: {
                dest: {
                    js: '_site/_bower.js',
                    css: '_site/_bower.css',
                    scss: '_site/_bower.scss',
                    coffee: '_site/_bower.coffee'
                }
            }
        },
        sasslint: {
            targets: [ 'src/*.scss' ]
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: [ '*.scss' ],
                    dest: '_site/',
                    ext: '.css'
                }]
            }
        },
        copy: {
            files: {
                cwd: 'src',
                src: [ '**/*.html', '**/*.js*' ],
                dest: '_site/',
                expand: true
            }
        },
        watch: {
            files: 'src/*',
            tasks: 'default'
        }
    });
    
    require('load-grunt-tasks')(grunt);
};