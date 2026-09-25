import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFilter, FaArrowRight, FaPlus, FaCheck } from "react-icons/fa6";
import OfferCard from "../components/OfferCard";
import { offerCategories, getOffersByCategory } from "../data/offers";
import AnimatedSection from "../components/AnimatedSection";

const OffersPage = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [expandedOfferId, setExpandedOfferId] = useState(null);
    const filteredOffers = getOffersByCategory(activeCategory);

    const toggleOfferExpand = (id) => {
        setExpandedOfferId((prev) => (prev === id ? null : id));
    };

    const renderCategoryOffers = (categoryId, offersToRender) => {
        if (categoryId === "designyourown" || categoryId === "bloodtest") {
            return (
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    {categoryId === "designyourown" ? (
                        <div className="p-6 md:p-8">
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">{offersToRender[0]?.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {offersToRender[0]?.services?.map((service, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group cursor-default">
                                        <span className="font-medium text-heading group-hover:text-brand-accent transition-colors">{service.name}</span>
                                        <span className="font-bold text-brand-primary">{service.price} BHD</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <tbody>
                                    {offersToRender.map((offer) => {
                                        const isExpanded = expandedOfferId === offer.id;
                                        return (
                                            <React.Fragment key={offer.id}>
                                                <tr
                                                    onClick={() => toggleOfferExpand(offer.id)}
                                                    className={`border-b border-gray-100/80 transition-all duration-200 group cursor-pointer select-none ${
                                                        isExpanded
                                                            ? "bg-gray-100/80 border-l-4 border-l-brand-accent"
                                                            : "hover:bg-gray-100"
                                                    }`}
                                                >
                                                    {/* Left Column: Package Name & Expanded Details */}
                                                    <td className="py-4 sm:py-5 px-4 sm:px-6 align-top">
                                                        <div className="font-primary text-base sm:text-lg font-bold text-heading group-hover:text-brand-accent transition-colors">
                                                            {offer.title}
                                                        </div>

                                                        {/* Show description and number of tests directly under name when expanded */}
                                                        {isExpanded && (
                                                            <div className="mt-2.5 space-y-2 animate-fadeIn">
                                                                <div className="inline-flex items-center gap-2">
                                                                    <span className="text-xs font-bold text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded-full">
                                                                        {offer.testCount || "Panel"}
                                                                    </span>
                                                                    {offer.originalPrice && offer.originalPrice > offer.salePrice && (
                                                                        <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full font-bold">
                                                                            Save {(offer.originalPrice - offer.salePrice).toFixed(offer.originalPrice % 1 !== 0 || offer.salePrice % 1 !== 0 ? 1 : 0)} BHD
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                                                                    {offer.description}
                                                                </p>
                                                                <div className="flex items-center gap-2 pt-1.5 flex-wrap">
                                                                    <a
                                                                        href={`https://wa.me/97332221676?text=${encodeURIComponent(`Hello Al Mansoori Clinic, I would like to book the "${offer.title}" blood test package (${offer.salePrice} BHD).`)}`}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        onClick={(e) => e.stopPropagation()}
                                                                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-xs"
                                                                    >
                                                                        <FaWhatsapp className="text-sm" />
                                                                        <span>WhatsApp</span>
                                                                    </a>
                                                                    <Link
                                                                        to="/contact"
                                                                        onClick={(e) => e.stopPropagation()}
                                                                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-bold bg-heading text-white hover:bg-brand-primary transition-colors shadow-xs"
                                                                    >
                                                                        <span>Book Online</span>
                                                                        <FaArrowRight className="text-[10px]" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </td>

                                                    {/* Right Column: Price & Plus/Collapse Icon */}
                                                    <td className="py-4 sm:py-5 px-4 sm:px-6 text-right whitespace-nowrap align-top">
                                                        <div className="flex items-center justify-end gap-3 sm:gap-4">
                                                            <div className="text-right">
                                                                <span className="font-primary text-base sm:text-lg font-black text-heading block whitespace-nowrap">
                                                                    {offer.salePrice} <span className="text-xs font-bold uppercase text-gray-400">BHD</span>
                                                                </span>
                                                                {offer.originalPrice && offer.originalPrice > offer.salePrice && (
                                                                    <span className="text-[11px] sm:text-xs text-gray-400 line-through block">
                                                                        {offer.originalPrice} BHD
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    toggleOfferExpand(offer.id);
                                                                }}
                                                                title={isExpanded ? "Collapse details" : "Expand details"}
                                                                aria-label={isExpanded ? "Collapse details" : "Expand details"}
                                                                className="w-8 h-8 flex items-center justify-center text-heading group-hover:text-brand-accent group-hover:scale-110 cursor-pointer flex-shrink-0 transition-transform duration-200"
                                                            >
                                                                <span className={`text-2xl font-light leading-none transition-transform duration-300 inline-block select-none ${
                                                                    isExpanded ? "rotate-45 text-brand-accent font-normal scale-110" : ""
                                                                }`}>
                                                                    +
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </React.Fragment>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            );
        }

        // Default: Offer Cards Grid
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch justify-center max-w-6xl mx-auto">
                {offersToRender.map((offer) => (
                    <OfferCard
                        key={offer.id}
                        offer={offer}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="w-full min-h-screen pt-20 sm:pt-24 lg:pt-20">
            <div className="bg-gray-50">
                <div className="pt-1 pb-10 md:pt-2 md:pb-12 px-4 md:px-8 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        {/* Category Filter Section */}
                        <div className="mb-5 md:mb-6">
                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                {offerCategories.map((category) => {
                                    const Icon = category.icon;
                                    const isActive = activeCategory === category.id;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${isActive
                                                ? "bg-brand-primary text-white border-brand-primary shadow-lg scale-105"
                                                : "bg-white text-gray-600 border-gray-200 hover:border-brand-primary hover:text-brand-primary"
                                                }`}
                                        >
                                            <Icon className="text-lg" />
                                            <span>{category.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Offers Content */}
                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            {activeCategory === "all" ? (
                                <div className="space-y-12">
                                    {offerCategories.filter(c => c.id !== "all").map(category => {
                                        const catOffers = getOffersByCategory(category.id);
                                        if (catOffers.length === 0) return null;

                                        return (
                                            <div key={category.id}>
                                                {renderCategoryOffers(category.id, catOffers)}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                renderCategoryOffers(activeCategory, filteredOffers)
                            )}
                        </AnimatedSection>

                        {/* Empty State */}
                        {filteredOffers.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-3xl">
                                <div className="text-6xl mb-4">🎁</div>
                                <h3 className="font-primary text-2xl md:text-3xl text-heading mb-2 font-bold">No Packages Available</h3>
                                <p className="text-gray-500 text-lg">
                                    No packages available in this category at the moment.
                                </p>
                                <button
                                    onClick={() => setActiveCategory("all")}
                                    className="mt-6 px-6 py-3 bg-brand-primary text-white rounded-full font-medium hover:opacity-90 transition-all"
                                >
                                    View All Packages
                                </button>
                            </div>
                        )}

                        {/* WhatsApp CTA */}
                        <div className="mt-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10">
                                <h3 className="font-primary text-2xl md:text-3xl text-white mb-4 font-bold">
                                    Have Questions About Our Packages?
                                </h3>
                                <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
                                    Our team is ready to help you choose the perfect package for your
                                    needs. Reach out to us on WhatsApp for instant assistance.
                                </p>
                                <a
                                    href="https://wa.me/97332221676"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-10 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                                >
                                    <FaWhatsapp className="text-2xl" />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OffersPage;
