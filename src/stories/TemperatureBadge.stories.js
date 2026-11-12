/**
 * Temperature Badge Component
 * 
 * Used to indicate lead temperature (Hot, Warm, Cool)
 */

export default {
  title: 'Components / Temperature Badge',
  parameters: {
    docs: {
      description: {
        component: 'Badge component for indicating lead temperature in the sales funnel.',
      },
    },
  },
  argTypes: {
    temperature: {
      control: 'select',
      options: ['hot', 'warm', 'cool'],
      description: 'The temperature level of the lead',
    },
    label: {
      control: 'text',
      description: 'The badge label text',
    },
  },
};

const Template = ({ temperature = 'hot', label = 'Hot' }) => {
  const colors = {
    hot: { bg: '#fee2e2', text: '#dc2626' },
    warm: { bg: '#fef3c7', text: '#d97706' },
    cool: { bg: '#e8f0ff', text: '#0051ba' },
  };

  const color = colors[temperature];

  return `
    <div style="
      display: inline-block;
      padding: 4px 10px;
      background: ${color.bg};
      color: ${color.text};
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      font-family: 'Noto Sans', sans-serif;
    ">
      ${label}
    </div>
  `;
};

export const Hot = Template.bind({});
Hot.args = {
  temperature: 'hot',
  label: 'Hot',
};

export const Warm = Template.bind({});
Warm.args = {
  temperature: 'warm',
  label: 'Warm',
};

export const Cool = Template.bind({});
Cool.args = {
  temperature: 'cool',
  label: 'Cool',
};

export const AllVariants = () => `
  <div style="display: flex; gap: 12px; font-family: 'Noto Sans', sans-serif;">
    <div style="display: inline-block; padding: 4px 10px; background: #fee2e2; color: #dc2626; border-radius: 12px; font-size: 12px; font-weight: 600;">Hot</div>
    <div style="display: inline-block; padding: 4px 10px; background: #fef3c7; color: #d97706; border-radius: 12px; font-size: 12px; font-weight: 600;">Warm</div>
    <div style="display: inline-block; padding: 4px 10px; background: #e8f0ff; color: #0051ba; border-radius: 12px; font-size: 12px; font-weight: 600;">Cool</div>
  </div>
`;
