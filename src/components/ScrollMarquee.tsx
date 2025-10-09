import { useEffect, useRef, useState } from 'react'

const ScrollMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
    }

    // Add scroll listener immediately
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Also call it once to set initial value
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Calculate transform based on scroll position
  const baseOffset = 0 // Start from center
  const scrollOffset = scrollY * -0.3 // Movement based on scroll (reversed direction)
  const translateX = baseOffset + scrollOffset

  const marqueeItems = [
    { content: 'Form&Fun™', className: 'text-5xl md:text-6xl lg:text-7xl font-bold', isStacked: false, isSvg: true },
    { content: 'Creative Technology Studio', className: 'text-xs md:text-sm font-normal', isStacked: true, customSize: 'lg:text-[10px]' },
    { content: 'Form&Fun™', className: 'text-5xl md:text-6xl lg:text-7xl font-bold', isStacked: false, isSvg: true },
    { content: 'Creative Technology Studio', className: 'text-xs md:text-sm font-normal', isStacked: true, customSize: 'lg:text-[10px]' },
    { content: 'Form&Fun™', className: 'text-5xl md:text-6xl lg:text-7xl font-bold', isStacked: false, isSvg: true },
    { content: 'Creative Technology Studio', className: 'text-xs md:text-sm font-normal', isStacked: true, customSize: 'lg:text-[10px]' },
    { content: 'Form&Fun™', className: 'text-5xl md:text-6xl lg:text-7xl font-bold', isStacked: false, isSvg: true },
    { content: 'Creative Technology Studio', className: 'text-xs md:text-sm font-normal', isStacked: true, customSize: 'lg:text-[10px]' },
  ]

  return (
    <section className="relative bg-white pb-2 overflow-hidden">
      <div className="w-full flex justify-center">
        <div
          ref={marqueeRef}
          className="flex items-center whitespace-nowrap"
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            transform: `translateX(${translateX}px)`,
            willChange: 'transform'
          }}
        >
          {/* First set of items */}
          {marqueeItems.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center mx-8">
              {item.isStacked ? (
                <div className={`text-black ${item.className} ${item.customSize || ''} text-center`}>
                  <div>CREATIVE</div>
                  <div>TECHNOLOGY</div>
                  <div>STUDIO</div>
                </div>
                ) : item.isSvg ? (
                  <img 
                    src="/form-fun-logo.svg"
                    alt="Form&Fun"
                    className="h-32 md:h-40 lg:h-48 w-auto"
                    style={{ 
                      minWidth: '400px', 
                      minHeight: '280px',
                      filter: 'contrast(1.2) brightness(0.8)'
                    }}
                  />
                ) : (
                <span className={`text-black ${item.className}`}>
                  {item.content}
                </span>
              )}
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {marqueeItems.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center mx-8">
              {item.isStacked ? (
                <div className={`text-black ${item.className} ${item.customSize || ''} text-center`}>
                  <div>CREATIVE</div>
                  <div>TECHNOLOGY</div>
                  <div>STUDIO</div>
                </div>
                ) : item.isSvg ? (
                  <img 
                    src="/form-fun-logo.svg"
                    alt="Form&Fun"
                    className="h-32 md:h-40 lg:h-48 w-auto"
                    style={{ 
                      minWidth: '400px', 
                      minHeight: '280px',
                      filter: 'contrast(1.2) brightness(0.8)'
                    }}
                  />
                ) : (
                <span className={`text-black ${item.className}`}>
                  {item.content}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollMarquee