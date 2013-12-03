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
        files: ['js/**/*.js', 'specs/**/*.js'],
        tasks: ['karma:watch:run']
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.renameTask('watch', 'originalWatch');

  grunt.registerTask('watch', ['karma:watch:start', 'originalWatch']);
  grunt.registerTask('test', ['karma:unit']);
};
