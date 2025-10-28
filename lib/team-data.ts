export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  email: string
  phone: string
  specializations: string[]
  education: string[]
  experience: string
  achievements: string[]
  languages: string[]
}

export const teamMembers: TeamMember[] = [
  {
    id: "ahmed-al-mansouri",
    name: "Ahmed Al-Mansouri",
    role: "Principal Partner & Lead Architect",
    image: "/professionals/architect-1.png",
    bio: "Ahmed Al-Mansouri is the founding principal partner of Engineering Group Company with over 25 years of distinguished experience in architectural design and urban planning. His visionary approach has shaped some of Libya's most iconic structures, blending traditional Arab architectural elements with contemporary design principles.",
    email: "ahmed@egc-libya.com",
    phone: "+218 91 234 5678",
    specializations: [
      "Architectural Design",
      "Urban Planning",
      "Heritage Conservation",
      "Sustainable Architecture",
      "Master Planning",
    ],
    education: [
      "Master of Architecture, University of Benghazi, 1998",
      "Bachelor of Architecture, University of Tripoli, 1995",
    ],
    experience: "25+ years",
    achievements: [
      "Led design of Benina International Airport expansion",
      "Awarded Best Architectural Design 2015 for Qaryounis Resort",
      "Completed 500+ residential units across Libya",
      "Published research on Arab-Modern architectural fusion",
      "Mentor to 50+ young architects",
    ],
    languages: ["Arabic", "English", "Italian"],
  },
  {
    id: "fatima-hassan",
    name: "Fatima Hassan",
    role: "Principal Partner & Urban Planner",
    image: "/female-architect-professional.jpg",
    bio: "Fatima Hassan brings exceptional expertise in urban planning and sustainable design to EGC. Her innovative approach to city planning has transformed numerous urban spaces across Libya, creating environments that balance functionality with aesthetic appeal and environmental consciousness.",
    email: "fatima@egc-libya.com",
    phone: "+218 91 234 5679",
    specializations: [
      "Urban Planning",
      "Sustainable Design",
      "Landscape Architecture",
      "Community Development",
      "Environmental Planning",
    ],
    education: [
      "PhD in Urban Planning, Technical University of Milan, 2005",
      "Master of Urban Design, University of Benghazi, 2000",
    ],
    experience: "20+ years",
    achievements: [
      "Designed master plan for 1,800 residential units in Benghazi",
      "Led Benghazi waterfront development project",
      "Implemented sustainable design practices across 30+ projects",
      "Speaker at International Urban Planning Conference 2019",
      "Recipient of Green Architecture Award 2018",
    ],
    languages: ["Arabic", "English", "French"],
  },
  {
    id: "omar-khalil",
    name: "Omar Khalil",
    role: "Principal Partner & Structural Engineer",
    image: "/structural-engineer-professional.jpg",
    bio: "Omar Khalil is a highly accomplished structural engineer with extensive experience in complex structural systems. His technical expertise ensures that every EGC project meets the highest standards of structural integrity while pushing the boundaries of architectural possibility.",
    email: "omar@egc-libya.com",
    phone: "+218 91 234 5680",
    specializations: [
      "Structural Engineering",
      "Seismic Design",
      "High-Rise Structures",
      "Bridge Engineering",
      "Construction Technology",
    ],
    education: [
      "Master of Structural Engineering, Cairo University, 2002",
      "Bachelor of Civil Engineering, University of Benghazi, 1999",
    ],
    experience: "22+ years",
    achievements: [
      "Engineered structural systems for 15+ high-rise buildings",
      "Developed innovative seismic solutions for coastal projects",
      "Supervised construction of Benina Airport terminal",
      "Published 10+ papers on structural optimization",
      "Certified in advanced structural analysis software",
    ],
    languages: ["Arabic", "English", "German"],
  },
  {
    id: "layla-ibrahim",
    name: "Layla Ibrahim",
    role: "Principal Partner & Project Director",
    image: "/project-manager-professional.jpg",
    bio: "Layla Ibrahim excels in project management and client relations, ensuring seamless delivery of complex architectural projects. Her strategic approach to project coordination and her commitment to client satisfaction have been instrumental in EGC's reputation for excellence.",
    email: "layla@egc-libya.com",
    phone: "+218 91 234 5681",
    specializations: [
      "Project Management",
      "Client Relations",
      "Contract Administration",
      "Quality Control",
      "Team Leadership",
    ],
    education: [
      "MBA in Project Management, American University of Beirut, 2006",
      "Bachelor of Architecture, University of Benghazi, 2001",
    ],
    experience: "20+ years",
    achievements: [
      "Successfully delivered 100+ projects on time and within budget",
      "Managed projects worth over $500 million",
      "Implemented ISO 9001 quality management system",
      "Built strong relationships with 200+ clients",
      "Trained 30+ project managers",
    ],
    languages: ["Arabic", "English", "Spanish"],
  },
]

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id)
}
