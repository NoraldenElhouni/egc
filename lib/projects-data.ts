export type Project = {
  title: string
  category: "residential" | "commercial" | "healthcare" | "cultural" | "infrastructure"
  location: string
  year: string
  image: string
  description: string
  slug: string
  details: {
    client?: string
    area?: string
    status: string
    services: string[]
    overview: string
    features: string[]
    images: string[]
  }
}

export const projectsData: Project[] = [
  {
    title: "Benina International Airport",
    category: "infrastructure",
    location: "Benghazi, Libya",
    year: "2023",
    image: "/modern-airport-terminal-architecture.jpg",
    description: "New passenger terminal with contemporary design and advanced facilities.",
    slug: "benina-international-airport",
    details: {
      client: "Libyan Civil Aviation Authority",
      area: "45,000 m²",
      status: "Completed",
      services: ["Architectural Design", "Engineering Consultancy", "Project Management", "Site Supervision"],
      overview:
        "The new passenger terminal at Benina International Airport represents a landmark project in Libyan aviation infrastructure. Designed to accommodate 3 million passengers annually, the terminal combines modern architectural language with functional efficiency. The design emphasizes natural light, spacious circulation areas, and state-of-the-art facilities while respecting the local climate and cultural context.",
      features: [
        "Modern passenger terminal with capacity for 3 million passengers annually",
        "Advanced baggage handling systems and security infrastructure",
        "Energy-efficient climate control and natural lighting systems",
        "Retail and dining facilities spanning 5,000 m²",
        "VIP lounges and business facilities",
        "Sustainable design incorporating local materials and passive cooling strategies",
      ],
      images: [
        "/modern-airport-terminal-architecture.jpg",
        "/airport-interior-modern-design.jpg",
        "/airport-terminal-exterior-night.jpg",
        "/airport-departure-hall-spacious.jpg",
      ],
    },
  },
  {
    title: "Residential Complex Benghazi",
    category: "residential",
    location: "Benghazi, Libya",
    year: "2022",
    image: "/modern-residential-complex-architecture.jpg",
    description: "1,800 residential units with integrated community facilities.",
    slug: "residential-complex-benghazi",
    details: {
      client: "Housing Development Authority",
      area: "250,000 m²",
      status: "Completed",
      services: ["Master Planning", "Architectural Design", "Landscape Design", "Project Supervision"],
      overview:
        "This comprehensive residential development provides modern housing for 1,800 families in Benghazi. The project integrates residential units with community facilities, green spaces, and commercial areas to create a self-sufficient neighborhood. The design emphasizes privacy, natural ventilation, and community interaction while incorporating traditional Arab architectural elements.",
      features: [
        "1,800 residential units ranging from 2 to 4 bedrooms",
        "Community center with recreational facilities",
        "Integrated mosque and educational facilities",
        "Commercial areas and retail spaces",
        "Landscaped parks and children's play areas",
        "Underground parking and modern infrastructure",
      ],
      images: [
        "/modern-residential-complex-architecture.jpg",
        "/residential-courtyard-landscaping.jpg",
        "/apartment-building-modern-facade.jpg",
        "/residential-community-amenities.jpg",
      ],
    },
  },
  {
    title: "Al-Hawari Hospital",
    category: "healthcare",
    location: "Benghazi, Libya",
    year: "2021",
    image: "/modern-hospital-building-architecture.jpg",
    description: "State-of-the-art medical facility with comprehensive healthcare services.",
    slug: "al-hawari-hospital",
    details: {
      client: "Ministry of Health",
      area: "35,000 m²",
      status: "Completed",
      services: ["Architectural Design", "MEP Engineering", "Medical Planning", "Construction Supervision"],
      overview:
        "Al-Hawari Hospital is a modern healthcare facility designed to provide comprehensive medical services to the Benghazi region. The design prioritizes patient comfort, operational efficiency, and medical staff workflow. The building incorporates advanced medical technology infrastructure while maintaining a healing environment through natural light, gardens, and thoughtful spatial organization.",
      features: [
        "300-bed capacity with specialized departments",
        "Advanced surgical suites and diagnostic imaging centers",
        "Emergency department with trauma facilities",
        "Outpatient clinics and rehabilitation center",
        "Healing gardens and patient-centered design",
        "Energy-efficient systems and sustainable operations",
      ],
      images: [
        "/modern-hospital-building-architecture.jpg",
        "/hospital-interior-modern-lobby.jpg",
        "/hospital-patient-room-design.jpg",
        "/hospital-exterior-landscaping.jpg",
      ],
    },
  },
  {
    title: "Heritage Market Restoration",
    category: "cultural",
    location: "Old City, Benghazi",
    year: "2020",
    image: "/traditional-market-restoration-architecture.jpg",
    description: "Restoration and modernization of historic market preserving cultural heritage.",
    slug: "heritage-market-restoration",
    details: {
      client: "Department of Antiquities",
      area: "8,000 m²",
      status: "Completed",
      services: ["Heritage Conservation", "Restoration Design", "Structural Assessment", "Project Management"],
      overview:
        "The restoration of the historic market in Benghazi's Old City represents a careful balance between preservation and modernization. This project aimed to revitalize the traditional souk while maintaining its architectural character and cultural significance. The work involved structural reinforcement, restoration of traditional building techniques, and integration of modern amenities to support contemporary commercial activities.",
      features: [
        "Restoration of traditional vaulted market halls",
        "Preservation of historic architectural elements",
        "Integration of modern utilities and fire safety systems",
        "Improved accessibility while maintaining historic character",
        "Traditional craftsmanship and local materials",
        "Revitalization of commercial activities and community space",
      ],
      images: [
        "/traditional-market-restoration-architecture.jpg",
        "/heritage-market-interior-vaults.jpg",
        "/traditional-souk-restoration-details.jpg",
        "/historic-market-courtyard.jpg",
      ],
    },
  },
  {
    title: "Commercial Tower Benghazi",
    category: "commercial",
    location: "Benghazi, Libya",
    year: "2022",
    image: "/modern-commercial-tower-architecture.jpg",
    description: "Mixed-use development combining office and retail spaces.",
    slug: "commercial-tower-benghazi",
    details: {
      client: "Private Developer",
      area: "28,000 m²",
      status: "Completed",
      services: ["Architectural Design", "Structural Engineering", "MEP Design", "Construction Management"],
      overview:
        "This 15-story commercial tower represents a new standard for office and retail development in Benghazi. The design features a contemporary glass and stone facade that responds to the local climate while creating a distinctive presence on the city skyline. The building integrates office spaces, retail areas, and parking facilities with efficient vertical circulation and flexible floor plates.",
      features: [
        "15 floors of premium office space",
        "Ground floor retail and dining facilities",
        "Multi-level parking structure",
        "High-performance facade with solar shading",
        "Advanced building management systems",
        "Rooftop terrace and amenity spaces",
      ],
      images: [
        "/modern-commercial-tower-architecture.jpg",
        "/office-tower-lobby-interior.jpg",
        "/commercial-building-facade-detail.jpg",
        "/office-space-modern-interior.jpg",
      ],
    },
  },
  {
    title: "Qaryounis Resort",
    category: "residential",
    location: "Qaryounis, Libya",
    year: "2021",
    image: "/luxury-resort-architecture-coastal.jpg",
    description: "Luxury coastal resort with hotel and residential facilities.",
    slug: "qaryounis-resort",
    details: {
      client: "Tourism Development Corporation",
      area: "120,000 m²",
      status: "Completed",
      services: ["Master Planning", "Architectural Design", "Landscape Architecture", "Interior Design"],
      overview:
        "Qaryounis Resort is a luxury coastal development that combines hotel facilities with residential villas and apartments. Located on the Mediterranean coast, the project takes full advantage of sea views and beach access while creating a resort environment that blends modern amenities with local architectural traditions. The design emphasizes outdoor living, water features, and landscaped gardens.",
      features: [
        "5-star hotel with 200 rooms and suites",
        "50 luxury villas with private pools",
        "150 residential apartments",
        "Beach club and water sports facilities",
        "Spa and wellness center",
        "Multiple restaurants and entertainment venues",
      ],
      images: [
        "/luxury-resort-architecture-coastal.jpg",
        "/resort-villa-pool-mediterranean.jpg",
        "/hotel-lobby-luxury-interior.jpg",
        "/resort-beachfront-amenities.jpg",
      ],
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((project) => project.slug)
}
