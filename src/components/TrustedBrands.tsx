import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const TrustedBrands = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredSlider, setHoveredSlider] = useState<number | null>(null)

  // Brand data for each slider - each slider has 2 brands (8 brands total)
  
  const brandSliders = [
    [
      { 
        name: "Powerade", 
        logo: "Powerade",
        svg: "/brands/brand1.svg", // Default SVG
        svgHover: "/brands/brand1-hover.svg", // Colored hover SVG
        hoverColor: "#FF6B35" // Powerade orange
      },
      { 
        name: "Spotify", 
        logo: "Spotify",
        svg: "/brands/brand2.svg",
        svgHover: "/brands/brand2-hover.svg",
        hoverColor: "#1DB954" // Spotify green
      }
    ],
    [
      { 
        name: "DoorDash", 
        logo: "DoorDash",
        svg: "/brands/brand3.svg",
        svgHover: "/brands/brand3-hover.svg",
        hoverColor: "#FF3008" // DoorDash red
      },
      { 
        name: "Oreo", 
        logo: "Oreo",
        svg: "/brands/brand4.svg",
        svgHover: "/brands/brand4-hover.svg",
        hoverColor: "#000000" // Oreo black
      }
    ],
    [
      { 
        name: "Ogilvy", 
        logo: "Ogilvy",
        svg: "/brands/brand5.svg",
        svgHover: "/brands/brand5-hover.svg",
        hoverColor: "#C8102E" // Ogilvy red
      },
      { 
        name: "Google", 
        logo: "Google",
        svg: "/brands/brand6.svg",
        svgHover: "/brands/brand6-hover.svg",
        hoverColor: "#4285F4" // Google blue
      }
    ],
    [
      { 
        name: "Saatchi & Saatchi", 
        logo: "Saatchi & Saatchi",
        svg: "/brands/brand8.svg",
        svgHover: "/brands/brand8-hover.svg",
        hoverColor: "#FF6B00" // Saatchi orange
      },
      { 
        name: "Coca-Cola", 
        logo: "Coca-Cola",
        svg: "/brands/brand7.svg",
        svgHover: "/brands/brand7-hover.svg",
        hoverColor: "#F40009" // Coca-Cola red
      }
    ]
  ]

  // Auto-rotate through slides every 3 seconds (only when not hovering)
  useEffect(() => {
    if (hoveredSlider === null) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 2)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [hoveredSlider])

  return (
    <section className="relative bg-white py-12" style={{ fontFamily: 'Aeonik, sans-serif' }}>
      <div className="w-full px-2 sm:px-3 md:px-4">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tighter">
            Trusted by the world's leading brands.
          </h2>
        </motion.div>

        {/* Brand Sliders */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {brandSliders.map((slider, sliderIndex) => {
            const currentBrand = slider[currentSlide];
            const hoverColor = currentBrand?.hoverColor || '#f3f4f6';
            
            return (
            <motion.div
              key={sliderIndex}
              className="relative h-56 rounded-lg overflow-hidden cursor-pointer group transition-colors duration-300"
              style={{
                backgroundColor: hoveredSlider === sliderIndex ? hoverColor : '#f3f4f6'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + sliderIndex * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSlider(sliderIndex)}
              onMouseLeave={() => setHoveredSlider(null)}
            >
              {/* Vertical Slider Container */}
              <div 
                className="flex flex-col h-full transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateY(-${currentSlide * 100}%)`
                }}
              >
                {slider.map((brand, brandIndex) => (
                  <div
                    key={brandIndex}
                    className="h-56 flex items-center justify-center flex-shrink-0 relative"
                  >
                    {/* Default SVG */}
                    <motion.img
                      src={brand.svg}
                      alt={brand.name}
                      className="h-12 w-auto"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ 
                        scale: hoveredSlider === sliderIndex ? 0.9 : 1,
                        opacity: hoveredSlider === sliderIndex ? 0 : 1
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.25, 0.8, 0.25, 1]
                      }}
                    />
                    
                    {/* Colored Hover SVG */}
                    <motion.img
                      src={brand.svgHover}
                      alt={brand.name}
                      className="h-12 w-auto absolute inset-0 m-auto"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ 
                        scale: hoveredSlider === sliderIndex ? 1 : 0.9,
                        opacity: hoveredSlider === sliderIndex ? 1 : 0
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.25, 0.8, 0.25, 1]
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBrands
