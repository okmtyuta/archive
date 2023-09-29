// sum.test.js
import { expect, test } from 'vitest'
import { findEndOfMath } from '../findEndOfMath'

test('check 等式$a^2+b^2 = c^2$はピタゴラス and will get 2', () => {
  const index = findEndOfMath('$', '等式$a^2+b^2 = c^2$はピタゴラス', 0)
  expect(index).toBe(2)
})
test('check 等式$a^2+b^2 = c^2$はピタゴラス and will get 2', () => {
  const index = findEndOfMath('$', '等式$a^2+b^2 = c^2$はピタゴラス', 4)
  expect(index).toBe(16)
})
