import { useRef, useEffect, useState, forwardRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface LazyVideoProps {
  src: string
  className?: string
  style?: React.CSSProperties
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  preload?: 'none' | 'metadata' | 'auto'
  controls?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onLoad?: () => void
}

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(({
  src,
  className = '',
  style = {},
  muted = true,
  loop = true,
  playsInline = true,
  preload = 'metadata',
  controls = false,
  onMouseEnter,
  onMouseLeave,
  onLoad,
  ...props
}, ref) => {
  const internalVideoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  
  // Use the forwarded ref or fallback to internal ref
  const videoRef = ref || internalVideoRef
  
  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true
  })

  useEffect(() => {
    if (hasIntersected && !shouldLoad) {
      setShouldLoad(true)
    }
  }, [hasIntersected, shouldLoad])

  useEffect(() => {
    if (shouldLoad && videoRef && typeof videoRef === 'object' && videoRef.current && !isLoaded) {
      const video = videoRef.current
      
      const handleLoadedData = () => {
        setIsLoaded(true)
        onLoad?.()
      }

      video.addEventListener('loadeddata', handleLoadedData)
      
      // Force load the video
      video.load()
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData)
      }
    }
  }, [shouldLoad, isLoaded, onLoad, videoRef])

  return (
    <div ref={intersectionRef} className="relative">
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={{
            ...style,
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          controls={controls}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...props}
        />
      ) : (
        <div 
          className={`${className} bg-gray-100 animate-pulse`}
          style={style}
        />
      )}
    </div>
  )
})

LazyVideo.displayName = 'LazyVideo'

export default LazyVideo
