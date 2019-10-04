module.exports = {
  setupFilesAfterEnv: [
    './src/setupTests.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  coveragePathIgnorePatterns: [
  ],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  modulePathIgnorePatterns: ['<rootDir>/cypress'],
};