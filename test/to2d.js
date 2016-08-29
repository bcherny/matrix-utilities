import test from 'ava'
import {to2d} from '../'

test('it should default to a 2D identity matrix', t =>
  t.deepEqual(
    to2d([[], [], [], []]),
    [[1, 0, 0], [0, 0, 0]]
  )
)

test('it should transform the given matrix to 2D', t =>
  t.deepEqual(
    to2d([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]),
    [[1, 2, 4], [5, 6, 8]]
  )
)