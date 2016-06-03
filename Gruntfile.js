module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
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
        copy: {
            files: {
                cwd: 'src',
                src: [ '**/*.html', '**/*.css', '**/*.js' ],
                dest: '_site/',
                expand: true        // required when using cwd
            }
        }
    });
    
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['jshint', 'bower_concat', 'copy']);
};