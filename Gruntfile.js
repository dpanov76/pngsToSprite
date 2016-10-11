module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sprite:{
      all: {
        src: 'images/*.png',
        dest: 'sprites/spritesheet.png',
        destCss: 'css/sprites.css'
      }
    }
  });
  
  // Load in `grunt-spritesmith`
  grunt.loadNpmTasks('grunt-spritesmith')

//  grunt.registerTask('sprite','[sprite]');

};
