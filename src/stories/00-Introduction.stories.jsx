/**
 * Skapa Design System - Introduction
 * 
 * This Storybook documents the Skapa Web Components and design tokens 
 * used in the Customer Lead Funnel prototype.
 */

export default {
  title: 'Skapa Design System / Introduction',
  parameters: {
    docs: {
      page: () => (
        <div style={{ fontFamily: "'Noto Sans', sans-serif", padding: '24px' }}>
          <h1>Skapa Design System</h1>
          <p>
            The Skapa Design System is IKEA's web design system, built with Web Components.
          </p>
          
          <h2>Key Features</h2>
          <ul>
            <li><strong>Custom HTML Elements:</strong> Uses the Custom Elements API for compatibility</li>
            <li><strong>Shadow DOM:</strong> Scoped styles and DOM for cleaner applications</li>
            <li><strong>Performance:</strong> Lower computation and memory demands</li>
            <li><strong>Typography:</strong> Noto Sans as the primary font</li>
          </ul>

          <h2>Skapa Design Tokens</h2>
          <p>This prototype uses the following design tokens:</p>
          
          <h3>Colors</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
            <div>
              <div style={{ background: '#0051ba', width: '100%', height: '60px', borderRadius: '6px', marginBottom: '8px' }}></div>
              <strong>Primary Blue</strong>
              <br />
              <code>#0051ba</code>
            </div>
            <div>
              <div style={{ background: '#00a870', width: '100%', height: '60px', borderRadius: '6px', marginBottom: '8px' }}></div>
              <strong>Success Green</strong>
              <br />
              <code>#00a870</code>
            </div>
            <div>
              <div style={{ background: '#f5f5f5', width: '100%', height: '60px', borderRadius: '6px', border: '1px solid #d9d9d9', marginBottom: '8px' }}></div>
              <strong>Neutral 100</strong>
              <br />
              <code>#f5f5f5</code>
            </div>
          </div>

          <h2>Typography</h2>
          <p>Font Family: <strong>Noto Sans</strong> (weights: 400, 500, 600, 700)</p>

          <h2>Spacing Scale (8px base unit)</h2>
          <ul>
            <li>xs: 4px</li>
            <li>sm: 8px</li>
            <li>md: 12px</li>
            <li>lg: 16px</li>
            <li>xl: 24px</li>
            <li>2xl: 32px</li>
          </ul>

          <h2>Component Prefix</h2>
          <p>Web Components use the <code>skapa-</code> prefix by default (e.g., <code>&lt;skapa-button&gt;</code>)</p>

          <h2>Documentation</h2>
          <p>
            For more information about Skapa Web Components, visit the 
            <a href="https://skapa.ikea.net/" target="_blank" rel="noopener noreferrer">Skapa documentation hub</a>
          </p>
        </div>
      ),
    },
  },
};

export const Overview = () => '';
