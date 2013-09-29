
util = require '../matrix-utilities'

exports.multiply = (test) ->

	one = [
		[1, 2, 3]
		[4, 5, 6]
		[7, 8, 9]
	]

	two = [
		[1, 2]
		[3, 4]
		[5, 6]
	]

	# multiply 3x3 x 2x3

	actual = util.multiply one, two
	expected = [
		[ 1*1 + 2*3 + 3*5 , 1*2 + 2*4 + 3*6 ]
		[ 4*1 + 5*3 + 6*5 , 4*2 + 5*4 + 6*6 ]
		[ 7*1 + 8*3 + 9*5 , 7*2 + 8*4 + 9*6 ]
	]

	test.deepEqual actual, expected

	# multiply 4x4 x 4x4

	one = [
		[1, 2, 3, 4]
		[5, 6, 7, 8]
		[9, 10, 11, 12]
		[13, 14, 15, 16]
	]

	two = [
		[1, 2, 3, 4]
		[5, 6, 7, 8]
		[9, 10, 11, 12]
		[13, 14, 15, 16]
	]

	actual = util.multiply one, two
	expected = [
		[ 1*1 + 2*5 + 3*9 + 4*13 , 1*2 + 2*6 + 3*10 + 4*14 , 1*3 + 2*7 + 3*11 + 4*15 , 1*4 + 2*8 + 3*12 + 4*16 ]
		[ 5*1 + 6*5 + 7*9 + 8*13 , 5*2 + 6*6 +  ]
		[]
		[]
	]

	test.done()