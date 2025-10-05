import { motion } from 'framer-motion'
import { STUDIO_INFO } from '../utils/constants'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Studio Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{STUDIO_INFO.NAME}</h3>
            <p className="text-gray-400 mb-4">
              We create beautiful, functional digital experiences that bring joy to users and drive results for businesses.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>{STUDIO_INFO.EMAIL}</p>
              <p>{STUDIO_INFO.PHONE}</p>
              <p>{STUDIO_INFO.LOCATION}</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 {STUDIO_INFO.NAME}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
