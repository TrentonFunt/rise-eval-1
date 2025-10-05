import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const StudioSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section ref={ref} id="studio" className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
              {/* Section Title */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-gray-900"
                variants={itemVariants}
              >
                The studio
              </motion.h2>

              {/* Main Content */}
              <motion.div
                className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                <p>
                  We are a global creative tech studio forging delightful experiences by blending design, technology, and storytelling. Driven to create value for people and brands through interaction.
                </p>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                className="mt-8"
                variants={itemVariants}
              >
                <motion.a
                  href="#work"
                  className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View our work
                </motion.a>
              </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StudioSection
