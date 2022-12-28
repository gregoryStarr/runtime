// module.exports = {
//     roots: ['<rootDir>'],
//     testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
//     testPathIgnorePatterns: ['\\\\node_modules\\\\'],
//     transformIgnorePatterns: ['<rootDir>/node_modules/'],
//     transform: {
//       '^.+\\.jsx?$': 'babel-jest',
//     },
//   };

module.exports = async () => {
  return {
    verbose: true,
  };
};
