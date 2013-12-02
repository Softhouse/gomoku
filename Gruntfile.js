module.exports = function(grunt) {
  grunt.initConfig({

    karma: {
      unit: {
        options: {
          files: [
            {pattern: "js/**/*.js", included: false},
            {pattern: "specs/**/*.js", included: false},
            "specs/spec-main.js"]
        },
        background: true
      }
    },

    watch: {
      karma: {
        files: ['js/**/*.js', 'specs/**/*.js'],
        tasks: ['karma:unit:run']
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
