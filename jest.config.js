module.exports = {
  cacheDirectory: "<rootDir>/.jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["jest-extended", "jest-remirror/environment", "./jest.setup.js"],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jsdom", // Required for dom manipulation
}
