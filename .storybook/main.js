// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
  