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
│   ├── Hero.tsx        # Hero section with Lottie animation
│   ├── WorkSection.tsx # Video slider with custom drag cursor
│   ├── VideoBlocks.tsx # 4-video grid with mobile slider and custom cursors
│   ├── Expertise.tsx   # Capabilities section with hover effects
│   ├── Awards.tsx      # Awards table with mobile slider
│   ├── TrustedBrands.tsx # Client logos with synchronized sliders
│   ├── Footer.tsx      # Footer with Lottie animation
│   ├── LazyVideo.tsx   # Performance-optimized video component
│   └── PerformanceMonitor.tsx # Development performance tracking
├── hooks/              # Custom React hooks
│   └── useIntersectionObserver.ts # Efficient viewport detection
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and constants
│   └── performance.ts  # Performance optimization utilities
└── data/               # Extracted website data (gitignored)

public/
├── cursors/            # Custom cursor SVGs
│   ├── view.svg       # View cursor for video blocks
│   ├── soon.svg       # Soon cursor for coming soon videos
│   └── drag.svg       # Drag cursor for video sliders
└── form-fun-logo.svg  # Static Form&Fun logo
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

### Performance Optimization Implementation ✅
- **60fps Animations**: Hardware acceleration with GPU-optimized CSS classes
- **Lazy Loading**: Intersection Observer-based video loading for better performance
- **Smooth Transitions**: Custom cubic-bezier easing curves for natural motion
- **Memory Management**: Automatic cleanup of unused resources and optimized state management
- **Performance Monitoring**: Real-time FPS tracking and frame time monitoring (development only)

### Mobile Responsiveness Implementation ✅
- **VideoBlocks Mobile Slider**: Horizontal slider with navigation dots for mobile devices
- **Awards Mobile Slider**: Card-based slider with navigation dots for mobile viewing
- **Responsive Breakpoints**: Desktop/tablet layouts preserved, mobile-optimized interactions
- **Touch-Friendly Navigation**: Large tap targets and smooth swipe gestures
- **Progressive Enhancement**: Mobile-first approach with desktop enhancements

### Custom Cursor Implementation ✅
- **Interactive Cursors**: Custom SVG cursors for different video block states
- **WorkSection**: "Drag" cursor for video slider interaction
- **VideoBlocks**: "View" cursor for most videos, "Soon" cursor for Widllet (coming soon)
- **Dark Grey Background**: Professional appearance with excellent contrast
- **Smooth Integration**: Seamless cursor changes on hover with proper fallbacks

### Hero Section Implementation ✅
- **Lottie Animation Integration**: Replaced static SVG with animated Lottie "Form&Fun" logo
- **Seamless Animation Flow**: Hero section starts at full viewport, plays Lottie animation, then shrinks to 60vh
- **Optimized Timing**: Reduced delay between animation completion and section shrink (50ms)
- **Page Load Behavior**: Always starts from hero section on reload with scroll-to-top functionality
- **Typography**: Arial font family for main heading with proper spacing and contrast

### Work Section Implementation ✅
- **Video Slider**: Swiper.js integration with 6 Cloudinary videos and drag functionality
- **Scroll-Based Marquee**: Horizontal marquee with "Form&Fun" SVG and "Creative Technology Studio" text
- **Directional Animation**: Marquee moves left on scroll up, right on scroll down
- **Typography**: Helvetica Neue font family with responsive sizing
- **Optimized Spacing**: Reduced gaps between sections for better visual flow

### Video Blocks Section Implementation ✅
- **4-Video Grid**: Alternating wide/narrow layout with hover-to-play functionality
- **Rising Text Animations**: Titles and subtitles slide up on hover with instant disappear
- **Conditional Styling**: Black text for 2nd/3rd videos, white for 1st/4th videos
- **Hover Effects**: Plus icon with transparent background, video scaling, and smooth transitions
- **Typography**: Arial font family with consistent sizing (14px/20px line height)

### Header Implementation ✅
- **Dynamic Content**: "Creative Technology Studio" at top, "Form&Fun" + "Creative Technology Studio" on scroll
- **Rising Animations**: Smooth slide-up effects matching video blocks style
- **Typography**: Aeonik font for navigation, Arial for "Form&Fun" text
- **Navigation**: Removed "Expertise" menu item, right-aligned remaining items
- **Responsive Design**: Optimized positioning and reduced header height (56px)

### Expertise Section Implementation ✅
- **Interactive Blocks**: 3-column desktop grid with Swiper slider for mobile/tablet
- **Hover Animations**: Video shrinks to 91%, text scales to 91%, background color changes
- **Video Integration**: Cloudinary 3D cube videos with hover-to-play functionality
- **Typography**: Aeonik font family throughout with responsive sizing
- **No Scroll Transitions**: Removed all scroll-triggered animations for immediate content display
- **Responsive Heights**: 500px-700px blocks with 256px-460px videos

### Awards Section Implementation ✅
- **Table Layout**: Sequential numbering with award names, projects, categories, and years
- **Typography**: Arial font for title, Aeonik for content with proper hierarchy
- **Stacked Title**: "AN AWARD" and "WINNING STUDIO" vertically stacked
- **No Scroll Transitions**: Removed all scroll-triggered animations for immediate display
- **Clean Design**: Minimal styling with proper spacing and dividers

