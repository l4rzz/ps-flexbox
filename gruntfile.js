'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
					files: {
							'style.css' : 'style.scss'
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

	grunt.registerTask('dev',['sass']);
	grunt.registerTask('default',['sass','watch']);

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
