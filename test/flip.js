import test from 'ava'
import {flip} from '../'

test('it should flip a 0*0 matrix', t =>
  t.deepEqual(flip([[]]), [[]])
)

test('it should flip a 1*1 matrix', t =>
  t.deepEqual(flip([[1]]), [[1]])
)

test('it should flip an m*n matrix (1)', t =>
  t.deepEqual(flip([[1, 2], [3, 4]]), [[1, 3], [2, 4]])
)

test('it should flip an m*n matrix (2)', t =>
  t.deepEqual(
    flip([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]),
    [[1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], [4, 8, 12, 16]]
  )
)