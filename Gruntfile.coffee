module.exports = (grunt) ->

	grunt.config.init

		coffee:

			compile:
				files:
					'matrix-utilities.js': 'matrix-utilities.coffee'

		uglify:

			options:
				mangle:
					toplevel: true
				compress:
					dead_code: true
					unused: true
					join_vars: true
				comments: false

			standard:
				files:
					'matrix-utilities.min.js': [
						'matrix-utilities.js'
					]


	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-uglify'

	grunt.registerTask 'default', ['coffee', 'uglify']