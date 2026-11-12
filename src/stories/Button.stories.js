/**
 * Skapa Button Component Stories
 */

import '../skapa-components.js';

export default {
  title: 'Web Components / Button',
  parameters: {
    docs: {
      description: {
        component: 'Custom HTML element for interactive buttons with variants',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

const Template = ({ variant = 'primary', disabled = false }) => {
  return `<skapa-button variant="${variant}" ${disabled ? 'disabled' : ''}>Click me</skapa-button>`;
};

export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary' };

export const Disabled = Template.bind({});
Disabled.args = { variant: 'primary', disabled: true };

export const AllVariants = () => `
  <div style="display: flex; gap: 12px; align-items: center;">
    <skapa-button variant="primary">Primary</skapa-button>
    <skapa-button variant="secondary">Secondary</skapa-button>
    <skapa-button variant="primary" disabled>Disabled</skapa-button>
  </div>
`;
