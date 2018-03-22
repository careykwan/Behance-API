// GruntFile.js
module.exports = function (grunt) {
    // initiliased the config
    grunt.initConfig({
        jshint: {
            files: ['js/carey.js', 'js/kelsey.js', 'js/script.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/script.min.js': ['js/script.js', 'js/carey.js', 'js/kelsey.js']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },
        browserSync: {
            bsFiles: {
                src: [
                    './*.html',
                ]
            },
            options: {
                server: {
                    baseDir: [
                        './'
                    ]
                }
            }
        },
        watch: {
            sass: {
                files: ['scss/**/*.*'],
                tasks: ['sass']
            },
            css: {
                files: ['css/style.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['js/*.js'],
                tasks: ['jshint', 'uglify']
            }
        }
        

    });
    //Run command tasks
    // running grunt jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // running grunt csslint
    grunt.loadNpmTasks('grunt-contrib-csslint');
    // run grunt mincss
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // run grunt uglify js
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // run gruntSass
    grunt.loadNpmTasks('grunt-contrib-sass');
    // run browser sync
    grunt.loadNpmTasks('grunt-browser-sync');
    // run gruntwatch
    grunt.loadNpmTasks('grunt-contrib-watch');
   


    // it will only run the tasks inside the array 
    grunt.registerTask('server', ['browserSync']);
    grunt.registerTask('w', ['watch']);
};