import React from 'react';

const cards = [
    {
        title: "School Visits",
        intro: "We deliver fun, interactive dental education to schools through our mobile dental unit.",
        more: "With screenings and engaging activities, we teach kids proper oral care and the importance of regular check-ups — helping build healthy habits from an early age.",
        points: [],
        theme: "brand",
    },
    {
        title: "Education",
        intro: "We promote dental and overall wellbeing by raising awareness on key health issues:",
        points: ["Diabetes Awareness", "Cancer Awareness", "Mental Health Awareness"],
        theme: "accent",
    },
];

const themes = {
    brand: {
        card: "bg-brand-primary text-white border-transparent",
        title: "text-white",
        body: "text-white/85",
    },
    accent: {
        card: "bg-brand-accent text-heading border-transparent",
        title: "text-heading",
        body: "text-heading/80",
    },
    white: {
        card: "bg-white text-body border-gray-100",
        title: "text-heading",
        body: "text-gray-600",
    },
};

const CommunityCard = ({ card }) => {
    const t = themes[card.theme];

    return (
        <div className={`flex flex-col h-full p-8 rounded-[2rem] border shadow-xl shadow-gray-200/40 transition-all duration-300 hover:-translate-y-2 group ${t.card}`}>
            <h3 className={`font-primary text-2xl md:text-3xl mb-4 font-bold leading-tight ${t.title}`}>{card.title}</h3>

            <p className={`text-sm md:text-base leading-relaxed ${t.body}`}>{card.intro}</p>

            {card.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                    {card.points.map((p, i) => (
                        <li key={i} className={`text-sm md:text-base font-medium leading-relaxed ${t.body}`}>
                            {p}
                        </li>
                    ))}
                </ul>
            )}

            {card.more && (
                <p className={`mt-3 text-sm md:text-base leading-relaxed ${t.body}`}>{card.more}</p>
            )}
        </div>
    );
};

const CommunityServiceSection = () => {
    return (
        <section className="py-10 md:py-14 bg-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                {/* Heading */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-tight font-bold">
                        Our Contribution To The Community
                    </h2>
                </div>

                {/* Equal Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
                    {cards.map((card, i) => (
                        <CommunityCard key={i} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityServiceSection;
