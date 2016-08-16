import test from 'ava'
import {add} from '../'

test('it should add two 0x0 matrices', t => {
  const a = [[]]
  t.deepEqual(add(a, a), [[]])
})

test('it should add two 1*1 matrices', t => {
  const a = [[1]]
  t.deepEqual(add(a, a), [[2]])
})

test('it should add two m*n matrices (1)', t => {
  const a = [[1, 2], [4, 8], [16, 32], [64, 128]]
  const b = [[2, 3], [5, 7], [11, 13], [17, 19]]
  t.deepEqual(
    add(a, b),
    [[3, 5], [9, 15], [27, 45], [81, 147]]
  )
})

test('it should add two m*n matrices (2)', t => {
  const a = [[1, 2, 4, 8], [16, 32, 64, 128]]
  t.deepEqual(add(a, a), [[2, 4, 8, 16], [32, 64, 128, 256]])
})

test('it should throw a RangeError when row count does not match', t => {
  const a = [[1, 2], [3, 4]]
  const b = [[5, 6], [7, 8], [9, 10]]
  t.throws(() =>  add(a, b), RangeError)
})

test('it should throw a RangeError when item count does not match', t => {
  const a = [[1, 2], [3, 4]]
  const b = [[5, 6], [7, 8, 9]]
  t.throws(() =>  add(a, b), RangeError)
})