import { motion } from 'framer-motion'
import { useRef } from 'react'

const VideoBlocks = () => {
  // Video data with actual Cloudinary URLs
  const videoBlocks = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691411/oreo-pacman_kvu8eg.mp4",
      title: "Oreo x Pacman",
      subtitle: "AR Experience",
      comingSoon: false
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691408/doordash-form_rncnlm.mp4",
      title: "Doordash",
      subtitle: "Summer of Dashpass Campaign",
      comingSoon: false
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691429/widllet_idd90t.mp4",
      title: "Widllet",
      subtitle: "Brand Identity, App",
      comingSoon: true
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691432/powerade_oldims.mp4",
      title: "Powerade",
      subtitle: "Mindzone VR Experience",
      comingSoon: false
    }
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const VideoBlock = ({ block }: { block: typeof videoBlocks[0] }) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }

    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }

    return (
      <motion.div
        className="relative group cursor-pointer"
        variants={itemVariants}
        transition={{ duration: 0.3 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Coming Soon Tag - Only visible on mobile */}
        {block.comingSoon && (
          <div className="md:hidden mb-2 flex justify-center">
            <div className="bg-gray-200 text-black text-sm font-medium px-4 py-2 rounded-full uppercase tracking-wide">
              Coming Soon
            </div>
          </div>
        )}

        {/* Video Container */}
        <div className="relative w-full h-[23.4rem] sm:h-[26rem] md:h-[33rem] lg:h-[36em] rounded-lg overflow-hidden bg-gray-100">
          <video
            ref={videoRef}
            src={block.src}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            controls={false}
            preload="metadata"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-transparent transition-all duration-300" />
          
          {/* Top Hover Content - Rising animation */}
          <div className="absolute top-0 left-0 right-0 h-full p-6">
            {/* Title - Left side with word wrapping */}
            <div className="absolute top-5 left-6">
              <div className="overflow-hidden">
                <h3 className={`font-medium transform translate-y-full group-hover:translate-y-0 transition-transform ease-out group-hover:duration-600 duration-0 ${block.id === 2 || block.id === 3 ? 'text-black' : 'text-white'}`} style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', fontSize: '0.875em', lineHeight: '1.25em' }}>
                  {block.title.split(' ').map((word, index) => (
                    <div key={index}>{word}</div>
                  ))}
                </h3>
              </div>
            </div>
            
            {/* Subtitle - Center */}
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
              <div className="overflow-hidden">
                <p className={`font-light transform translate-y-full group-hover:translate-y-0 transition-transform ease-out delay-100 group-hover:duration-600 duration-0 ${block.id === 2 || block.id === 3 ? 'text-black/90' : 'text-white/90'}`} style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', fontSize: '0.875em', lineHeight: '1.25em' }}>
                  {block.subtitle}
                </p>
              </div>
            </div>
            
            {/* Plus Icon - Top right */}
            <div className="absolute top-5 right-6">
              <div className="overflow-hidden">
                <a
                  href="#" 
                  className="w-8 h-8 bg-transparent hover:bg-transparent rounded-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform ease-out delay-200 group-hover:duration-600 duration-0"
                >
                  <span className={`text-xl font-light ${block.id === 2 || block.id === 3 ? 'text-black' : 'text-white'}`} style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>+</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </motion.div>
    )
  }

  return (
    <section className="relative bg-white pt-16">
      <div className="w-full px-1 sm:px-2 md:px-3">
        <div className="space-y-2.5">
          {/* Row 1: [Narrow | Wide] */}
            <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] gap-3.5 sm:gap-3.5 md:gap-3.5">
            <VideoBlock block={videoBlocks[0]} />
            <VideoBlock block={videoBlocks[1]} />
          </div>

          {/* Row 2: [Wide | Narrow] */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] gap-3.5 sm:gap-3.5 md:gap-3.5">
            <VideoBlock block={videoBlocks[2]} />
            <VideoBlock block={videoBlocks[3]} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoBlocks