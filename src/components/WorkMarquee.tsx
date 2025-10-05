import { motion } from 'framer-motion'

const WorkMarquee = () => {
  return (
    <section className="py-16 bg-black text-white overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -100] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="text-6xl md:text-8xl font-light mr-16">
          Creative Excellence • Digital Innovation • Brand Transformation •
        </div>
        <div className="text-6xl md:text-8xl font-light mr-16">
          Creative Excellence • Digital Innovation • Brand Transformation •
        </div>
      </motion.div>
    </section>
  )
}

export default WorkMarquee
