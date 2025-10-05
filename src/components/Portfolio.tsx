import { motion } from 'framer-motion'
import type { PortfolioProps, Project } from '../types'

const Portfolio: React.FC<PortfolioProps> = () => {

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      category: "Web Development",
      description: "A sleek, high-converting e-commerce experience with seamless checkout flow",
      image: "/api/placeholder/600/400",
      tags: ["E-commerce", "React", "UX/UI"]
    },
    {
      id: 2,
      title: "Brand Identity System",
      category: "Brand Design",
      description: "Complete visual identity for a tech startup, including logo, guidelines, and applications",
      image: "/api/placeholder/600/400",
      tags: ["Branding", "Logo Design", "Identity"]
    },
    {
      id: 3,
      title: "Mobile App Interface",
      category: "App Design",
      description: "Intuitive mobile app design with focus on user experience and accessibility",
      image: "/api/placeholder/600/400",
      tags: ["Mobile", "iOS", "Android"]
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "Web Design",
      description: "Professional corporate website with modern design and smooth animations",
      image: "/api/placeholder/600/400",
      tags: ["Corporate", "WordPress", "SEO"]
    },
    {
      id: 5,
      title: "Digital Marketing Campaign",
      category: "Creative Direction",
      description: "End-to-end digital marketing campaign with compelling visuals and messaging",
      image: "/api/placeholder/600/400",
      tags: ["Marketing", "Social Media", "Strategy"]
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "Web Development",
      description: "Personal portfolio website showcasing creative work with interactive elements",
      image: "/api/placeholder/600/400",
      tags: ["Portfolio", "Animation", "Responsive"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="work" className="section-padding bg-white">
      <div className="container">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black">
                  WORK
                </h2>
                <div className="hidden md:block">
                  <div className="text-sm text-gray-500 uppercase tracking-wider whitespace-nowrap overflow-hidden">
                    <motion.div
                      className="inline-block"
                      animate={{ x: [0, -100] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      GAMING VIRTUAL REALITY INTERACTIVE INSTALLATIONS BRANDING DIGITAL EXPERIENCES &nbsp;&nbsp;&nbsp;
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer flex items-center gap-8"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg bg-gray-200 w-32 h-32 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="text-xs font-medium">{project.title}</p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Portfolio
