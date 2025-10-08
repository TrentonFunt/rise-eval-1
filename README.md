# Form&Fun Studio - Pixel Perfect Clone

A pixel-perfect recreation of the Form&Fun Studio website built with React, TypeScript, and Vite.

## 🎯 Project Overview

This project aims to create an exact clone of the Form&Fun Studio homepage with:
- **Pixel-perfect UI recreation** - Matching typography, colors, spacing, and layout
- **Smooth animations** - Framer Motion powered micro-interactions
- **Responsive design** - Mobile-first approach with Tailwind CSS
- **Modern tech stack** - React 19, TypeScript, Vite, Tailwind CSS v4

## 🚀 Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Dynamic navigation header with scroll effects
│   ├── Hero.tsx        # Hero section with video background
│   ├── WorkSection.tsx # Video slider and work showcase
│   ├── VideoBlocks.tsx # 4-video grid with hover animations
│   ├── Expertise.tsx   # Capabilities section
│   ├── Awards.tsx      # Awards and recognition
│   ├── TrustedBrands.tsx # Client logos
│   └── Footer.tsx      # Footer with contact info
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and constants
└── data/               # Extracted website data (gitignored)
```

## 🎨 Design System

- **Typography**: 
  - Aeonik font for header navigation
  - Arial font for main headings and work sections
  - Inter font for body text
- **Colors**: Minimal palette with grays and accent colors
- **Spacing**: Consistent spacing scale using Tailwind
- **Animations**: Smooth transitions, scroll-triggered effects, and rising text animations

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 📝 Recent Updates

### Hero Section Implementation ✅
- Updated typography to match Form&Fun branding with Arial font
- Implemented large-scale "Form&Fun" text with proper spacing
- Added Cloudinary video background with autoplay
- Styled CTA button with proper alignment and hover effects
- Enhanced text contrast and readability
- Reduced video section height for better proportions

### Work Section Implementation ✅
- Created video slider with Swiper.js integration
- Added 6 Cloudinary videos with drag functionality
- Implemented "WORK" title and "Selected Work (22-25)" subtitle
- Added moving marquee text with custom animation
- Applied Arial font family throughout the section
- Optimized spacing and responsive design

### Video Blocks Section Implementation ✅
- Created 4-video grid with alternating wide/narrow layout
- Implemented hover-to-play video functionality
- Added rising text animations for titles and subtitles
- Created responsive grid system for mobile and desktop
- Applied conditional text colors (black/white) based on video content
- Added transparent backgrounds and smooth transitions

### Header Implementation ✅
- Created dynamic header with scroll-based content changes
- Implemented "Creative Technology Studio" at top, then "Form&Fun" + "Creative Technology Studio" on scroll
- Added Aeonik font family for navigation
- Removed "Expertise" from navigation menu
- Applied rising animations matching video blocks style
- Optimized positioning to prevent text clipping
- Reduced header height from 64px to 56px for more compact design

### Expertise Section Implementation ✅
- Implemented Expertise section with Swiper slider for mobile/tablet and 3-column grid for desktop
- Integrated Cloudinary 3D cube videos with hover-to-play functionality
- Applied specific hover effects: video shrinks to 91%, text scales to 91%, block background changes
- Responsive design with navigation dots for mobile/tablet only
- Optimized spacing, typography, and visual elements
- Applied Aeonik font family to all text content
- Increased block heights (500px-700px) and video heights (256px-460px) with responsive scaling
- Enhanced title typography with larger font size (text-5xl) and normal weight
- Improved spacing between video, title, and services for better visual hierarchy
- Full-width video and text content with no left/right padding

## 🎥 Video Integration

The project supports Cloudinary-hosted videos with the following structure:

```tsx
<video
  className="w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  controls={false}
>
  <source src="YOUR_CLOUDINARY_VIDEO_URL" type="video/mp4" />
</video>
```

## 🔄 Git Workflow

- Each section completion is committed with descriptive messages
- README is updated after each major implementation
- Clean commit history maintained for professional workflow

## 📋 Next Steps

- [x] Implement video backgrounds from Cloudinary
- [x] Add Work section with video slider and marquee
- [x] Add Video Blocks section with 4-video grid
- [x] Implement scroll-triggered animations
- [x] Add mobile responsiveness testing
- [ ] Complete remaining sections (Expertise, Awards, Trusted Brands)
- [ ] Performance optimization
- [ ] Final pixel-perfect adjustments

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
