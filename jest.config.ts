import type {Config} from 'jest';

const config: Config = {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/constants/**',
    '!**/types/**',
    '!**/types.{ts, tsx}',
    '!src/index.tsx'
  ],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  "modulePaths": [
  "<rootDir>"
],
  "moduleNameMapper": {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  }
};

export default config;
