# ShareHub Design System

## Architecture

Based on **Swiss International Style** design principles from `style.md`.

### File Structure
```
css/
├── vars.css              # Color variables (light/dark themes)
├── vars-tokens.css       # Typography, spacing, radius tokens
├── base.css             # Reset, body, fonts (Inter)
├── layout.css           # Navigation, main layout
├── components.css        # Cards, pagination, buttons
├── content.css           # Markdown content styles
├── toc.css              # Table of contents
├── responsive.css       # Mobile breakpoints
├── styles.css          # Entry point (@import only)
└── bundle.css          # Production build (watch mode generated)
```

### Build System

**Development Mode (Watch)**
```bash
npm run dev
```
- Monitors `css/*.css` for changes
- Auto-rebuilds `css/bundle.css`

**Manual Build**
```bash
npm run build:css
```

### Design Tokens

#### Colors
- `--color-surface-base`: Page background (#ffffff)
- `--color-surface-muted`: Secondary background (#f4f4f4)
- `--color-text-primary`: Headings, titles (#000000)
- `--color-text-body`: Body text (#333333)
- `--color-text-meta`: Captions, metadata (#666666)
- `--color-border-strong`: Dividers (#000000)
- `--color-accent-primary`: Links, buttons (#3b82f6)

#### Typography
- Font: **Inter** (Google Fonts)
- Base Size: 16px
- Line Height: 1.5 (4px Grid)

#### Spacing (8-point Grid)
- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 32px
- `--space-6`: 64px
- `--space-8`: 80px

#### Border Radius (Sharp Design)
- `--radius-none`: 0px (primary)
- `--radius-sm`: 4px
- `--radius-md`: 8px
- `--radius-lg`: 12px

### Key Design Decisions

1. **Sharp Edges**: `border-radius: 0px` for cards, buttons (per style.md)
2. **Monochrome**: Colors kept to black/white/grayscale with blue accent
3. **4px Grid**: Vertical rhythm based on 4px multiples
4. **8px Spacing**: Horizontal/vertical spacing on 8px grid
5. **Aspect Ratio**: 3:2 for card thumbnails
6. **Hover Effect**: Opacity 0.8 (no transform/shadow)

### Responsive Breakpoints

- Desktop: `> 768px` (Default)
- Mobile: `≤ 768px` (Single column, collapsible TOC)

### Dark Mode

All colors support dark mode via `body.theme-dark` override.

Use variables instead of hardcoded values for automatic theme support.
