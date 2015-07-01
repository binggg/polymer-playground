module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    watch: {
      default: {
        options: {
          spawn: false,
          interrupt: true
        },
        files: ['dist/elements/**/*.html', 'dist/index.html'],
        tasks: ['vulcanize']
      }
    },
    vulcanize: {
      default: {
        options: {
          csp: true,
          strip: true
        },
        files: {
          'dist/build.html': 'dist/index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['vulcanize', 'watch']);

};
