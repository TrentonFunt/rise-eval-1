import { motion } from 'framer-motion'

const TrustedBrands = () => {
  const brands = [
    { name: "StartupCo", logo: "SC" },
    { name: "Local Business", logo: "LB" },
    { name: "E-commerce Store", logo: "ES" },
    { name: "Creative Agency", logo: "CA" },
    { name: "Tech Company", logo: "TC" },
    { name: "Non-Profit", logo: "NP" },
    { name: "Restaurant", logo: "RT" },
    { name: "Fashion Brand", logo: "FB" },
    { name: "Consulting Firm", logo: "CF" },
    { name: "Healthcare", logo: "HC" },
    { name: "Education", logo: "ED" },
    { name: "Real Estate", logo: "RE" }
  ]


  return (
    <section className="section-padding bg-gray-50">
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
            Our Clients
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We work with businesses of all sizes to create beautiful, functional digital experiences
          </p>
        </motion.div>

            {/* Brands Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  className="bg-blue-500 rounded-lg aspect-square flex items-center justify-center group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {brand.logo}
                  </div>
                </motion.div>
              ))}
            </motion.div>

      </div>
    </section>
  )
}

export default TrustedBrands
