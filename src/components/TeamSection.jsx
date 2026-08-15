import React, { useState } from "react";
import { teamDepartments, teamMembers } from "../data/teamData";

const initialsOf = (name) =>
    name
        .replace(/^Dr\.?\s+/i, "")
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();

const MemberCard = ({ member }) => {
    const [imgFailed, setImgFailed] = useState(false);
    const showImage = member.image && !member.image.includes("placeholder") && !imgFailed;

    return (
        <div className="group relative rounded-3xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
            {/* Image Box */}
            <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {showImage ? (
                    <img
                        src={member.image}
                        alt={member.name}
                        onError={() => setImgFailed(true)}
                        className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 text-center">
                        <div className="w-20 h-20 rounded-full bg-heading/10 flex items-center justify-center mb-2 shadow-inner border border-heading/10">
                            <span className="font-primary text-3xl font-bold text-heading">
                                {initialsOf(member.name)}
                            </span>
                        </div>
                    </div>
                )}

                {/* Subtle top role badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block bg-heading/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md tracking-wider uppercase">
                        {member.department}
                    </span>
                </div>
            </div>

            {/* Bottom Info Section */}
            <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="font-primary text-xl font-bold text-heading group-hover:text-brand-primary transition-colors leading-tight">
                        {member.name}
                    </h4>
                    <p className="text-[#D98E00] text-sm font-semibold mt-1">
                        {member.role}
                    </p>
                </div>

                {member.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-100">
                        {member.specialties.map((s, i) => (
                            <span
                                key={i}
                                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const TeamSection = () => {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-10 md:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10">

                {/* Section Header */}
                <div className="text-center mb-12 flex flex-col items-center">
                    <div className="flex items-center gap-4 text-4xl md:text-6xl lg:text-7xl font-black text-heading tracking-tight leading-none whitespace-normal md:whitespace-nowrap">
                        <span className="font-secondary-600 font-normal">Meet</span>
                        <span className="text-[#F9B70A] italic font-secondary lowercase font-medium">our Team</span>
                    </div>
                </div>

                {/* Departments */}
                <div className="space-y-12">
                    {teamDepartments.map((dept) => {
                        const members = teamMembers.filter((m) => m.department === dept.id);
                        if (members.length === 0) return null;

                        return (
                            <div key={dept.id}>
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="font-primary text-2xl md:text-3xl text-heading whitespace-nowrap font-bold">
                                        {dept.label}
                                    </h3>
                                    <span className="h-0.5 flex-1 bg-gray-200 rounded-full" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {members.map((member, i) => (
                                        <MemberCard key={i} member={member} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
