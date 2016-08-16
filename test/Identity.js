import test from 'ava'
import {Identity} from '../'

test('it should give the identity matrix', t =>
  t.deepEqual(
    Identity(),
    [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
  )
)