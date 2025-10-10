import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fps: number
  frameTime: number
  memoryUsage?: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    frameTime: 0
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number

    const measurePerformance = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        const frameTime = (currentTime - lastTime) / frameCount
        
        setMetrics({
          fps,
          frameTime: Math.round(frameTime * 100) / 100,
          memoryUsage: (performance as { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize
        })
        
        frameCount = 0
        lastTime = currentTime
      }
      
      animationId = requestAnimationFrame(measurePerformance)
    }

    animationId = requestAnimationFrame(measurePerformance)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Only show in development
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-3 rounded-lg text-xs font-mono">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Performance</span>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>FPS:</span>
            <span className={metrics.fps >= 55 ? 'text-green-400' : metrics.fps >= 30 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.fps}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Frame Time:</span>
            <span className={metrics.frameTime <= 16.67 ? 'text-green-400' : metrics.frameTime <= 33.33 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.frameTime}ms
            </span>
          </div>
          {metrics.memoryUsage && (
            <div className="flex justify-between">
              <span>Memory:</span>
              <span className="text-blue-400">
                {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PerformanceMonitor
