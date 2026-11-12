/**
 * Skapa Design System Components
 * Reusable component functions used in both the prototype and Storybook
 */

// ===== TEMPERATURE BADGE =====
export function renderTemperatureBadge(temperature) {
  const label = temperature.charAt(0).toUpperCase() + temperature.slice(1);
  return `<skapa-badge temperature="${temperature}">${label}</skapa-badge>`;
}

// ===== DOCUMENT CHIP =====
export function renderDocumentChip(documentName) {
  return `<skapa-chip>${documentName}</skapa-chip>`;
}

// ===== JOURNEY VISUALIZATION =====
export function renderJourneyVisualization(stages, currentStage, customerName) {
  const stageIndex = stages.findIndex(s => s.id === currentStage);
  const progressPercent = ((stageIndex + 1) / stages.length) * 100;

  let html = `
    <div class="journey-bar">
        <div class="journey-progress" style="width: ${progressPercent}%"></div>
        <div class="journey-marker" style="left: ${progressPercent}%">
            <div class="customer-callout">${customerName}</div>
        </div>
    </div>
    <div class="journey-stages-labels">
  `;

  stages.forEach((stage, index) => {
    const isActive = index === stageIndex;
    html += `<div class="stage-label ${isActive ? 'active' : ''}">${stage.name}</div>`;
  });

  html += `</div>`;

  return html;
}

// ===== INTERACTION ITEM =====
export function renderInteractionItem(interaction) {
  function formatTimeAgo(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);
    const seconds = Math.floor((now - date) / 1000);
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (const [name, secondsInInterval] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInInterval);
      if (interval >= 1) {
        return `${interval}${name.charAt(0)} ago`;
      }
    }
    return 'Just now';
  }

  return `
    <div class="interaction-item">
        <div class="interaction-date">${formatTimeAgo(interaction.occurredAt)}</div>
        <div class="interaction-content">
            <div class="interaction-title">${interaction.title}</div>
            <div class="interaction-summary">${interaction.summary}</div>
            <span class="interaction-channel">${interaction.channel}</span>
        </div>
    </div>
  `;
}

// ===== ACTION CARD =====
export function renderActionCard(action) {
  return `
    <div class="action-card">
        <div class="action-indicator ${action.actionType === 'send_message' ? 'message' : 'call'}">
            ${action.icon}
        </div>
        <div class="action-content">
            <div class="action-title">${action.title}</div>
            <div class="action-rationale">${action.rationale}</div>
            <button class="action-button" data-action-type="${action.actionType}">
                ${action.actionType === 'send_message' ? 'Send Message' : 'Schedule Call'}
            </button>
            <div class="action-placeholder">Placeholder – no action taken</div>
        </div>
    </div>
  `;
}

// ===== CUSTOMER TABLE ROW =====
export function renderCustomerRow(customer, rank) {
  return `
    <tr class="customer-row" data-customer-id="${customer.id}">
        <td class="rank-cell">${rank}</td>
        <td class="name-cell">${customer.name}</td>
        <td class="score-cell">${customer.leadScore}/100</td>
        <td>
            ${renderTemperatureBadge(customer.temperature)}
        </td>
    </tr>
  `;
}

// ===== CUSTOMER HEADER =====
export function renderCustomerHeader(customer) {
  return `
    <div class="customer-name">${customer.name}</div>
    <div class="customer-meta">
        <div class="score-display">Lead Score: <strong>${customer.leadScore}</strong> /100</div>
    </div>
  `;
}
