/**
 * Journey Visualization Component
 * 
 * Displays the customer's progress through the three-stage sales funnel:
 * Exploration & Inspiration → Choosing → Committing
 */

export default {
  title: 'Components / Journey Visualization',
  parameters: {
    docs: {
      description: {
        component: 'Visualization component showing customer progress through the sales funnel stages.',
      },
    },
  },
  argTypes: {
    currentStage: {
      control: 'select',
      options: ['exploration', 'choosing', 'committing'],
      description: 'Current stage in the customer journey',
    },
    customerName: {
      control: 'text',
      description: 'Name of the customer',
    },
  },
};

const Template = ({ currentStage = 'choosing', customerName = 'John Smith' }) => {
  const stages = ['exploration', 'choosing', 'committing'];
  const stageIndex = stages.indexOf(currentStage);
  const progressPercent = ((stageIndex + 1) / stages.length) * 100;

  const stageLabels = {
    exploration: 'Exploration & Inspiration',
    choosing: 'Choosing',
    committing: 'Committing',
  };

  return `
    <div style="
      position: relative;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 24px;
      font-family: 'Noto Sans', sans-serif;
    ">
      <div style="
        position: relative;
        height: 8px;
        background: #ebebeb;
        border-radius: 4px;
        overflow: visible;
      ">
        <div style="
          position: absolute;
          height: 100%;
          background: #00a870;
          border-radius: 4px;
          top: 0;
          left: 0;
          width: ${progressPercent}%;
          transition: width 0.3s ease;
        "></div>
        <div style="
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          left: ${progressPercent}%;
          width: 16px;
          height: 16px;
          background: #0051ba;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 0 0 2px #0051ba;
          z-index: 2;
        ">
          <div style="
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: #0051ba;
            color: white;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            white-space: nowrap;
            margin-bottom: 12px;
            z-index: 10;
            box-shadow: 0 2px 8px rgba(0, 81, 186, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            ${customerName}
            <div style="
              content: '';
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-top: 5px solid #0051ba;
            "></div>
          </div>
        </div>
      </div>
      <div style="
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        position: relative;
        z-index: 1;
      ">
        ${Object.keys(stageLabels).map((stage, index) => `
          <div style="
            flex: 1;
            text-align: center;
            font-size: 13px;
            font-weight: 600;
            color: ${index === stageIndex ? '#0051ba' : '#7a7a7a'};
          ">
            ${stageLabels[stage]}
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

export const Exploration = Template.bind({});
Exploration.args = {
  currentStage: 'exploration',
  customerName: 'Jane Doe',
};

export const Choosing = Template.bind({});
Choosing.args = {
  currentStage: 'choosing',
  customerName: 'John Smith',
};

export const Committing = Template.bind({});
Committing.args = {
  currentStage: 'committing',
  customerName: 'Alice Johnson',
};
