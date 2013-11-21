module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
  	requirejs: {
    compile: {
      options: { 
		  name: "js/bundle/main",
		  baseUrl: "src",
      mainConfigFile: "src/js/bundle/main.js",
      out: "src/js/bundle/build.js",
		  optimize: 'none'
      }
    }
  }
	});

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-requirejs');


  // Default task(s).
  grunt.registerTask('default', ['requirejs']);
};