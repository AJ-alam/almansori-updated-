import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { mainServices } from "../data/mainServices";

const ServiceCard = ({ service, index, isActive, onHover }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        onHover(index);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div
            className={`group relative cursor-pointer transition-all duration-700 ease-out ${isActive
                ? 'md:w-[45%]'
                : 'md:flex-1'
                } w-full`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/services/${service.slug}`} className="block h-full">
                {/* Card Container */}
                <div className="relative h-[360px] sm:h-[400px] md:h-[440px] rounded-3xl overflow-hidden">
                    {/* Video/Image Background */}
                    <div className="absolute inset-0">
                        <video
                            ref={videoRef}
                            muted
                            loop
                            playsInline
                            className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-110' : 'scale-100'
                                }`}
                        >
                            <source src={service.video} type="video/mp4" />
                        </video>

                        {/* Gradient Overlays */}
                        <div className={`absolute inset-0 transition-opacity duration-500 ${isActive
                            ? 'bg-gradient-to-t from-black/80 via-black/30 to-transparent'
                            : 'bg-gradient-to-t from-black/90 via-black/60 to-black/40'
                            }`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6 md:p-8 pointer-events-none">
                        {/* Top Section - Number Badge */}
                        <div className="flex items-center justify-between">
                            <div className={`flex items-center justify-center transition-all duration-500 ${isActive
                                ? 'w-12 h-12 md:w-14 md:h-14 bg-white text-gray-900 rounded-2xl'
                                : 'w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm text-white rounded-xl border border-white/20'
                                }`}>
                                <span className="font-primary text-lg md:text-xl font-bold">0{index + 1}</span>
                            </div>
                        </div>

                        {/* Bottom Section - Title & Description */}
                        <div className="space-y-4">
                            {/* Title */}
                            <h3 className={`font-primary text-white transition-all duration-500 leading-tight ${isActive ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                                }`}>
                                {service.title}
                            </h3>

                            {/* Description & CTA - Only visible when active */}
                            <div className={`transition-all duration-500 overflow-hidden ${isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* CTA Button */}
                                <div className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-2.5 rounded-full font-medium text-sm pointer-events-auto hover:bg-gray-100 transition-colors">
                                    <span>Explore</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Active indicator line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-white transition-all duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}></div>
                </div>
            </Link>
        </div>
    );
};

const HomeServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full bg-gradient-to-br from-gray-700 to-gray-900 py-8 md:py-12">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 md:mb-8">
                <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Our Unique Services</h2>
            </div>

            {/* Services Cards Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-4">
                    {mainServices.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                            isActive={activeIndex === index}
                            onHover={setActiveIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
