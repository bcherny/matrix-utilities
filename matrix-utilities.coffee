# UMD (play nice with AMD, CommonJS, globals)
umd = (factory) ->
	if typeof exports is 'object'
		module.exports = factory
	else if typeof define is 'function' and define.amd
		define [], factory
	else
		@['transform-utilities'] = factory

umd
	
	multiply: (one, two) ->

		if one[0].length isnt two.length
			throw new Error 'Matrix 1\'s row count should equal matrix 2\'s column count'

		size = one[0].length
		result = two.slice()

		for row, j in one
			for value, k in two
				l = size
				sum = 0
				sum += one[j][l] * two[l][k] while l--
				result[j][k] = sum

		result

	flip: (matrix) ->

		result = []

		for row, j in matrix
			for value, k in row
				result[k][j] = value

		result

	to2d: (matrix) ->

	to3d: (matrix) ->

	Identity: ->

		[
			[1, 0, 0, 0]
			[0, 1, 0, 0]
			[0, 0, 1, 0]
			[0, 0, 0, 1]
		]