const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),
  testMatch: ['**/tests/**/*.test.ts', '**/src/**/*.test.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  setupFiles: ['<rootDir>/test/jest.setup.js'],
};
