import type { Config } from 'jest';

import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'node',
  rootDir: __dirname,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  setupFiles: ['<rootDir>/jest.polyfills.ts'],
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};

export default createJestConfig(config);
