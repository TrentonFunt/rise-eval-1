import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import formFunAnimation from '../assets/form-fun-lottie.json'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [lottieReady, setLottieReady] = useState(false)

  // Add the studio-text-indent styling - much larger indentation
  const studioTextIndentStyle = {
    marginLeft: '30%'
  }

  // Add responsive styles for home-intro
  const homeIntroStyles = `
    @media screen and (max-width: 767px) {
      .home-intro {
        line-height: 110%;
        display: block;
      }
    }
    @media screen and (max-width: 991px) {
      .home-intro {
        margin-bottom: 4vw;
        font-size: 7vw;
        display: block;
      }
    }
  `

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



  useEffect(() => {
    // When Lottie animation completes, immediately trigger the shrink animation
    if (animationComplete) {
      setIsLoaded(true)
    }
  }, [animationComplete])

  // Set Lottie ready state to prevent spinning loader
  useEffect(() => {
    // Set lottieReady to true after a very short delay to ensure Lottie is loaded
    const timer = setTimeout(() => {
      setLottieReady(true)
    }, 50)
    
    return () => clearTimeout(timer)
  }, [])

  // Show nothing until Lottie is ready to prevent spinning loader
  if (!lottieReady) {
    return null
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: homeIntroStyles }} />
      <section className="relative bg-white">
      {/* Hero Title Section */}
      <motion.div 
        className="relative z-10 flex items-center justify-center bg-white"
        initial={{ height: '100vh' }}
        animate={{
          height: isLoaded ? '60vh' : '100vh'
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: isLoaded ? 0.05 : 0
        }}
      >
        <div className="text-center text-black px-4 max-w-4xl mx-auto">
          {/* Form&Fun SVG Logo */}
          <div className="flex items-center justify-center">
            {!animationComplete ? (
              <Lottie
                animationData={formFunAnimation}
                loop={false}
                autoplay={true}
                onComplete={() => setAnimationComplete(true)}
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxWidth: '600px'
                }}
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid meet'
                }}
              />
            ) : (
              <img 
                src="/form-fun-logo.svg" 
                alt="Form&Fun" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxWidth: '600px'
                }}
              />
            )}
          </div>
        </div>
      </motion.div>

      {/* Video Section - Only show after animation completes */}
      {isLoaded && (
        <>
          <div className="relative w-full h-[87vh] bg-white px-2 md:px-3 lg:px-4">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              >
                <source src="https://res.cloudinary.com/dfw7cyzig/video/upload/v1759691457/sizzle-form_hlge8z.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Subtitle and CTA Section - Below the video */}
          <div className="relative z-10 flex items-start justify-center bg-white pt-16 pb-8 mt-12">
        <motion.div
          className="text-left text-black px-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* "The studio" header and subtitle in same text flow */}
          <div 
            className="home-intro font-normal text-black w-full"
            style={{
              letterSpacing: '-0.1vw',
              cursor: 'default',
              fontFamily: 'Aeonik, sans-serif',
              fontSize: '4.4vw',
              lineHeight: '4.4vw',
              color: 'rgb(29, 29, 29)'
            }}
          >
            {/* "The studio" header */}
            <motion.sup
              className="font-normal text-black mr-8 inline"
              style={{
                fontSize: '1.2vw',
                color: 'rgb(29, 29, 29)',
                verticalAlign: 'super'
              }}
              variants={itemVariants}
            >
              The studio
            </motion.sup>
            <span className="inline relative" style={studioTextIndentStyle}>
              <span className="word inline text-[rgb(29,29,29)]">We</span>
            </span>
            <span className="word inline text-[rgb(29,29,29)]"> are</span>
            <span className="word inline text-[rgb(29,29,29)]"> a</span>
            <span className="word inline text-[rgb(29,29,29)]"> global</span>
            <span className="word inline text-[rgb(29,29,29)]"> creative</span>
            <span className="word inline text-[rgb(29,29,29)]"> tech</span>
            <span className="word inline text-[rgb(29,29,29)]"> studio</span>
            <span className="word inline text-[rgb(29,29,29)]"> forging</span>
            <span className="word inline text-[rgb(29,29,29)]"> delightful</span>
            <span className="word inline text-[rgb(29,29,29)]"> experiences</span>
            <span className="word inline text-[rgb(29,29,29)]"> by</span>
            <span className="word inline text-[rgb(29,29,29)]"> blending</span>
            <span className="word inline text-[rgb(29,29,29)]"> design,</span>
            <span className="word inline text-[rgb(29,29,29)]"> technology,</span>
            <span className="word inline text-[rgb(29,29,29)]"> and</span>
            <span className="word inline text-[rgb(29,29,29)]"> storytelling.</span>
            <span className="word inline text-[rgb(29,29,29)]"> Driven</span>
            <span className="word inline text-[rgb(29,29,29)]"> to</span>
            <span className="word inline text-[rgb(29,29,29)]"> create</span>
            <span className="word inline text-[rgb(29,29,29)]"> value</span>
            <span className="word inline text-[rgb(29,29,29)]"> for</span>
            <span className="word inline text-[rgb(29,29,29)]"> people</span>
            <span className="word inline text-[rgb(29,29,29)]"> and</span>
            <span className="word inline text-[rgb(29,29,29)]"> brands</span>
            <span className="word inline text-[rgb(29,29,29)]"> through</span>
            <span className="word inline text-[rgb(29,29,29)]"> interaction</span>
            <motion.a
              href="#studio"
              className="inline-flex items-center ml-4 px-6 py-2 bg-black text-white text-base font-medium rounded-full hover:bg-gray-300 transition-colors duration-200 align-middle"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </motion.a>
          </div>
        </motion.div>
      </div>
        </>
      )}
    </section>
    </>
  )
}

export default Hero
