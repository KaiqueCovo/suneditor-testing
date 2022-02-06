import type { Config } from '@jest/types'

export default {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '\\.(s?css|less)': 'identity-obj-proxy',
  },
} as Config.InitialOptions