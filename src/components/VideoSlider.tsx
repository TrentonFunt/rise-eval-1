import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const VideoSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  const videos = [
    {
      id: 1,
      title: "Brand Identity",
      description: "Creating memorable visual identities",
      videoUrl: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/800/600"
    },
    {
      id: 2,
      title: "Digital Experience",
      description: "Crafting immersive digital journeys",
      videoUrl: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/800/600"
    },
    {
      id: 3,
      title: "Motion Graphics",
      description: "Bringing stories to life through animation",
      videoUrl: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/800/600"
    },
    {
      id: 4,
      title: "Web Development",
      description: "Building exceptional digital platforms",
      videoUrl: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/800/600"
    },
    {
      id: 5,
      title: "Creative Direction",
      description: "Leading visionary creative strategies",
      videoUrl: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/800/600"
    }
  ]

  return (
    <section ref={containerRef} className="py-32 bg-gray-50 overflow-hidden">
      <div className="container mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of our creative excellence and innovative solutions
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
        <motion.div
          className="flex gap-8 will-change-transform"
          style={{ x }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="flex-shrink-0 w-80 md:w-96 lg:w-[500px] group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-[4/3]">
                {/* Video Thumbnail/Poster */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Video {video.id}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Video Info */}
              <div className="mt-6">
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="container mt-16">
        <motion.div
          className="flex items-center justify-center space-x-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-900"></div>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <span className="ml-4 text-sm text-gray-500">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSlider
