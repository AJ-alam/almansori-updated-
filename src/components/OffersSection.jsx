import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { getFeaturedOffers } from "../data/offers";
import OfferCard from "./OfferCard";

const OffersSection = () => {
    const featuredOffers = getFeaturedOffers();

    return (
        <section className="w-full bg-gradient-to-br from-gray-700 to-gray-900 py-10 md:py-14">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                    <div className="max-w-xl">
                        <h2 className="font-primary text-4xl md:text-5xl text-white mb-3 whitespace-normal md:whitespace-nowrap">Packages</h2>
                        <p className="text-white/70">
                            Discover our exclusive packages designed to help
                            you look and feel your best — all at irresistible prices.
                        </p>
                    </div>

                    <Link
                        to="/offers"
                        className="bg-white text-heading px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-fit flex-shrink-0 flex items-center gap-2"
                    >
                        <span>View All Packages</span>
                        <FaArrowRight className="text-sm" />
                    </Link>
                </div>

                {/* Featured Offers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredOffers.slice(0, 3).map((offer, index) => (
                        <OfferCard
                            key={offer.id}
                            offer={offer}
                            featured={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffersSection;
