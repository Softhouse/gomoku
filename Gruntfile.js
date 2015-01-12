module.exports = function(grunt) {
  var files = ['app/javascripts/**/*.js', 'test/**/*.js', '!app/javascripts/external/*.js'];

  grunt.initConfig({
    karma: {
      options: {
        configFile: 'karma.conf.js',
      },
      watch: {
        background: true
      },
      unit: {
        singleRun: true
      }
    },

    watch: {
      karma: {
        files: files,
        tasks: ['karma:watch:run'],
        options: {
          livereload: true
        }
      },
      jshint: {
        files: files,
        tasks: ['jshint'],
      }

    },

    express: {
      options: {
      },
      dev: {
        options: {
         script: 'server.js'
        }
      }
    },

    reload: {
      port: 6001,
      proxy: {
        host: 'localhost',
        port: 3000
      }
    },

    jshint: {
      files: files,
      options: {
        reporter: require('jshint-stylish')
      }
    }  
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-reload');

  grunt.registerTask('default', ['express:dev', 'reload', 'karma:watch:start', 'watch']);
  grunt.registerTask('test', ['karma:unit']);
};
