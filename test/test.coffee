
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

	actual = util.multiply one, two
	expected = [
		[ 1*1 + 2*3 + 3*5 , 1*2 + 2*4 + 3*6 ]
		[ 4*1 + 5*3 + 6*5 , 4*2 + 5*4 + 6*6 ]
		[ 7*1 + 8*3 + 9*5 , 7*2 + 8*4 + 9*6 ]
	]

	test.deepEqual actual, expected

	test.done()