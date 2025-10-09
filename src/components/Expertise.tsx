import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useRef, useState } from 'react'
import type { SwiperRef } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'

const Expertise = () => {
  const swiperRef = useRef<SwiperRef>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const expertiseData = [
    {
      id: 'technology',
      title: 'Technology',
      backgroundColor: 'bg-blue-100',
      videoSrc: 'https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691426/technology_zithkl.mp4',
      services: [
        ['Spatial Computing (AR, VR, XR)', 'AI Tools & Experiences', 'Web Development', 'WebGL Experiences'],
        ['Web3 / Blockchain', 'Game Development', 'Rapid Prototyping']
      ]
    },
    {
      id: 'design',
      title: 'Design',
      backgroundColor: 'bg-purple-100',
      videoSrc: 'https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691343/design_p6gd0a.mp4',
      services: [
        ['Creative Direction', 'Art Direction', 'User Experience Design', 'User Interface Design'],
        ['Brand Identity', 'Design Systems', 'Concept Design']
      ]
    },
    {
      id: 'motion',
      title: 'Motion & CGI',
      backgroundColor: 'bg-green-100',
      videoSrc: 'https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691469/motion-cgi_fc7de5.mp4',
      services: [
        ['2D & 3D Animation', '2D & 3D Illustration', 'Concept Art', 'FOOH'],
        ['Character Design', 'Motion Identity']
      ]
    }
  ]

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex)
  }

  // Individual Expertise Block Component
  const ExpertiseBlock = ({ expertise }: { expertise: typeof expertiseData[0] }) => {
    const mainVideoRef = useRef<HTMLVideoElement>(null)
    const [isBlockHovered, setIsBlockHovered] = useState(false)

    const handleMouseEnter = () => {
      setIsBlockHovered(true)
      if (mainVideoRef.current) {
        mainVideoRef.current.play().catch(() => {})
      }
    }

    const handleMouseLeave = () => {
      setIsBlockHovered(false)
      if (mainVideoRef.current) {
        mainVideoRef.current.pause()
        mainVideoRef.current.currentTime = 0
      }
    }

    // Define lighter background colors for hover state
    const getLighterBackground = (bgClass: string) => {
      switch (bgClass) {
        case 'bg-blue-100': return 'bg-blue-100'
        case 'bg-purple-100': return 'bg-purple-100'
        case 'bg-green-100': return 'bg-green-100'
        default: return 'bg-gray-100'
      }
    }

    return (
        <div
          className={`h-[500px] sm:h-[600px] md:h-[650px] lg:h-[650px] rounded-lg overflow-hidden relative group cursor-pointer transition-all duration-300 ${
            isBlockHovered ? getLighterBackground(expertise.backgroundColor) : 'bg-white'
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        {/* Video Section */}
        <div className="h-64 sm:h-80 md:h-96 lg:h-[460px] flex items-center justify-center">
          <video
            className={`${isBlockHovered ? 'w-[91%] h-[91%]' : 'w-full h-full'} object-cover rounded-lg ${expertise.backgroundColor} transition-all duration-300`}
            muted
            loop
            playsInline
            preload="auto"
            ref={mainVideoRef}
          >
            <source src={expertise.videoSrc} type="video/mp4" />
          </video>
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-start pt-8 pb-8" style={{ fontFamily: 'Aeonik, sans-serif' }}>
          <div className={`w-full space-y-4 transition-all duration-300 ${isBlockHovered ? 'scale-[0.91]' : 'scale-100'}`}>
            <h3 className="text-5xl font-medium text-gray-900">
              {expertise.title}
            </h3>

            <div className={`grid grid-cols-2 transition-all duration-300 ${isBlockHovered ? 'gap-[3.66px]' : 'gap-4'}`}>
              {expertise.services.map((column: string[], columnIndex: number) => (
                <div key={columnIndex} className="space-y-2">
                  {column.map((service: string) => (
                    <div key={service} className="text-gray-700 text-sm font-medium leading-tight">
                      {service}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="expertise" className="relative bg-white pt-4 pb-16">
      <div className="w-full">
        {/* Header */}
        <div className="mb-4 px-4 sm:px-6 md:px-8">
          <h2 className="text-sm md:text-sm lg:text-md font-medium text-gray-900">
            Expertise & Capabilities
          </h2>
        </div>

        {/* Desktop Layout - All blocks side by side */}
        <div className="hidden lg:block">
          <div className="w-full px-4">
            <div className="grid grid-cols-3 gap-4">
              {expertiseData.map((expertise) => (
                <ExpertiseBlock key={expertise.id} expertise={expertise} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Swiper slider */}
        <div className="lg:hidden">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="expertise-swiper"
            style={{ height: '600px' }}
          >
            {expertiseData.map((expertise) => (
              <SwiperSlide key={expertise.id}>
                <ExpertiseBlock expertise={expertise} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Dots - Only show on mobile/tablet */}
          <div className="flex justify-center space-x-3 mt-8">
            {expertiseData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index ? 'bg-gray-900' : 'bg-gray-300'
                }`}
                onClick={() => swiperRef.current?.swiper?.slideTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
