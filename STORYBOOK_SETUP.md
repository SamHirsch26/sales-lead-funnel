# Storybook Setup - Skapa Design System

This project uses **Storybook** to document and showcase the **Skapa Design System** components used in the Customer Lead Funnel prototype.

## Getting Started

### Start Storybook in Development Mode

```bash
npm run storybook
```

This will start the Storybook development server at **http://localhost:6006**

### Build Storybook for Production

```bash
npm run build-storybook
```

This generates a static build in the `storybook-static` directory.

## Project Structure

```
.storybook/
├── main.js          # Storybook configuration
└── preview.js       # Global Storybook settings

src/
└── stories/
    ├── 00-Introduction.stories.jsx       # Skapa design system overview
    ├── TemperatureBadge.stories.js       # Temperature badge component
    ├── DocumentChip.stories.js           # Document chip component
    └── JourneyVisualization.stories.js   # Journey visualization component
```

## About Skapa Web Components

Skapa is IKEA's web design system built with Custom HTML Elements (Web Components). Key features:

- **Custom Elements API** for compatibility across modern projects
- **Shadow DOM** for scoped styles and cleaner DOM
- **Performance** optimized with lower memory footprint
- **Typography** using Noto Sans font family
- **Consistent Design Tokens** (colors, spacing, typography)

### Component Prefix

Components use the `skapa-` prefix by default:
```html
<skapa-button>Click me</skapa-button>
```

### Important Notes

- Early stage, not yet production-ready
- No IDE intellisense support yet (planned for 2023)
- Not SSR ready
- For plain JavaScript, no special setup required (just HTML/CSS)

## Design Tokens Used

### Colors
- **Primary Blue**: `#0051ba` - IKEA blue
- **Success Green**: `#00a870` - Positive actions
- **Neutral 100**: `#f5f5f5` - Light backgrounds
- **Neutral 900**: `#1a1a1a` - Text/dark elements

### Typography
- **Font Family**: Noto Sans (weights: 400, 500, 600, 700)
- **Sizes**: 13px (sm), 14px (base), 16px (lg), 20px (xl), 28px (2xl)

### Spacing (8px base unit)
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- 2xl: 32px

## Documentation

For more information about Skapa Web Components, visit:
- [Skapa Documentation Hub](https://skapa.ikea.net/)
- [Skapa Developer Slack](slack://channel/dp-design-system-dev)

## Next Steps

1. **Run Storybook**: `npm run storybook`
2. **View Component Stories**: Navigate to http://localhost:6006
3. **Explore Docs Panel**: Click "Docs" tab for detailed component documentation
4. **Add New Components**: Create new `.stories.js` files in `src/stories/`
