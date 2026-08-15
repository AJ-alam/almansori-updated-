// Doctors/Staff data for the clinic
import { RiMentalHealthLine } from "react-icons/ri";

export const doctors = [
    {
        name: "Dr. Aziza Yaser",
        credentials: "BDS, DHP, MSC",
        slug: "dr-aziza-yaser",
        specialty: "Wellness Counseling & Psychotherapy",
        icon: RiMentalHealthLine,
        image: "/doctors/dr-aziza.jpg", // Placeholder - replace with actual image
        bio: "As An Entrepreneur, Dr. Aziza Values Growth And Purpose. After Completing Her Dental Degree From The UAE, She Decided To Pursue Her Passion In The Field Of Mental Health. She Later Attained Her Diplomas In Psychotherapy And Clinical Hypnotherapy, Followed By A Masters Degree In Psychology From Scotland.",
        qualifications: [
            "Bachelor Of Dental Surgery (BDS)",
            "Master of Science Psychology (MSc)",
            "Diploma in Psychotherapy and Clinical Hypnotherapy (DHP)",
            "Advanced Diploma in Psychotherapy and Counseling",
            "Member of British Psychology Association (GMBPsS)",
            "Member Of The Association For Professional Hypnosis And Psychotherapy (LAPHP)",
            "Member Of The National Register Of Psychotherapists And Counselors (LNRPC)"
        ],
        experience: "Dr. Aziza has worked in the mental health field for over 4 years and has gained experience working with various conditions. Dr. Aziza works with individuals, couples, and families with a holistic and integrative approach to well-being using various modalities such as CBT, talk therapy, Somatic work, access bars, pranic healing, hypnotherapy, counseling, EMDR, and more. Her focus is on empowering individuals by cultivating various skills and knowledge that enhance the quality of life.",
        quote: "Introspection, courage, resilience, and patience are fundamental attributes of strong character. It is my hope that clients develop the mental strength and inner faith to forge an intentional path in life, one that is not necessarily devoid of hardships but a life that is driven by meaning and purpose.",
        modalities: [
            "Cognitive Behavioral Therapy (CBT)",
            "Talk Therapy",
            "Somatic Work",
            "Access Bars",
            "Pranic Healing",
            "Hypnotherapy",
            "Counseling",
            "EMDR"
        ],
        faqs: [
            {
                q: "What is the value of Wellness Counseling?",
                a: "In the same way, we visit our Doctors for check-ups or when we are concerned about our health, it is important to check in mentally. The mind is an underestimated factor in overall health, from our thoughts, beliefs, behaviors, and approach to life. Counseling gives you a space where you can better understand yourself, and the resources that you can cultivate, and helps you design a vision for the kind of life you wish to lead."
            },
            {
                q: "How long is the session and how often should I book?",
                a: "Sessions are an hour long, and the frequency differs with each client. I always suggest starting with 1 to 4 consistent sessions. The first session is mainly exploratory, where you can share, ask questions, and better understand the process. After that, I recommend 4 consecutive weekly sessions for you to reliably assess your own progress. Change takes time and requires patience."
            },
            {
                q: "Are the sessions confidential?",
                a: "Confidentiality is a primary pillar of our profession. The relationship between the client and the practitioner is 100% Confidential."
            },
            {
                q: "How are the sessions conducted?",
                a: "The sessions can be face-to-face or online based on the client's preference."
            },
            {
                q: "What can't I talk about in the sessions?",
                a: "There is nothing you can't talk about. This time and space is your investment for yourself, and you have the right to ask and disclose as freely as you wish. You are encouraged to be open and transparent. This is a collaborative relationship, your input, opinions, feelings and thoughts are always encouraged."
            }
        ]
    }
];

// Wellness Counseling service data for integration
export const wellnessCounseling = {
    name: "Wellness Counseling",
    slug: "wellness-counseling",
    icon: RiMentalHealthLine,
    description: "Holistic Mental Health Support Through Psychotherapy And Counseling",
    fullDescription: "Our Wellness Counseling Service Provides A Safe, Confidential Space For Individuals, Couples, And Families To Explore Mental Health Concerns. Dr. Aziza Yaser Uses A Holistic And Integrative Approach Combining Various Modalities Including CBT, Talk Therapy, Hypnotherapy, EMDR, And More To Help You Achieve Mental Strength And Emotional Well-Being.",
    doctor: doctors[0],
    sessionInfo: {
        duration: "1 hour",
        format: "Face-to-face or Online",
        frequency: "Weekly sessions recommended (1-4 to start)"
    },
    faqs: doctors[0].faqs
};
