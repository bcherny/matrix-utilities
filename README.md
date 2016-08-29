# matrix

[![Build Status](https://travis-ci.org/bcherny/matrix.png)](https://travis-ci.org/bcherny/matrix.png)
[![browser support](https://ci.testling.com/bcherny/matrix.png)](https://ci.testling.com/bcherny/matrix)

Tiny (607b gzipped), high performance utilities for performing 2/3D matrix calculations. Full unit test coverage, compatible with Node/CommonJS, AMD, and browser globals.

## API

```js
import * as matrix from 'matrix'
// or, use require()
// or, use window.matrix

matrix.Identity() // returns new 3D identity matrix
matrix.add(matrix1, matrix2 // returns matrix1 + matrix2
matrix.multiply(matrix1, matrix2) // returns matrix1×matrix2
matrix.flip(matrix) // flip a matrix along x=y
matrix.to2d(matrix)
matrix.to3d(matrix)
```

## examples

```js
import * as matrix from 'matrix'

////// identity

const myMatrix = util.Identity()
/* =>
	[
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1]
	]
*/

////// to2d

matrix.to2d(myMatrix)
/* =>
	[
		[1, 0, 0],
		[0, 1, 0]
	]
*/

////// flip

matrix.flip([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
])
/* =>
	[
		[1, 4, 7]
		[2, 5, 8]
		[3, 6, 9]
	]
*/

////// add

const one = [
	[2, 4],
	[6, 8]
]

const two = [
	[1, 3],
	[5, 7]
]

matrix.add(one, two)
/* =>
	[
		[3, 7]
		[11, 15]
	]
*/

////// multiply

const three = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

const four = [
	[1, 2],
	[3, 4],
	[5, 6]
]

util.multiply(three, four)
/* =>
	[
		[22, 28]
		[49, 64]
		[76, 100]
	]
*/
```
