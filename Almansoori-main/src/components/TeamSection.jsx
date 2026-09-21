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
        <div className="group relative rounded-3xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full">
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
                        <div className="w-24 h-24 rounded-full bg-heading/10 flex items-center justify-center mb-2 shadow-inner border border-heading/10">
                            <span className="font-primary text-4xl font-bold text-heading">
                                {initialsOf(member.name)}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Info Section */}
            <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="font-primary text-lg md:text-xl font-bold text-heading group-hover:text-brand-accent transition-colors leading-snug pt-1 pb-0.5">
                        {member.name}
                    </h4>
                    <p className="text-brand-accent text-sm font-semibold mt-1">
                        {member.role}
                    </p>
                </div>

                {member.specialties && member.specialties.length > 0 && (
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

const SupportCard = ({ member }) => {
    const [imgFailed, setImgFailed] = useState(false);
    const showImage = member.image && !member.image.includes("placeholder") && !imgFailed;

    return (
        <div className="group relative rounded-2xl overflow-hidden bg-[#e5e5e5] border border-gray-300/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between h-full">
            {/* Top Image / Placeholder Area */}
            <div className="relative h-64 w-full overflow-hidden bg-[#ededed]">
                {showImage ? (
                    <img
                        src={member.image}
                        alt={member.name}
                        onError={() => setImgFailed(true)}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#f0f0f0]">
                        <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center shadow-xs border border-gray-300/50">
                            <span className="font-primary text-2xl font-bold text-heading">
                                {initialsOf(member.name)}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Content Container */}
            <div className="p-4 bg-[#e5e5e5] flex-1 flex flex-col justify-center min-h-[5.5rem]">
                <h4 className="font-primary text-lg md:text-xl font-bold text-heading leading-snug pt-1 pb-0.5 group-hover:text-brand-accent transition-colors whitespace-nowrap overflow-visible">
                    {member.name}
                </h4>
                <p className="text-xs font-semibold text-gray-600 mt-0.5 truncate">
                    {member.role}
                </p>
            </div>
        </div>
    );
};

const TeamSection = () => {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 pt-8 md:pt-12 pb-12 md:pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10">

                {/* Section Header */}
                <div className="text-center mb-4 md:mb-6 flex flex-col items-center">
                    <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight">
                        Meet Our Team
                    </h2>
                </div>

                {/* Departments */}
                <div className="space-y-12">
                    {teamDepartments.map((dept) => {
                        const members = teamMembers.filter((m) => m.department === dept.id);
                        if (members.length === 0) return null;

                        const isSupport = dept.id === "support";

                        return (
                            <div key={dept.id}>
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="font-primary text-2xl md:text-3xl text-heading whitespace-nowrap font-bold">
                                        {dept.label}
                                    </h3>
                                    <span className="h-0.5 flex-1 bg-gray-200 rounded-full" />
                                </div>

                                {isSupport ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5">
                                        {members.map((member, i) => (
                                            <SupportCard key={i} member={member} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {members.map((member, i) => (
                                            <MemberCard key={i} member={member} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
