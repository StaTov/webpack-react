
const config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};

module.exports = config;