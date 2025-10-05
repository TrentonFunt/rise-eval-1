import { motion } from 'framer-motion'

const Awards = () => {
    const awards = [
      {
        year: "2025",
        title: "Awwwards",
        category: "Site of the Day",
        project: "Form&Fun Portfolio",
        description: "1x Site of the Day, 1x Portfolio Honors, 1x Developer Award, 1x Honorable Mention"
      },
      {
        year: "2025",
        title: "Webby Awards",
        category: "AI, Immersive & Games",
        project: "Powerade Mind Zone",
        description: "Recognized for innovative AI and immersive gaming experiences"
      },
      {
        year: "2025",
        title: "Clio Awards — Gold",
        category: "Interactive/Experiental",
        project: "Oreo & Pacman Supermarcade",
        description: "Gold award for exceptional interactive and experiential design"
      },
      {
        year: "2025",
        title: "3x Clio Awards — Shortlist",
        category: "Entertainment & Use of New Realities",
        project: "Oreo & Pacman Supermarcade",
        description: "1x Entertainment, 1x Use of New Realities"
      },
      {
        year: "2025",
        title: "Auggie Award",
        category: "Best Campaign",
        project: "Oreo & Pacman Supermarcade",
        description: "Best campaign award for innovative AR/VR marketing"
      },
      {
        year: "2025",
        title: "3x ADC Festival — Silver",
        category: "Craft AR/VR, Digital Out of Home, Point-of-Sale Media",
        project: "Oreo & Pacman Supermarcade",
        description: "1x Craft AR/VR, 1x Digital Out of Home, 1x Point-of-Sale Media"
      },
      {
        year: "2025",
        title: "2x ADC Festival — Bronze",
        category: "Gaming Experiences & Craft for Spatial Experiences",
        project: "Oreo & Pacman Supermarcade",
        description: "1x Gaming Experiences, 1x Craft for Spatial Experiences AR/VR"
      },
      {
        year: "2024",
        title: "Clio Awards — Silver",
        category: "Digital/Mobile",
        project: "Powerade Mind Zone",
        description: "Silver award for outstanding digital and mobile experience"
      },
      {
        year: "2024",
        title: "Cannes Lions — Bronze",
        category: "Outdoor",
        project: "Oreo & Pacman Supermarcade",
        description: "Bronze Lion for innovative outdoor advertising campaign"
      },
      {
        year: "2024",
        title: "4x Cannes Lions — Shortlist",
        category: "Outdoor",
        project: "Oreo & Pacman Supermarcade",
        description: "Multiple shortlist nominations for outdoor category"
      },
      {
        year: "2024",
        title: "New York Festivals — Bronze",
        category: "Digital/Mobile: Best use",
        project: "Oreo & Pacman Supermarcade",
        description: "Bronze award for best use of digital and mobile technology"
      }
    ]

  const stats = [
    { number: "11", label: "Awards Won" },
    { number: "20+", label: "Nominations" },
    { number: "2", label: "Years Running" },
    { number: "100%", label: "Client Satisfaction" }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900">
            An Award Winning Studio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Recognized for excellence in design, innovation, and creative strategy
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

            {/* Awards Table */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {awards.map((award, index) => (
                <motion.div
                  key={`${award.year}-${award.title}`}
                  className="flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {/* Sequential Number */}
                  <div className="w-12 text-sm font-medium text-gray-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Award Name */}
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {award.title}
                    </h3>
                  </div>

                  {/* Category */}
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-gray-600">
                      {award.category}
                    </div>
                  </div>

                  {/* Project */}
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-gray-800">
                      {award.project}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="w-8 flex justify-end">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>

        {/* Recognition Quote */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic max-w-4xl mx-auto leading-relaxed">
                "We forge delightful experiences by blending design, technology, and storytelling to create value for people and brands through interaction."
              </blockquote>
              <div className="mt-8 text-gray-500">
                <cite className="font-medium">— Form&Fun Studio</cite>
              </div>
            </motion.div>
      </div>
    </section>
  )
}

export default Awards
