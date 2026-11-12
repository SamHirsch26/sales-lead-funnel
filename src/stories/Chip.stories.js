/**
 * Skapa Chip Component Stories
 */

import '../skapa-components.js';

export default {
  title: 'Web Components / Chip',
  parameters: {
    docs: {
      description: {
        component: 'Custom HTML element for displaying document chips (attachments)',
      },
    },
  },
};

const Template = ({ label = 'Kitchen Layout' }) => {
  return `<skapa-chip>${label}</skapa-chip>`;
};

export const Default = Template.bind({});
Default.args = { label: 'Kitchen Layout Option A' };

export const ChipGroup = () => `
  <skapa-chip-group>
    <skapa-chip>Kitchen Layout Option A</skapa-chip>
    <skapa-chip>Kitchen Layout Option B</skapa-chip>
    <skapa-chip>Kitchen Measurements</skapa-chip>
    <skapa-chip>Quote Option A</skapa-chip>
    <skapa-chip>Quote Option B</skapa-chip>
  </skapa-chip-group>
`;
