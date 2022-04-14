module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components",
  ],
  testPathIgnorePatterns: [
    "./node_modules",
    "./android",
    "./ios",
    "/gofinances/node_modules",
    "/gofinances/android",
    "/gofinances/ios",
  ],
};

// "jest": {
//   "preset": "jest-expo",
//   "setupFilesAfterEnv": [
//     "@testing-library/jest-native/extend-expect"
//   ],
//   "testPathIgnorePatterns": [
//     "./node_modules",
//     "./android",
//     "./ios"
//   ]
// },
