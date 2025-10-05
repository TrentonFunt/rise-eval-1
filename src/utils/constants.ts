// Animation constants
export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.6,
  VERY_SLOW: 1.0
} as const

export const ANIMATION_EASING = {
  EASE_OUT: 'ease-out',
  EASE_IN: 'ease-in',
  EASE_IN_OUT: 'ease-in-out',
  CUBIC_BEZIER: [0.25, 0.1, 0.25, 1] as const
} as const

// Breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
} as const

// Z-index values
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070
} as const

// Scroll thresholds
export const SCROLL_THRESHOLDS = {
  HEADER: 50,
  PARALLAX: 100
} as const

// Studio information
export const STUDIO_INFO = {
  NAME: "Form+Fun",
  EMAIL: "hello@formandfun.co",
  PHONE: "+1 (555) 123-4567",
  LOCATION: "New York, NY"
} as const
