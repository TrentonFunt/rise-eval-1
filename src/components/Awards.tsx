
const Awards = () => {
  const awards = [
    {
      number: "01",
      award: "Awwwwards",
      project: "Form&Fun Portfolio",
      category: ["1x Site of the Day", "1x Portfolio Honors", "1x Developer Award", "1x Honorable Mention"],
      year: "2025"
    },
    {
      number: "02", 
      award: "Webby Awards",
      project: "Powerade Mind Zone",
      category: ["AI, Immersive & Games"],
      year: "2025"
    },
    {
      number: "03",
      award: "Clio Awards — Gold", 
      project: "Oreo & Pacman Supermarcade",
      category: ["Interactive/Experiental"],
      year: "2025"
    },
    {
      number: "04",
      award: "3x Clio Awards — Shortlist",
      project: "Oreo & Pacman Supermarcade", 
      category: ["1x Entertainment", "1x Use of New Realities"],
      year: "2025"
    },
    {
      number: "05",
      award: "Auggie Award",
      project: "Oreo & Pacman Supermarcade",
      category: ["Best Campaign"],
      year: "2025"
    },
    {
      number: "06",
      award: "3x ADC Festival — Silver",
      project: "Oreo & Pacman Supermarcade",
      category: ["1x Craft AR/VR", "1x Digital Out of Home", "1x Point-of-Sale Media"],
      year: "2025"
    },
    {
      number: "07",
      award: "2x ADC Festival — Bronze", 
      project: "Oreo & Pacman Supermarcade",
      category: ["1x Gaming Experiences", "1x Craft for Spatial Experiences AR/VR"],
      year: "2025"
    },
    {
      number: "08",
      award: "Clio Awards — Silver",
      project: "Powerade Mind Zone",
      category: ["Digital/Mobile"],
      year: "2024"
    },
    {
      number: "09",
      award: "Cannes Lions — Bronze",
      project: "Oreo & Pacman Supermarcade", 
      category: ["Outdoor"],
      year: "2024"
    },
    {
      number: "10",
      award: "4x Cannes Lions — Shortlist",
      project: "Oreo & Pacman Supermarcade",
      category: ["Outdoor"],
      year: "2024"
    },
    {
      number: "11",
      award: "New York Festivals — Bronze",
      project: "Oreo & Pacman Supermarcade",
      category: ["Digital/Mobile: Best use"],
      year: "2024"
    }
  ]

  return (
    <section className="relative bg-white py-16" style={{ fontFamily: 'Aeonik, sans-serif' }}>
      <div className="w-full pl-2 pr-4 sm:pl-3 sm:pr-6 md:pl-4 md:pr-8">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-gray-900" style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
            AN AWARD<br/>
            WINNING STUDIO
            <span className="inline-block w-2 h-2 bg-gray-300 rounded-full ml-4"></span>
          </h2>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200 mb-8"></div>

        {/* Awards Table */}
        <div className="space-y-0">
          {awards.map((award) => (
            <div key={award.number} className="flex items-start py-6 border-b border-gray-200 last:border-b-0">
              {/* Sequential Number */}
              <div className="w-16 text-sm font-medium text-gray-400">
                {award.number}
              </div>

              {/* Award Name */}
              <div className="flex-1 text-left mr-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {award.award}
                </h3>
              </div>

              {/* Project */}
              <div className="flex-1 text-left mr-8">
                <div className="text-sm text-gray-900 mb-1">
                  Project
                </div>
                <div className="text-sm text-gray-500">
                  {award.project}
                </div>
              </div>

              {/* Category */}
              <div className="flex-1 text-left mr-8">
                <div className="text-sm text-gray-900 mb-1">
                  Category
                </div>
                <div className="text-sm text-gray-500 space-y-1">
                  {award.category.map((cat, catIndex) => (
                    <div key={catIndex}>{cat}</div>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div className="w-16 text-right">
                <div className="text-sm text-gray-900 mb-1">
                  Year
                </div>
                <div className="text-sm text-gray-900">
                  {award.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
