import React, { useState } from "react";
import { FaWhatsapp, FaFilter } from "react-icons/fa6";
import OfferCard from "../components/OfferCard";
import { offerCategories, getOffersByCategory } from "../data/offers";
import AnimatedSection from "../components/AnimatedSection";

const OffersPage = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredOffers = getOffersByCategory(activeCategory);

    const renderCategoryOffers = (categoryId, offersToRender) => {
        if (categoryId === "designyourown" || categoryId === "bloodtest") {
            return (
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    {categoryId === "designyourown" ? (
                        <div className="p-6 md:p-8">
                            <p className="text-gray-600 mb-6">{offersToRender[0]?.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {offersToRender[0]?.services?.map((service, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                        <span className="font-medium text-heading">{service.name}</span>
                                        <span className="font-bold text-brand-primary">{service.price} BHD</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="py-4 px-6 font-semibold text-gray-600 text-sm uppercase tracking-wider">Package Name</th>
                                        <th className="py-4 px-6 font-semibold text-gray-600 text-sm uppercase tracking-wider">Tests Included</th>
                                        <th className="py-4 px-6 font-semibold text-gray-600 text-sm uppercase tracking-wider text-right">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {offersToRender.map((offer) => (
                                        <tr key={offer.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="font-medium text-heading mb-1">{offer.title}</div>
                                                <div className="text-sm text-gray-500">{offer.description}</div>
                                            </td>
                                            <td className="py-4 px-6 text-gray-600">
                                                <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">
                                                    {offer.testCount || offer.includes[0]}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <span className="text-lg font-bold text-heading">{offer.salePrice} BHD</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            );
        }

        // Default: Offer Cards Grid
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {offersToRender.map((offer, index) => (
                    <OfferCard
                        key={offer.id}
                        offer={offer}
                        featured={index === 0 && activeCategory === "all"}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="w-full min-h-screen pt-28 lg:pt-24">
            <div className="bg-gray-50">
                <div className="py-10 md:py-14 px-4 md:px-8 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        {/* Category Filter Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-4">
                                <FaFilter className="text-brand-primary" />
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Filter by Category
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-3">
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

                        {/* Results Count */}
                        <div className="mb-8">
                            <p className="text-gray-500">
                                Showing <span className="font-semibold text-heading">{filteredOffers.length}</span> packages
                                {activeCategory !== "all" && (
                                    <span> in <span className="font-semibold text-brand-primary">{offerCategories.find(c => c.id === activeCategory)?.name}</span></span>
                                )}
                            </p>
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
                                                <div className="mb-6">
                                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-primary text-heading capitalize whitespace-normal md:whitespace-nowrap">{category.name}</h2>
                                                </div>
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
                                <h3 className="font-primary text-2xl text-heading mb-2">No Packages Available</h3>
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
                                <h3 className="font-primary text-2xl md:text-4xl text-white mb-4">
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
