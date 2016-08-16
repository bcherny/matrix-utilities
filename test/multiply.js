import test from 'ava'
import {multiply} from '../'

test('it should multiply two 0x0 matrices', t =>
  t.deepEqual(multiply([[]], [[]]), [[]])
)

test('it should multiply two 1x1 matrices', t =>
  t.deepEqual(multiply([[1]], [[1]]), [[1]])
)

test('it should multiply two m*n matrices (1)', t => {
  const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const b = [[1, 2], [3, 4], [5, 6]]
  t.deepEqual(multiply(a, b), [
    [1 * 1 + 2 * 3 + 3 * 5, 1 * 2 + 2 * 4 + 3 * 6],
    [4 * 1 + 5 * 3 + 6 * 5, 4 * 2 + 5 * 4 + 6 * 6],
    [7 * 1 + 8 * 3 + 9 * 5, 7 * 2 + 8 * 4 + 9 * 6]
  ])
})

test('it should multiply two m*n matrices (2)', t => {
  const a = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
  const b = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
  t.deepEqual(multiply(a, b), [
    [90, 100, 110, 120],
    [202, 228, 254, 280],
    [314, 356, 398, 440],
    [426, 484, 542, 600]
  ])
})