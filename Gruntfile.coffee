module.exports = (grunt) ->

	name = 'matrix-utilities'

	config =

		coffee:
			compile:
				files: {}

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
				files: {}


	config.coffee.compile.files[name + '.js'] = name + '.coffee'
	config.uglify.standard.files[name + '.min.js'] = [name +'.js']

	grunt.config.init config
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.registerTask 'default', ['coffee', 'uglify']