/**
 * Skapa Web Components Stories
 * 
 * Demonstrates the actual Web Components used in the Customer Lead Funnel prototype
 */

// Load the web components
import '../skapa-components.js';

export default {
  title: 'Web Components / Badge',
  parameters: {
    docs: {
      description: {
        component: 'Custom HTML element for displaying lead temperature badges (Hot, Warm, Cool)',
      },
    },
  },
  argTypes: {
    temperature: {
      control: 'select',
      options: ['hot', 'warm', 'cool'],
      description: 'Temperature level',
    },
  },
};

const Template = ({ temperature = 'hot' }) => {
  return `<skapa-badge temperature="${temperature}">${temperature.charAt(0).toUpperCase() + temperature.slice(1)}</skapa-badge>`;
};

export const Hot = Template.bind({});
Hot.args = { temperature: 'hot' };

export const Warm = Template.bind({});
Warm.args = { temperature: 'warm' };

export const Cool = Template.bind({});
Cool.args = { temperature: 'cool' };

export const AllVariants = () => `
  <div style="display: flex; gap: 12px; align-items: center;">
    <skapa-badge temperature="hot">Hot</skapa-badge>
    <skapa-badge temperature="warm">Warm</skapa-badge>
    <skapa-badge temperature="cool">Cool</skapa-badge>
  </div>
`;
