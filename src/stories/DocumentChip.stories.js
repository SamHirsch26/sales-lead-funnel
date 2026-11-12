/**
 * Document Chip Component
 * 
 * Lightweight chip component for displaying document attachments
 * Similar to email attachment display
 */

export default {
  title: 'Components / Document Chip',
  parameters: {
    docs: {
      description: {
        component: 'Chip component for displaying shared documents as clickable attachments.',
      },
    },
  },
  argTypes: {
    documentName: {
      control: 'text',
      description: 'Name of the document',
    },
  },
};

const Template = ({ documentName = 'Kitchen Layout Option A' }) => {
  return `
    <div style="
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: #ebebeb;
      border: 1px solid #d9d9d9;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 13px;
      color: #1a1a1a;
      white-space: nowrap;
      font-family: 'Noto Sans', sans-serif;
      font-weight: 500;
    ">
      ${documentName}
    </div>
  `;
};

export const Default = Template.bind({});
Default.args = {
  documentName: 'Kitchen Layout Option A',
};

export const Examples = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 8px; font-family: 'Noto Sans', sans-serif;">
    <div style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: #ebebeb; border: 1px solid #d9d9d9; border-radius: 16px; cursor: pointer; font-size: 13px; color: #1a1a1a; font-weight: 500;">Kitchen Layout Option A</div>
    <div style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: #ebebeb; border: 1px solid #d9d9d9; border-radius: 16px; cursor: pointer; font-size: 13px; color: #1a1a1a; font-weight: 500;">Kitchen Layout Option B</div>
    <div style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: #ebebeb; border: 1px solid #d9d9d9; border-radius: 16px; cursor: pointer; font-size: 13px; color: #1a1a1a; font-weight: 500;">Kitchen Measurements</div>
    <div style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: #ebebeb; border: 1px solid #d9d9d9; border-radius: 16px; cursor: pointer; font-size: 13px; color: #1a1a1a; font-weight: 500;">Quote Option A</div>
    <div style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: #ebebeb; border: 1px solid #d9d9d9; border-radius: 16px; cursor: pointer; font-size: 13px; color: #1a1a1a; font-weight: 500;">Quote Option B</div>
  </div>
`;
