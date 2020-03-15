module.exports = {
  ...require('./test/jest.common'),
  displayName: 'test',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/test/jest-preprocess.js'
  },
  moduleNameMapper: {
    '.+\\.(css)$': '<rootDir>/__mocks__/file-mock.js',
    '^(typeface)-[a-zA-Z-]+$': '<rootDir>/__mocks__/file-mock.js',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js'
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: ''
  },
  setupFiles: ['<rootDir>/test/loadershim.js'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-styled-components'
  ],
  projects: ['<rootDir>', '<rootDir>/test/jest.lint.js']
}
