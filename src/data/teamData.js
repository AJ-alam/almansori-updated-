export const teamDepartments = [
  {
    id: "dentists",
    label: "Dentists",
  },
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
  // ── DENTISTS ──────────────────────────────────────────
  {
    name: "Dr. Aysha AlMansoori",
    role: "Owner & Medical Director",
    specialties: ["Restorative Dentistry", "Face Enhancement Dentistry"],
    department: "dentists",
    image: "/doctors/ayesha 1.png",
  },
  {
    name: "Dr. Basile Numbnar",
    role: "Dental Specialist",
    specialties: ["Periodontology", "Implantology"],
    department: "dentists",
    image: "/doctors/placeholder.jpg",
  },
  {
    name: "Dr. Hassan",
    role: "General Dentist",
    specialties: ["General Dentistry"],
    department: "dentists",
    image: "/doctors/placeholder.jpg",
  },
  {
    name: "Dr. Ahmed",
    role: "General Dentist",
    specialties: ["General Dentistry"],
    department: "dentists",
    image: "/doctors/placeholder.jpg",
  },
  {
    name: "Dr. Aziza Saeed",
    role: "General Dentist, Psychotherapist",
    specialties: ["General Dentistry", "Psychotherapy"],
    department: "dentists",
    image: "/doctors/dr aziza.png",
  },

  // ── DOCTORS ───────────────────────────────────────────
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
    role: "Senior Dental Assistant",
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
    role: "Senior Dental Assistant",
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
