/**
 * Skapa Card Component Stories
 */

import '../skapa-components.js';

export default {
  title: 'Web Components / Card',
  parameters: {
    docs: {
      description: {
        component: 'Custom HTML element for card containers with shadow and styling',
      },
    },
  },
};

export const Default = () => `
  <skapa-card>
    <h3>Card Title</h3>
    <p>This is a card component with default styling and shadow.</p>
  </skapa-card>
`;

export const WithContent = () => `
  <skapa-card>
    <h2>Customer: John Smith</h2>
    <p><strong>Lead Score:</strong> 92/100</p>
    <p><strong>Status:</strong> <skapa-badge temperature="hot">Hot</skapa-badge></p>
  </skapa-card>
`;
