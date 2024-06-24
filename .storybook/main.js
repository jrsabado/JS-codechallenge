// .storybook/main.js

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
    '@storybook/preset-create-react-app',
  ],

  webpackFinal: async (config) => {
    // Remove any existing rule for CSS files
    config.module.rules = config.module.rules.filter(rule => !('test.css'.match(rule.test)));

    // Add CSS loaders
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });

    return config;
    
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
  