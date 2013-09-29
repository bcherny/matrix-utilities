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
		result = []

		for row, j in two
			result[j] = []
			for value, k in row
				l = size
				sum = 0
				sum += one[j][l] * two[l][k] while l--
				result[j][k] = sum

		result

	flip: (matrix) ->

		result = []

		for row, j in matrix
			for value, k in row
				(result[k] or result[k] = [])[j] = value

		result

	to2d: (matrix) ->

		if matrix.length < 2
			throw new Error 'Matrix should have at least 2 rows'

		if matrix[0].length < 4
			throw new Error 'Matrix should have at least 4 columns'

		[
			[matrix[0][0], matrix[0][1], matrix[0][3]]
			[matrix[1][0], matrix[1][1], matrix[1][3]]
		]

	to3d: (matrix) ->

		if matrix.length < 2
			throw new Error 'Matrix should have at least 2 rows'
			
		if matrix[0].length < 3
			throw new Error 'Matrix should have at least 3 columns'

		[
			[matrix[0][0], matrix[0][1], 0, matrix[0][2]]
			[matrix[1][0], matrix[1][1], 0, matrix[1][2]]
			[0, 0, 1, 0]
			[0, 0, 0, 1]
		]

	Identity: ->

		[
			[1, 0, 0, 0]
			[0, 1, 0, 0]
			[0, 0, 1, 0]
			[0, 0, 0, 1]
		]