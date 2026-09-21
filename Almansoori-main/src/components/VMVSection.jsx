import React from "react";
import { visionMissionValues } from "../data/aboutContent";

const VMVSection = () => {
    const { vision, mission, values } = visionMissionValues;

    const pillars = [
        {
            key: "vision",
            index: "01",
            label: "Our Vision",
            content: vision.content,
            className: "bg-brand-primary",
        },
        {
            key: "mission",
            index: "02",
            label: "Our Mission",
            content: mission.content,
            className: "bg-heading",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#f6f7f9] py-10 md:py-16">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-brand-accent/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
                {/* Section intro */}
                <div className="mb-8 md:mb-12 max-w-none">
                    <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight whitespace-normal md:whitespace-nowrap">
                        Purpose in <span className="brand-gradient">Every Detail</span>
                    </h2>
                </div>

                {/* Vision + Mission pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {pillars.map((p) => (
                        <article
                            key={p.key}
                            className={`group relative overflow-hidden rounded-[2rem] ${p.className} p-8 md:p-12 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-translate-y-2`}
                        >
                            {/* Ghost numeral */}
                            <span className="pointer-events-none absolute -top-8 right-4 select-none font-primary text-[9rem] md:text-[12rem] font-black leading-none text-white/10 transition-transform duration-500 group-hover:scale-110">
                                {p.index}
                            </span>

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="font-primary mb-4 text-2xl md:text-3xl font-black uppercase tracking-wide text-brand-accent">
                                    {p.label}
                                </h3>
                                <p className="font-secondary-500 normal-case text-sm md:text-base leading-relaxed text-white/85">
                                    {p.content}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Core Values */}
                <div className="mt-12 md:mt-16">
                    <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h3 className="font-primary text-2xl md:text-3xl font-bold uppercase tracking-wide text-heading">
                            Our Core <span className="text-brand-primary">Values</span>
                        </h3>
                        <div className="h-1 w-24 rounded-full bg-brand-accent md:mb-3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 justify-center max-w-5xl mx-auto">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="group relative flex flex-col rounded-2xl border border-gray-200/80 bg-white p-7 md:p-8 transition-all duration-300 hover:border-brand-primary hover:shadow-[0_18px_45px_-18px_rgba(0,0,0,0.25)] hover:-translate-y-1"
                            >
                                {/* Index tag */}
                                <span className="absolute right-6 top-6 text-sm font-bold text-gray-200 transition-colors duration-300 group-hover:text-brand-accent">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <h4 className="font-primary mb-3 text-lg md:text-xl font-bold uppercase tracking-wide text-heading pr-8">
                                    {v.title}
                                </h4>
                                <p className="font-secondary-500 normal-case text-sm md:text-base leading-relaxed text-body">
                                    {v.description}
                                </p>

                                {/* Bottom accent line */}
                                <span className="mt-6 h-0.5 w-10 rounded-full bg-gray-200 transition-all duration-300 group-hover:w-full group-hover:bg-brand-primary" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VMVSection;
