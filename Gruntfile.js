module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/style.css": "css/style.less" // destination file and source file
        }
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'MoranRealty.Templates',
          processName: function(filePath) { 
            var pieces = filePath.split("/");
            return pieces[pieces.length - 1].replace('.hbs','').replace('.','/');
          }
        },
        files: {
          "js/templates/compiled.js": ["js/templates/*.hbs"]
        }
      }

    },
    watch: {
      styles: {
        files: ['css/style.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      handlebars: {
        files: ['js/templates/*.hbs'],
        tasks: ['handlebars']
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('default', ['handlebars', 'watch']);
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');

};