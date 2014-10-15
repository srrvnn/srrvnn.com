module.exports = function(grunt) {

    // load all grunt tasks form dependencies, devDependencies, and peerDependencies.
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        nodemon: {
            dev: {
                script: 'server.js',
                options: {

                    env: {

                        NODE_ENV: 'development'
                    },

                    callback: function (nodemon) {

                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });

                        // opens browser on initial server start
                        nodemon.on('config:update', function () {
                            // Delay before server listens on port
                            setTimeout(function() {
                                require('open')('http://localhost:12053/index.html');
                            }, 1000);
                        });

                        // refreshes browser when server reboots
                        nodemon.on('restart', function () {
                            // Delay before server listens on port
                            setTimeout(function() {
                                require('touch')('.reboot');
                            }, 1000);
                        });
                    }
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'css/*.{less,css}',
                options: {
                    debounceDelay: 1000
                }
            },
            js : {
                files: 'public/scripts/*.js',
                options: {
                    debounceDelay: 1000
                }
            },
            html: {
                files: '**/*.html'
            },
            reboot: {
                files: '.reboot'
            } 
        },

        concurrent: {

            development: {

                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }, 

            run: {

                tasks: ['nodemon']
            }
        },
        
    });
    
    // develop task (used for day to day development) : clean / compile / test / run / watch
    grunt.registerTask('develop', ['npm-install', 'concurrent:development']);

    // default task : develop
    grunt.registerTask('default', ['develop']);
};
