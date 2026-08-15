import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";
import ExpandableText from "./ExpandableText";

const OfferCard = ({ offer, featured = false }) => {
    const hasDiscount = offer.originalPrice && offer.salePrice;
    const discountPercent = hasDiscount ? Math.round(
        ((offer.originalPrice - offer.salePrice) / offer.originalPrice) * 100
    ) : 0;

    return (
        <div
            className={`group relative rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col justify-between ${
                featured
                    ? "bg-heading text-white border border-heading shadow-xl hover:shadow-2xl hover:-translate-y-2"
                    : "bg-white text-heading border border-gray-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2"
            }`}
        >
            {/* Top Bar / Image Container */}
            <div>
                {/* Discount Badge */}
                {hasDiscount && (
                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#FFD922] to-[#F7A800] text-heading font-black px-3.5 py-1 rounded-full text-xs uppercase shadow-md tracking-wider">
                        {discountPercent}% OFF
                    </div>
                )}

                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                    <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div
                        className={`absolute inset-0 ${
                            featured
                                ? "bg-gradient-to-t from-heading via-heading/40 to-transparent"
                                : "bg-gradient-to-t from-gray-900/50 to-transparent"
                        }`}
                    />
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Title */}
                    <h3
                        className={`font-primary text-2xl mb-2 font-bold capitalize ${
                            featured ? "text-white" : "text-heading"
                        }`}
                    >
                        {offer.title}
                    </h3>

                    {/* Description */}
                    <ExpandableText text={offer.description} featured={featured} className="mb-4 text-sm leading-relaxed" />

                    {/* Includes List */}
                    {offer.includes && offer.includes.length > 0 && (
                        <div className="mb-5">
                            <p
                                className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${
                                    featured ? "text-white/60" : "text-gray-400"
                                }`}
                            >
                                INCLUDES:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {offer.includes.map((item, index) => (
                                    <span
                                        key={index}
                                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                                            featured
                                                ? "bg-white/15 text-white/90 border border-white/10"
                                                : "bg-gray-100 text-gray-700 border border-gray-200/50"
                                        }`}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Price & CTA Area */}
            <div className="px-6 pb-6 pt-0">
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4 pt-3 border-t border-gray-100/20">
                    <span
                        className={`text-3xl font-black ${
                            featured ? "text-[#FFD922]" : "text-heading"
                        }`}
                    >
                        {offer.salePrice} BHD
                    </span>
                    {hasDiscount && (
                        <span
                            className={`text-sm font-semibold line-through ${
                                featured ? "text-white/50" : "text-gray-400"
                            }`}
                        >
                            {offer.originalPrice} BHD
                        </span>
                    )}
                </div>

                {/* Validity */}
                {offer.validFrom && offer.validTo && (
                    <div
                        className={`flex items-center gap-2 text-xs mb-4 ${
                            featured ? "text-white/60" : "text-gray-400"
                        }`}
                    >
                        <FaCalendarDays className="text-xs" />
                        <span>
                            Valid: {offer.validFrom} - {offer.validTo}
                        </span>
                    </div>
                )}

                {/* CTA Button */}
                <Link
                    to="/contact"
                    className={`group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md ${
                        featured
                            ? "bg-white text-heading hover:bg-[#FFD922] hover:text-heading"
                            : "bg-heading text-white hover:bg-brand-primary"
                    }`}
                >
                    <span>Book Now</span>
                    <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default OfferCard;
