import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

const WorkSection = () => {
  // Video data with actual Cloudinary URLs
  const videos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691415/slider-pic-1_hkqpo3.mp4",
      title: "01_Wooden_Blocks"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691429/slider-pic-2_lcgugf.mp4",
      title: "02_Dark_Forest"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691414/slider-pic-3_hrtbnm.mp4",
      title: "03_Nature"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691433/slider-pic-4_zizn06.mp4",
      title: "04_Sliders"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691418/slider-pic-5_m1iyvn.mp4",
      title: "05_Particles"
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691423/slider-pic-6_vhcysk.mp4",
      title: "08_Grains"
    }
  ]

  // Category tags for marquee
  const categories = [
    "DIGITAL", "EXPERIENTIAL", "MOTION", "SPATIAL", "VR", "GEN-AI", 
    "AR", "GAMING", "VIRTUAL-FASHION", "IMMERSIVE", "BRAND"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative bg-white -mt-9">
      {/* Video Slider Section */}
      <div className="relative w-full h-[28rem] bg-white px-2 md:px-3 lg:px-4 my-24">
        <motion.div
          className="w-full h-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[FreeMode]}
            spaceBetween={16}
            slidesPerView={3.5}
            freeMode={true}
            grabCursor={true}
            className="w-full h-full"
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 12
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 16
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 16
              }
            }}
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id} className="h-full">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100 cursor-drag">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Work Title and Marquee Section */}
      <div className="relative bg-white py-2 my-0">
        <motion.div
          className="w-full"
          style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Work Title and Selected Work */}
          <motion.div
            className="flex items-start justify-between"
            variants={itemVariants}
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium text-black uppercase tracking-tight pl-4">
              work
            </h2>
            <div className="text-right pr-4">
              <div className="text-lg md:text-xl font-light text-black">
                Selected Work
              </div>
              <div className="text-lg md:text-xl font-light text-gray-300">
                (22-25)
              </div>
            </div>
          </motion.div>

          {/* Moving Marquee */}
          <motion.div
            className="relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="flex animate-marquee whitespace-nowrap">
              {[...categories, ...categories].map((category, index) => (
                <span
                  key={index}
                  className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-300 mr-16 uppercase tracking-tight"
                >
                  {category}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkSection
