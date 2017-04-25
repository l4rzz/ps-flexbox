'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
					files: {
							'assets/css/style.css' : 'assets/sass/style.scss'
					}
			}
		},
		watch: {
			css: {
				files: 'assets/sass/**/*.scss',
					tasks: ['sass']
			},
		}
	});


	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev',['sass']);
	grunt.registerTask('default',['sass','watch']);

};
