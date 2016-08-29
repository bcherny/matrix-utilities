import test from 'ava'
import {to3d} from '../'

test('it should default to a 2D identity matrix', t =>
  t.deepEqual(
    to3d([[], [], [], []]),
    [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
  )
)

test('it should transform the given matrix to 3D', t =>
  t.deepEqual(
    to3d([[1, 2, 3], [4, 5, 6]]),
    [[1, 2, 0, 3], [4, 5, 0, 6], [0, 0, 1, 0], [0, 0, 0, 1]]
  )
)