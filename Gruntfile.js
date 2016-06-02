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
        }
    });
    
    require('load-grunt-tasks')(grunt);

    //grunt.registerTask('build', [
    //]);
    grunt.registerTask('default', ['jshint']);
};