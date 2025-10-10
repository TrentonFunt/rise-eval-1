import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScrollPosition'
import type { NavigationItem } from '../types'

interface HeaderProps {
  isHeroLoaded: boolean
}

const Header: React.FC<HeaderProps> = ({ isHeroLoaded }) => {
  const { isScrolled } = useScrollPosition(50)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Check if we've scrolled past the hero video (approximately 100vh)
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)
  
  // Update scroll state for hero video
  const { isScrolled: isPastHero } = useScrollPosition(window.innerHeight)
  
  React.useEffect(() => {
    setHasScrolledPastHero(isPastHero)
  }, [isPastHero])

  const navigationItems: NavigationItem[] = [
    { name: 'Work', href: '#work' },
    { name: 'Studio', href: '#studio' },
    { name: 'Contact', href: '#contact' }
  ]

  // Don't render header until hero animation is complete
  if (!isHeroLoaded) {
    return null
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 fps-optimized ${
        isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.8, 0.25, 1], // Custom cubic-bezier for smoother animation
        type: "tween"
      }}
    >
      <div className="w-full px-2 md:px-3 lg:px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <motion.div
            className="flex items-center gpu-hover"
            whileHover={{ scale: 1.05 }}
            transition={{ 
              duration: 0.2, 
              ease: [0.25, 0.8, 0.25, 1],
              type: "tween"
            }}
          >
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
          </motion.div>

          {/* Creative Technology Studio - Shows at top */}
          <div className="flex-1 text-center">
            <div className="overflow-hidden">
              <motion.h1
                className="text-lg font-medium text-black smooth-transform"
                style={{ fontFamily: 'Aeonik, sans-serif' }}
                initial={{ y: "0%", opacity: 1 }}
                animate={{ 
                  y: hasScrolledPastHero ? "100%" : "0%", 
                  opacity: hasScrolledPastHero ? 0 : 1 
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.8, 0.25, 1],
                  type: "tween"
                }}
              >
                Creative Technology Studio
              </motion.h1>
            </div>
          </div>

          {/* Form&Fun - Appears on scroll */}
          <div className="flex-1 text-center">
            <div className="overflow-hidden">
              <motion.h1
                className="text-lg font-medium text-black smooth-transform"
                style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ 
                  y: hasScrolledPastHero ? "0%" : "100%", 
                  opacity: hasScrolledPastHero ? 1 : 0 
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.8, 0.25, 1],
                  type: "tween"
                }}
              >
                Form&Fun
              </motion.h1>
            </div>
          </div>

          {/* Creative Technology Studio - Appears on scroll with Form&Fun */}
          <div className="flex-1 text-center">
            <div className="overflow-hidden">
              <motion.h1
                className="text-lg font-medium text-black"
                style={{ fontFamily: 'Aeonik, sans-serif' }}
                initial={{ y: "100%", opacity: 0, x: "-15%" }}
                animate={{ 
                  y: hasScrolledPastHero ? "0%" : "100%", 
                  opacity: hasScrolledPastHero ? 1 : 0,
                  x: "-15%"
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
              >
                Creative Technology Studio
              </motion.h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
                style={{ fontFamily: 'Aeonik, sans-serif' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.span
                className="w-full h-0.5 bg-black"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-black"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-black"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container py-4">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200"
                  style={{ fontFamily: 'Aeonik, sans-serif' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
