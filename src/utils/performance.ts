// Performance optimization utilities for smooth 60fps animations

export const smoothEasing = [0.25, 0.8, 0.25, 1] as const

export const performanceTransitions = {
  fast: {
    duration: 0.2,
    ease: smoothEasing,
    type: "tween" as const
  },
  medium: {
    duration: 0.4,
    ease: smoothEasing,
    type: "tween" as const
  },
  slow: {
    duration: 0.6,
    ease: smoothEasing,
    type: "tween" as const
  },
  slower: {
    duration: 0.8,
    ease: smoothEasing,
    type: "tween" as const
  }
}

export const optimizedVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }
}

// CSS classes for hardware acceleration
export const performanceClasses = {
  gpuAccelerated: 'fps-optimized',
  smoothTransform: 'smooth-transform',
  smoothOpacity: 'smooth-opacity',
  smoothScale: 'smooth-scale',
  videoContainer: 'video-container',
  textOptimized: 'text-optimized'
}

// Video optimization settings
export const videoOptimizations = {
  style: {
    transform: 'translateZ(0)',
    WebkitTransform: 'translateZ(0)',
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden'
  }
}

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}

// Debounce function for performance
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = window.setTimeout(() => func(...args), wait)
  }
}

// Throttle function for performance
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}
