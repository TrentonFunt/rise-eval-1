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
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with video background
│   ├── StudioSection.tsx # Studio introduction
│   ├── VideoSlider.tsx # Horizontal video showcase
│   ├── Portfolio.tsx   # Work showcase
│   ├── Expertise.tsx   # Capabilities section
│   ├── Awards.tsx      # Awards and recognition
│   ├── TrustedBrands.tsx # Client logos
│   └── Footer.tsx      # Footer with contact info
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and constants
└── data/               # Extracted website data
```

## 🎨 Design System

- **Typography**: Inter font family with custom weights
- **Colors**: Minimal palette with grays and accent colors
- **Spacing**: Consistent spacing scale using Tailwind
- **Animations**: Smooth transitions and scroll-triggered effects

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
- Updated typography to match Form&Fun branding
- Implemented large-scale "Form&Fun" text with proper spacing
- Added video background placeholder
- Styled CTA button with white background
- Enhanced text contrast and readability

### Studio Section Implementation ✅
- Created "The studio" section with centered content
- Added studio description text
- Implemented "View our work" CTA button
- Applied proper spacing and typography

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

- [ ] Implement video backgrounds from Cloudinary
- [ ] Add remaining sections (Work, Expertise, Awards, etc.)
- [ ] Implement scroll-triggered animations
- [ ] Add mobile responsiveness testing
- [ ] Performance optimization

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
