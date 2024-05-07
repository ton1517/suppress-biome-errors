import { join } from 'node:path'
import { expect, test } from '@jest/globals'
import { sync } from 'cross-spawn'

test('runs without errors', () => {
  const result = sync(
    'node',
    [
      join(__dirname, '..', 'bin', 'index.mjs'),
      '-d',
      '--extensions=js,ts',
      '--parser=ts',
      './transforms/',
    ],
    {
      stdio: 'inherit',
    },
  )

  expect(result.status).toBe(0)
})
