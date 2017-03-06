module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                files: {
                    'dist/script/script.js': ['src/lib/**/*.js', 'src/script/**/*.js'],
                    'dist/css/styles.css': ['src/lib/**/*.css', 'src/css/**/*.css']
                }
            }
        },

        uglify: {
            build: {
                src: 'dist/script/script.js',
                dest: 'dist/script/script.min.js'
            }
        },

        cssmin: {
            build: {
                src: 'dist/css/styles.css',
                dest: 'dist/css/styles.min.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};