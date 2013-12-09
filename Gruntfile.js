module.exports = function(grunt) {
  grunt.initConfig({

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      watch: {
        background: true
      },
      unit: {
        singleRun: true
      }
    },

    originalWatch: {
      karma: {
        files: ['public/**/*.js'],
        tasks: ['karma:watch:run']
      }
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-reload');

  grunt.renameTask('watch', 'originalWatch');

  grunt.registerTask('watch', ['karma:watch:start', 'originalWatch']);
  grunt.registerTask('test', ['karma:unit']);
};
