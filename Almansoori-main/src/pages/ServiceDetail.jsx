import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import BulletText from "../components/BulletText";
import { BrandText } from "../components/Brand";
import { services } from "../data/services";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const TreatmentCardItem = ({ treatment, index, isExpanded, onToggle }) => {
    const treatmentId = treatment.name.toLowerCase().includes("fed") 
        ? "fed" 
        : treatment.name.toLowerCase().split(' ').join('-');
    
    const textLength = typeof treatment.description === 'string' ? treatment.description.length : 0;
    const lineCount = typeof treatment.description === 'string' 
        ? treatment.description.split(/\r?\n/).filter(Boolean).length 
        : 0;
    const isLongDescription = textLength > 180 || lineCount > 2;
    const hasFooter = (treatment.price || treatment.price === 0 || treatment.featured);

    return (
        <div
            id={treatmentId}
            className={`w-full rounded-3xl border transition-all duration-300 flex flex-col justify-between p-6 ${
                isExpanded
                    ? 'bg-gray-100 border-gray-300 ring-2 ring-gray-400/50 shadow-xl'
                    : 'bg-white border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300'
            } ${treatment.featured && !isExpanded ? 'ring-2 ring-heading' : ''}`}
        >
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    {treatment.image && (
                        <div className="h-44 -mx-6 -mt-6 mb-4 overflow-hidden flex-shrink-0 bg-gray-100 rounded-t-3xl">
                            <img
                                src={treatment.image}
                                alt={treatment.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    )}
                    <h3 className="font-primary text-lg md:text-xl text-heading mb-2.5 font-bold transition-colors leading-snug pt-0.5">
                        {treatment.name}
                    </h3>
                    {treatment.description && (
                        <div className="text-sm md:text-base text-gray-600 leading-relaxed mt-2">
                            {isExpanded ? (
                                <div className="space-y-2">
                                    <BulletText text={treatment.description} />
                                </div>
                            ) : (
                                <div className={isLongDescription ? "line-clamp-4" : ""}>
                                    <BulletText text={treatment.description} />
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {isLongDescription && (
                    <div className="mt-4 pt-1">
                        <button
                            type="button"
                            onClick={onToggle}
                            className={`font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer px-4 py-1.5 rounded-full transition-all border shadow-xs ${
                                isExpanded
                                    ? "bg-white text-heading hover:bg-gray-200 border-gray-300"
                                    : "bg-gray-50 text-heading hover:bg-heading hover:text-white border-gray-200 hover:border-heading"
                            }`}
                        >
                            <span>{isExpanded ? "Show Less" : "Read More"}</span>
                            {isExpanded ? (
                                <FaChevronUp className="text-[10px]" />
                            ) : (
                                <FaChevronDown className="text-[10px]" />
                            )}
                        </button>
                    </div>
                )}
            </div>

            {hasFooter && (
                <div className="pt-4 mt-auto">
                    <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                        {(treatment.price || treatment.price === 0) && (
                            <span className="bg-white text-heading px-3.5 py-1.5 rounded-full text-sm font-extrabold border border-gray-200">
                                {typeof treatment.price === 'number' ? `${treatment.price} BD` : treatment.price}
                            </span>
                        )}
                        {treatment.featured && (
                            <span className="text-xs bg-heading text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                                Popular
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const ServiceDetail = () => {
    const { slug, subSlug } = useParams();
    const { hash } = useLocation();
    const [expandedCardIndex, setExpandedCardIndex] = useState(null);

    const targetSlug = slug || "dental";

    const service = services.find(
        (s) => s.title.toLowerCase() === targetSlug.toLowerCase() || s.slug === targetSlug
    ) || services[0];

    const subService = subSlug 
        ? service?.subServices?.find((sub) => sub.slug === subSlug)
        : (service?.subServices && service.subServices.length > 0 ? service.subServices[0] : null);

    // Reset expanded card when route or service changes
    useEffect(() => {
        setExpandedCardIndex(null);
    }, [slug, subSlug]);

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 300);
            }
        }
    }, [hash]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-36 md:pt-28">
                <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-200 max-w-md mx-4">
                    <h2 className="font-primary text-2xl text-heading mb-4 font-bold">
                        Service Not Found
                    </h2>
                    <p className="text-gray-600 mb-6">
                        The service you are looking for does not exist or has been moved.
                    </p>
                    <Link to="/services/dental" className="primary-btn">
                        <span>View Dental Services</span>
                    </Link>
                </div>
            </div>
        );
    }

    const displayTitle = subService ? subService.name : service.title;
    const displayDescription = subService
        ? subService.fullDescription || subService.description
        : service.fullDescription || service.description;

    const displayTreatments = subService ? subService.treatments : service.treatments;
    const displayFAQs = subService?.faqs || service?.faqs;

    return (
        <main>
            <div className="pt-36 sm:pt-40 md:pt-36 pb-16 bg-gradient-to-b from-white to-gray-50/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                {service.icon && (
                                    <span className="text-3xl md:text-4xl text-brand-primary mt-1 flex-shrink-0">
                                        {React.createElement(service.icon)}
                                    </span>
                                )}
                                <h1 className="font-primary text-3xl md:text-5xl font-bold text-heading leading-[1.2] md:leading-[1.15]">
                                    {displayTitle}
                                </h1>
                            </div>

                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                <BrandText>{displayDescription}</BrandText>
                            </p>

                            <Link to="/contact" className="primary-btn inline-block">
                                <span>Book Consultation</span>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-gray-100 rounded-3xl overflow-hidden h-[350px] md:h-[400px] border border-gray-200">
                                <img
                                    src={subService?.image || service.overviewImage || service.headerImage}
                                    alt={displayTitle}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Treatments Section */}
                    {displayTreatments && displayTreatments.length > 0 && (
                        <div className="mb-16 w-full flex flex-col items-center">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center w-full">
                                Treatments
                            </h2>
                            <div className={`grid gap-6 items-start w-full ${
                                displayTreatments.length === 1
                                    ? 'grid-cols-1 max-w-[360px] mx-auto'
                                    : displayTreatments.length === 2
                                    ? 'grid-cols-1 sm:grid-cols-2 max-w-[744px] mx-auto'
                                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'
                            }`}>
                                {displayTreatments.map((treatment, index) => (
                                    <TreatmentCardItem
                                        key={index}
                                        treatment={treatment}
                                        index={index}
                                        isExpanded={expandedCardIndex === index}
                                        onToggle={() => setExpandedCardIndex(expandedCardIndex === index ? null : index)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQ Section */}
                    {displayFAQs && displayFAQs.length > 0 && (
                        <div className="mb-16">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center whitespace-normal md:whitespace-nowrap font-bold">
                                Frequently Asked Questions
                            </h2>
                            <div className="max-w-3xl mx-auto space-y-4">
                                {displayFAQs.map((faq, index) => (
                                    <div key={index} className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm">
                                        <h3 className="font-primary text-lg md:text-xl text-heading mb-2 font-bold leading-snug">
                                            {faq.q}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA Box */}
                    <div className="bg-[#111827] text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl mb-16">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="font-primary text-2xl md:text-4xl mb-4 font-bold">
                                Ready to Book Your Appointment?
                            </h2>
                            <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed">
                                Schedule a consultation with our experienced team at <BrandText>almansoori</BrandText> Dental & Medical Center.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    to="/contact"
                                    className="px-6 py-2.5 rounded-full font-bold shadow-md bg-white text-heading hover:bg-brand-accent hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                    <span>Book Online</span>
                                </Link>
                                <a
                                    href="tel:+97317760666"
                                    className="outline-btn hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <span>Call 17760666</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Services */}
            <div className="py-12 px-4 md:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center whitespace-normal md:whitespace-nowrap font-bold">
                        Explore Our Other Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch justify-center max-w-5xl mx-auto">
                        {services.filter(s => s.slug !== service.slug).slice(0, 3).map((otherService, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={`/services/${otherService.slug}`}
                                    className="bg-white border border-gray-200/80 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full"
                                >
                                    <div>
                                        <h3 className="font-primary text-lg md:text-xl text-heading mb-2.5 font-bold transition-colors leading-snug pt-0.5">
                                            {otherService.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                                            {otherService.description}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServiceDetail;
