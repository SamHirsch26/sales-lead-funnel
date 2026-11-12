/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
