import { motion } from 'framer-motion'

const Expertise = () => {

  return (
    <section id="expertise" className="section-padding bg-gray-50">
      <div className="container">
            {/* Header */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900">
                Expertise & Capabilities
              </h2>
            </motion.div>

            {/* Two-Column Layout */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Technology Column */}
              <motion.div
                className="bg-blue-100 p-8 rounded-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Technology</h3>
                <div className="space-y-3">
                  {[
                    "Creative Tech R&D",
                    "AR/VR/XR Development", 
                    "Realtime 3D Engines",
                    "Interactive Installations",
                    "Web & Mobile Development",
                    "Physical Computing",
                    "Generative AI"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      className="text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Design Column */}
              <motion.div
                className="bg-pink-100 p-8 rounded-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Design</h3>
                <div className="space-y-3">
                  {[
                    "Creative Direction",
                    "Art Direction",
                    "UI/UX Design",
                    "Motion Graphics",
                    "Brand Identity",
                    "Visual Systems",
                    "Content Creation"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      className="text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Navigation Dots */}
            <motion.div
              className="flex justify-center space-x-2 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 rounded-full bg-gray-900"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </motion.div>

      </div>
    </section>
  )
}

export default Expertise
