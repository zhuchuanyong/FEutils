module.exports = {
//   preset: "ts-jest",
  // transform: {}
  // "testEnvironment": "node",
  // "collectCoverage": true,
//   transform: {
    // 将.js后缀的文件使用babel-jest处理
    // "^.+\\.js$": "babel-jest",
    // "^.+\\.(ts|tsx)$": "ts-jest",
    // "^.+\\.(js|jsx)$": "babel-jest"
//   },
//   moduleNameMapper: {
//     "^@/(.*)": "<rootDir>/src/$1"
//   }
  // 下面非要从重要, 将不忽略 lodash-es, other-es-lib 这些es库, 从而使babel-jest去处理它们
  // transformIgnorePatterns: ["<rootDir>/node_modules/(?!(lodash-es|other-es-lib))"]
  //   transformIgnorePatterns: ["node_modules/(?!(lodash-es)/)"]
  //   transformIgnorePatterns: [
  //     "node_modules/(?!(lodash-es|my-project|react-native-button)/)"
  //   ]
};
