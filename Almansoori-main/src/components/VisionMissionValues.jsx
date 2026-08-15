import React from "react";
import { FaEye, FaBullseye, FaHeart } from "react-icons/fa";

const VisionMissionValues = () => {
    const values = [
        { title: "Holistic Approach", desc: "Recognizing the interconnectedness of body, mind, and spirit." },
        { title: "Patient-Centered Care", desc: "Prioritizing individual needs and goals for empowering care." },
        { title: "Integrative Medicine", desc: "Incorporating evidence-based conventional and complementary therapies." },
        { title: "Prevention and Wellness", desc: "Promoting proactive healthcare and lifestyle modifications." },
        { title: "Empowerment and Education", desc: "Providing knowledge and tools for informed health choices." },
        { title: "Collaboration", desc: "Fostering interdisciplinary teamwork and coordinated care." },
        { title: "Respect and Inclusivity", desc: "Creating a safe, welcoming environment for every individual." },
    ];

    return (
        <section className="w-full section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Vision */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                            <FaEye className="text-3xl text-heading" />
                        </div>
                        <h3 className="font-primary text-3xl text-heading mb-4">Our Vision</h3>
                        <p className="text-body leading-relaxed italic">
                            "To be the trusted healthcare provider of choice, delivering outstanding patient care,
                            advancing medical knowledge, and positively impacting the health and well-being of our community."
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                            <FaBullseye className="text-3xl text-heading" />
                        </div>
                        <h3 className="font-primary text-3xl text-heading mb-4">Our Mission</h3>
                        <p className="text-body leading-relaxed italic">
                            "To provide exceptional, patient-centered healthcare that promotes wellness, fosters
                            innovation and delivers compassionate care to individuals and their families."
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="text-center mb-12">
                    <h3 className="font-primary text-4xl text-heading mb-4">Our Core Values</h3>
                    <p className="text-body max-w-2xl mx-auto">
                        These fundamental principles guide every decision we make and every interaction we have with our patients.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((v, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-heading hover:shadow-lg transition-shadow">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                <FaHeart className="text-heading" />
                            </div>
                            <h4 className="font-primary text-lg text-heading mb-2">{v.title}</h4>
                            <p className="text-body text-sm leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionMissionValues;
