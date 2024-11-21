module.exports = {
    preset: 'ts-jest', // Only needed if you're using TypeScript
    testEnvironment: 'jsdom', // Jest runs tests in a simulated browser environment
  
    // Handling imports of CSS modules
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy', // Mocks CSS modules for Jest tests
      '\\.module\\.css$': 'identity-obj-proxy', // Handle .module.css imports
    },
  
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest to transform TypeScript files
      '^.+\\.jsx?$': 'babel-jest',  // Use Babel to transform JS/JSX files
    },
  
    // Optional: If you have special handling for static assets (e.g., images, SVGs)
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  
    // If you need to ignore specific files or folders
    transformIgnorePatterns: ['/node_modules/'],
  };
  