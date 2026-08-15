import React from "react";

const partners = [
    { name: "NextCare", logo: "/insurances/nextcare.svg", bg: "#FFFFFF" },
    { name: "GlobeMed", logo: "/insurances/globemed.png", bg: "#FFFFFF" },
    { name: "MedNet", logo: "/insurances/mednet.svg", bg: "#FFFFFF" },
    { name: "Health 360", logo: "/insurances/health 360.png", bg: "#111827" },
    { name: "GEMS", logo: "/insurances/GEMS.png", bg: "#F9FAFB" },
    { name: "GIG Bahrain", logo: "/insurances/gig.png", bg: "#100864" },
    { name: "Tawuniya", logo: "/insurances/tawuniya.png", bg: "#F9FAFB" },
];

const ExtraAboutSections = () => {
    return (
        <div className="space-y-0">
            {/* Insurance Partners Section */}
            <section className="py-10 md:py-16 px-4 md:px-9 bg-heading text-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Left - Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-white/80 font-semibold tracking-widest uppercase text-sm block mb-2">Partners</span>
                        <h2 className="font-primary text-4xl mb-6">Our Insurance Partners</h2>
                        <p className="text-white/80 leading-relaxed mb-8">
                            We work with most major insurance providers to ensure you receive the care you need with
                            maximum convenience and minimum hassle.
                        </p>
                        <div className="inline-flex py-3 px-6 bg-white text-heading rounded-full text-sm font-medium">
                            Accepting All Major Insurance Companies In Bahrain
                        </div>
                    </div>

                    {/* Right - Spherical Orbit */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px]">
                            {/* Orbit rings */}
                            <div className="absolute inset-0 rounded-full border border-white/10" />
                            <div className="absolute inset-[14%] rounded-full border border-white/5" />

                            {/* Center sphere */}
                            <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-white/15 to-white/[0.02] backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center shadow-2xl">
                                <span className="font-primary text-3xl sm:text-4xl text-white leading-none">7+</span>
                                <span className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest mt-1">Providers</span>
                            </div>

                            {/* Rotating logo ring */}
                            <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                                {partners.map((partner, i) => {
                                    const angle = (i / partners.length) * 2 * Math.PI - Math.PI / 2;
                                    const radius = 50; // percent from center
                                    const x = 50 + radius * Math.cos(angle);
                                    const y = 50 + radius * Math.sin(angle);
                                    return (
                                        <div
                                            key={i}
                                            className="absolute w-16 h-16 sm:w-20 sm:h-20 -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]"
                                            style={{ left: `${x}%`, top: `${y}%` }}
                                        >
                                            <div
                                                className="w-full h-full rounded-2xl p-2.5 flex items-center justify-center shadow-xl border border-white/10 hover:scale-110 transition-transform duration-300"
                                                style={{ backgroundColor: partner.bg }}
                                            >
                                                <img
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    className="max-w-full max-h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraAboutSections;
