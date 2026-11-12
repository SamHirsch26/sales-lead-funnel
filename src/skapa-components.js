/**
 * Skapa Web Components Library
 * Custom HTML elements following the Skapa Design System
 * 
 * Usage:
 * - Temperature Badge: <skapa-badge temperature="hot">Hot</skapa-badge>
 * - Document Chip: <skapa-chip>Kitchen Layout</skapa-chip>
 * - Button: <skapa-button variant="primary">Click me</skapa-button>
 */

// ===== TEMPERATURE BADGE COMPONENT =====
class SkapaBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const temperature = this.getAttribute('temperature') || 'cool';
    const colors = {
      hot: { bg: '#fee2e2', text: '#dc2626' },
      warm: { bg: '#fef3c7', text: '#d97706' },
      cool: { bg: '#e8f0ff', text: '#0051ba' },
    };

    const color = colors[temperature];
    const label = this.textContent || temperature.charAt(0).toUpperCase() + temperature.slice(1);

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --skapa-badge-bg: ${color.bg};
          --skapa-badge-text: ${color.text};
        }
        .badge {
          display: inline-block;
          padding: 4px 10px;
          background: var(--skapa-badge-bg);
          color: var(--skapa-badge-text);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          white-space: nowrap;
        }
      </style>
      <div class="badge">${label}</div>
    `;
  }
}

customElements.define('skapa-badge', SkapaBadge);

// ===== DOCUMENT CHIP COMPONENT =====
class SkapaChip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', () => this.handleClick());
  }

  render() {
    const label = this.textContent || 'Document';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
        }
        .chip {
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
          font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 500;
        }
        .chip:hover {
          border-color: #7a7a7a;
          background: #d9d9d9;
          transform: translateY(-1px);
        }
      </style>
      <div class="chip" title="Click to download">
        <span>${label}</span>
      </div>
    `;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('chip-click', { bubbles: true }));
  }
}

customElements.define('skapa-chip', SkapaChip);

// ===== BUTTON COMPONENT =====
class SkapaButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('button').addEventListener('click', (e) => {
      this.dispatchEvent(new CustomEvent('skapa-click', { bubbles: true, detail: e }));
    });
  }

  render() {
    const variant = this.getAttribute('variant') || 'primary';
    const disabled = this.hasAttribute('disabled');
    const label = this.textContent || 'Button';

    const variantStyles = {
      primary: `
        background: #0051ba;
        color: white;
        border: none;
      `,
      secondary: `
        background: transparent;
        color: #0051ba;
        border: 1px solid #0051ba;
      `,
    };

    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 10px 16px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          ${variantStyles[variant]}
        }
        button:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 81, 186, 0.3);
        }
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      </style>
      <button ${disabled ? 'disabled' : ''}>${label}</button>
    `;
  }
}

customElements.define('skapa-button', SkapaButton);

// ===== CARD COMPONENT =====
class SkapaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .card {
          background: white;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
        }
      </style>
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('skapa-card', SkapaCard);

// ===== BADGE GROUP (for temperature/status group) =====
class SkapaBadgeGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('skapa-badge-group', SkapaBadgeGroup);

// ===== CHIP GROUP (for document list) =====
class SkapaChipGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('skapa-chip-group', SkapaChipGroup);

console.log('✓ Skapa Web Components loaded');
