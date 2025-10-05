// Navigation types
export interface NavigationItem {
  name: string
  href: string
}

// Project types
export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

// Video types
export interface VideoItem {
  id: number
  title: string
  description: string
  videoUrl: string
  thumbnail: string
}

// Skill types
export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

// Service types
export interface Service {
  title: string
  description: string
  features: string[]
}

// Award types
export interface Award {
  year: string
  title: string
  category: string
  project: string
  description: string
}

export interface Stat {
  number: string
  label: string
}

// Brand types
export interface Brand {
  name: string
  logo: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

// Component prop types
export interface HeaderProps {
  className?: string
}

export interface HeroProps {
  className?: string
}

export interface StudioSectionProps {
  className?: string
}

export interface VideoSliderProps {
  className?: string
}

export interface WorkMarqueeProps {
  className?: string
}

export interface PortfolioProps {
  className?: string
}

export interface ExpertiseProps {
  className?: string
}

export interface AwardsProps {
  className?: string
}

export interface TrustedBrandsProps {
  className?: string
}

export interface FooterProps {
  className?: string
}

// Animation variants
export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      staggerChildren?: number
      ease?: string | number[]
    }
  }
}

// Error boundary types
export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

export interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>
}
