import { motion } from 'framer-motion'
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
      videoSrc: 'https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691415/tech-cube_3d_animation.mp4',
      services: [
        ['Spatial Computing (AR, VR, XR)', 'AI Tools & Experiences', 'Web Development', 'WebGL Experiences'],
        ['Web3 / Blockchain', 'Game Development', 'Rapid Prototyping']
      ]
    },
    {
      id: 'design',
      title: 'Design',
      backgroundColor: 'bg-purple-100',
      videoSrc: 'https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691415/design-cube_3d_animation.mp4',
      services: [
        ['Creative Direction', 'Art Direction', 'User Experience Design', 'User Interface Design'],
        ['Brand Identity', 'Design Systems', 'Concept Design']
      ]
    },
    {
      id: 'motion',
      title: 'Motion & CGI',
      backgroundColor: 'bg-green-100',
      videoSrc: 'https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691415/motion-cube_3d_animation.mp4',
      services: [
        ['2D & 3D Animation', '2D & 3D Illustration', 'Concept Art', 'FOOH'],
        ['Character Design', 'Motion Identity']
      ]
    }
  ]

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex)
  }

  return (
    <section id="expertise" className="relative bg-white py-16">
      <div className="w-full">
        {/* Header */}
        <motion.div
          className="mb-16 px-4 sm:px-6 md:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
            Expertise & Capabilities
          </h2>
        </motion.div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="expertise-swiper"
            style={{ height: '80vh' }}
          >
            {expertiseData.map((expertise) => (
              <SwiperSlide key={expertise.id}>
                <div className={`${expertise.backgroundColor} h-full flex items-center justify-center relative overflow-hidden`}>
                  {/* Video Background */}
                  <div className="absolute inset-0 w-full h-full">
                    <video
                      className="w-full h-full object-cover opacity-20"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    >
                      <source src={expertise.videoSrc} type="video/mp4" />
                    </video>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Left Side - Video */}
                      <div className="order-2 lg:order-1">
                        <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200">
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls={false}
                          >
                            <source src={expertise.videoSrc} type="video/mp4" />
                          </video>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="order-1 lg:order-2">
                        <motion.h3 
                          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          {expertise.title}
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {expertise.services.map((column, columnIndex) => (
                            <motion.div
                              key={columnIndex}
                              className="space-y-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.3 + columnIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              {column.map((service, serviceIndex) => (
                                <motion.div
                                  key={service}
                                  className="text-gray-700 text-lg font-medium"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: 0.4 + serviceIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  {service}
                                </motion.div>
                              ))}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Dots */}
          <motion.div
            className="flex justify-center space-x-3 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {expertiseData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index ? 'bg-gray-900' : 'bg-gray-300'
                }`}
                onClick={() => swiperRef.current?.swiper?.slideTo(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
