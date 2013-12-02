module.exports = function(grunt) {
  grunt.initConfig({

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        background: true
      }
    },

    originalWatch: {
      karma: {
        files: ['js/**/*.js', 'specs/**/*.js'],
        tasks: ['karma:unit:run']
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.renameTask('watch', 'originalWatch');

  grunt.registerTask('watch', ['karma:unit:start', 'originalWatch']);
};
