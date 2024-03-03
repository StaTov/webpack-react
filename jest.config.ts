import type {Config} from "jest";

const config: Config = {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/constants/**",
    "!**/types/**",
    "!**/types.{ts, tsx}",
    "!src/index.tsx"
  ],
  // TODO раскомментировать для отслеживания процента покрытия.
  //   coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: -2,
  //   },
  // },
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