### Trusted Brands Section Implementation ✅
- **Synchronized Sliders**: 4 vertical sliders with 2 brands each, auto-rotating
- **Brand-Specific Hover**: Custom hover colors for each brand (Powerade, Spotify, DoorDash, etc.)
- **SVG Integration**: Default and hover SVG states with seamless transitions
- **Hover Effects**: "Spreading out from middle" animation on hover
- **Typography**: Reduced letter spacing and optimized spacing

### Footer Implementation ✅
- **Lottie Animation**: Scroll-triggered "Form&Fun" logo animation with intersection observer
- **Grid Layout**: Studio logo, Menu, Social, Business enquiries, and Join our team sections
- **Typography**: Aeonik font family with proper capitalization and black text
- **Responsive Spacing**: Optimized margins and padding for different screen sizes
- **Animation Sequence**: Nothing → Lottie animation → Static SVG (seamless transition)

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

## ⚡ Performance Optimizations

### Hardware Acceleration
- **GPU Acceleration**: All animations use `transform: translateZ(0)` for hardware rendering
- **CSS Classes**: Pre-built performance classes (`fps-optimized`, `smooth-transform`, `smooth-scale`)
- **Will-Change**: Optimized for transform and opacity changes
- **Backface Visibility**: Hidden to prevent unnecessary rendering

### Lazy Loading
- **Intersection Observer**: Efficient viewport detection with `useIntersectionObserver` hook
- **Progressive Loading**: Components load as they become visible
- **Memory Management**: Automatic cleanup of unused resources

### Animation Optimization
- **Custom Easing**: Cubic-bezier curves `[0.25, 0.8, 0.25, 1]` for smoother animations
- **Frame Rate**: Optimized for 60fps with consistent performance
- **Reduced Motion**: Respects user preferences for accessibility

## 📱 Mobile Responsiveness

### Responsive Breakpoints
- **Mobile (< 640px)**: Touch-optimized sliders with navigation dots
- **Tablet (640px+)**: Original layouts with touch support
- **Desktop (1024px+)**: Full grid and table layouts with hover effects

### Mobile Features
- **VideoBlocks**: Horizontal slider with 4 navigation dots
- **Awards**: Card-based slider with 11 navigation dots
- **Touch Navigation**: Large tap targets and smooth swipe gestures
- **Progressive Enhancement**: Mobile-first approach with desktop enhancements

## 🎯 Custom Cursors

### Interactive Cursors
- **WorkSection**: "Drag" cursor for video slider interaction
- **VideoBlocks**: "View" cursor for most videos, "Soon" cursor for Widllet
- **Dark Grey Background**: Professional appearance with excellent contrast
- **Smooth Integration**: Seamless cursor changes on hover with proper fallbacks

### Cursor Implementation
```css
.cursor-view { cursor: url('/cursors/view.svg') 16 6, auto; }
.cursor-soon { cursor: url('/cursors/soon.svg') 16 6, auto; }
.cursor-drag { cursor: url('/cursors/drag.svg') 16 6, auto; }
```

## 🔄 Git Workflow

- Each section completion is committed with descriptive messages
- README is updated after each major implementation
- Clean commit history maintained for professional workflow

## 📋 Project Status

### ✅ Completed Sections
- [x] **Hero Section** - Lottie animation integration with seamless transitions
- [x] **Header** - Dynamic navigation with scroll-based content changes
- [x] **Work Section** - Video slider with Swiper.js and scroll-based marquee
- [x] **Video Blocks** - 4-video grid with hover animations and rising text effects
- [x] **Scroll Marquee** - Horizontal marquee with directional scroll animation
- [x] **Expertise Section** - Interactive blocks with hover effects and video integration
- [x] **Awards Section** - Table layout with sequential numbering and clean typography
- [x] **Trusted Brands** - Synchronized sliders with brand-specific hover effects
- [x] **Footer** - Lottie animation with intersection observer and responsive layout

### 🎯 Key Features Implemented
- [x] **Lottie Animations** - Hero and footer sections with seamless transitions
- [x] **Scroll-Based Effects** - Dynamic header, marquee, and footer animations
- [x] **Hover Interactions** - Video blocks, expertise blocks, and brand sliders
- [x] **Responsive Design** - Mobile-first approach with Tailwind CSS
- [x] **Typography System** - Aeonik, Arial, and Helvetica Neue font families
- [x] **Video Integration** - Cloudinary-hosted videos with autoplay and hover controls
- [x] **Performance Optimization** - 60fps animations, lazy loading, and hardware acceleration
- [x] **Mobile Responsiveness** - Touch-friendly sliders with navigation dots
- [x] **Custom Cursors** - Interactive SVG cursors for enhanced user experience
- [x] **Performance Monitoring** - Real-time FPS tracking and optimization tools

### 🚀 Ready for Production
The website is now feature-complete with all major sections implemented, including:
- Smooth animations and transitions
- Responsive design across all devices
- Interactive hover effects and scroll-based animations
- Professional typography and spacing
- Optimized performance and clean code structure

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
