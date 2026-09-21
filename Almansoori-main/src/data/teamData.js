export const teamDepartments = [
  {
    id: "doctors",
    label: "Doctors",
  },
  {
    id: "support",
    label: "Supporting Staff",
  },
];

export const teamMembers = [
  // ── DOCTORS ───────────────────────────────────────────
  {
    name: "Dr. Aysha almansoori",
    role: "Owner & Medical Director",
    specialties: ["Restorative Dentistry", "Face Enhancement Dentistry"],
    department: "doctors",
    image: "/doctors/ayesha 1.png",
  },
  {
    name: "Dr. Basile Numbnar",
    role: "Dental Specialist",
    specialties: ["Periodontology", "Implantology"],
    department: "doctors",
    image: "/doctors/placeholder.jpg",
  },
  {
    name: "Dr. Hassan",
    role: "Doctor",
    specialties: ["General Dentistry"],
    department: "doctors",
    image: "/doctors/placeholder.jpg",
  },
  {
    name: "Dr. Ahmed",
    role: "Doctor",
    specialties: ["General Dentistry"],
    department: "doctors",
    image: "/doctors/placeholder.jpg",
  },
  {
    name: "Dr. Aziza Saeed",
    role: "Doctor, Psychotherapist",
    specialties: ["General Dentistry", "Psychotherapy"],
    department: "doctors",
    image: "/doctors/dr aziza.png",
  },
  {
    name: "Dr. Israa",
    role: "Medical Specialist",
    specialties: ["ENT Consultation", "Injectables & Skin"],
    department: "doctors",
    image: "/doctors/placeholder.jpg",
  },

  // ── SUPPORTING STAFF ──────────────────────────────────
  {
    name: "Hana",
    role: "Senior Assistant",
    specialties: [],
    department: "support",
    image: "/doctors/placeholder.jpg",
  },
  {
    name: "Ligy",
    role: "Senior Staff Nurse",
    specialties: [],
    department: "support",
    image: "/doctors/placeholder.jpg",
  },
  {
    name: "Fatima Alhayki",
    role: "Senior Assistant",
    specialties: [],
    department: "support",
    image: "/doctors/placeholder.jpg",
  },
  {
    name: "Muneera",
    role: "Senior Front Desk & Insurance Officer",
    specialties: [],
    department: "support",
    image: "/doctors/placeholder.jpg",
  },
  {
    name: "Mawahib",
    role: "Receptionist",
    specialties: [],
    department: "support",
    image: "/doctors/placeholder.jpg",
  },
];

export const getMembersByDepartment = (deptId) => {
  if (deptId === "all") return teamMembers;
  return teamMembers.filter((m) => m.department === deptId);
};
