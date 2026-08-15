import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { mainServices } from "../data/mainServices";
import { FaArrowRight, FaTooth, FaSpa, FaUserMd, FaLeaf } from "react-icons/fa";

const icons = [FaTooth, FaSpa, FaUserMd, FaLeaf];

const ServiceCard = ({ service, index, isActive, onHover }) => {
    const videoRef = useRef(null);
    const Icon = icons[index] || FaTooth;

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
                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
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
                        {/* Top Section - Number & Icon */}
                        <div className="flex items-center justify-between">
                            {/* Number Badge */}
                            <div className={`flex items-center justify-center transition-all duration-500 ${isActive
                                ? 'w-14 h-14 bg-white text-gray-900 rounded-2xl'
                                : 'w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-xl border border-white/20'
                                }`}>
                                <span className="font-primary text-xl font-bold">0{index + 1}</span>
                            </div>

                            {/* Icon - visible when active */}
                            <div className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                }`}>
                                <Icon className="text-white text-xl" />
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
                                <div className="inline-flex items-center gap-3 bg-white text-gray-900 px-5 py-3 rounded-full font-medium text-sm pointer-events-auto hover:bg-gray-100 transition-colors group/btn">
                                    <span>Explore</span>
                                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                                        <FaArrowRight className="text-white text-xs" />
                                    </div>
                                </div>
                            </div>

                            {/* Arrow indicator when not active */}
                            <div className={`transition-all duration-500 ${isActive ? 'opacity-0 max-h-0' : 'opacity-100 max-h-10'
                                }`}>
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:border-white transition-all">
                                    <FaArrowRight className="text-white group-hover:text-gray-900 text-sm transition-colors" />
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
        <section className="w-full bg-gradient-to-br from-gray-700 to-gray-900 py-10 md:py-14">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-xl">
                        <h2 className="font-primary text-4xl md:text-5xl text-white mb-3 whitespace-normal md:whitespace-nowrap">Our Unique Services</h2>
                        <p className="text-white/70">
                            Specialized treatments designed to transform your Health And Well-Being
                            with cutting-edge technology and expert care.
                        </p>
                    </div>

                    <Link
                        to="/services/dental"
                        className="bg-white text-heading px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-fit flex-shrink-0"
                    >
                        <span>View All Services</span>
                    </Link>
                </div>
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

            {/* Bottom Service Tags */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
                <div className="flex flex-wrap gap-3 justify-center">
                    {['Dental Care', 'Aesthetic Treatments', 'Skin Analysis', 'Laser Therapy', 'Hydrafacial', 'Mental Wellness'].map((tag, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80 hover:bg-white hover:text-gray-900 transition-all cursor-pointer"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
