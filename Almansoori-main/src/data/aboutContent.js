// Vision, Mission & Values content for About page
import { FaHeart, FaUsers, FaHandHoldingMedical, FaLeaf, FaGraduationCap, FaHandshake, FaGlobe } from "react-icons/fa6";

export const visionMissionValues = {
    vision: {
        title: "Vision",
        content: "To provide a complete facial health, beauty and wellbeing under one roof."
    },
    mission: {
        title: "Mission",
        content: "To deliver comprehensive high quality face enhancement through a multidisciplinary approach, combining dental and medical expertise, advanced technology and personalized treatment to enhance the health, beauty and wellbeing of every patient."
    },
    values: [
        {
            title: "Patient-Centered Care",
            icon: FaUsers,
            description: "We place patients at the heart of everything we do, providing compassionate, personalized care."
        },
        {
            title: "Excellence",
            icon: FaHeart,
            description: "We strive for the highest standards of clinical quality, safety, and service."
        },
        {
            title: "Collaboration",
            icon: FaHandshake,
            description: "We integrate the expertise of Dental, ENT, and Dermatology specialists to deliver comprehensive facial care."
        },
        {
            title: "Innovation",
            icon: FaHandHoldingMedical,
            description: "We embrace advanced technologies and evidence-based practices to achieve the best outcomes."
        },
        {
            title: "Integrity",
            icon: FaGraduationCap,
            description: "We act with honesty, transparency, and professionalism in every patient interaction."
        },
        {
            title: "Beauty & Well-being",
            icon: FaLeaf,
            description: "We are committed to enhancing both the health and natural beauty of our patients, promoting confidence and quality of life."
        },
        {
            title: "Continuous Improvement",
            icon: FaGlobe,
            description: "We foster learning, development, and innovation to continually improve patient care."
        }
    ]
};
