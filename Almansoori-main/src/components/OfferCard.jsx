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
            className={`group relative rounded-3xl overflow-hidden transition-all duration-500 flex flex-col justify-between ${
                featured
                    ? "bg-heading text-white border border-heading shadow-xl hover:shadow-2xl hover:-translate-y-2"
                    : "bg-white text-heading border border-gray-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2"
            }`}
        >
            {/* Top Bar / Image Container */}
            <div>
                {/* Discount Badge */}
                {hasDiscount && (
                    <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#F3D255] to-[#F6A51C] text-heading font-black px-3 py-1 rounded-full text-xs uppercase shadow-md tracking-wider">
                        {discountPercent}% OFF
                    </div>
                )}

                {/* Image */}
                <div className="relative h-32 sm:h-36 overflow-hidden bg-gray-100">
                    <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                        className={`absolute inset-0 ${
                            featured
                                ? "bg-gradient-to-t from-heading/60 via-transparent to-transparent"
                                : "bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"
                        }`}
                    />
                </div>

                {/* Content */}
                <div className="px-5 pt-3 pb-1.5">
                    {/* Title */}
                    <h3
                        className={`font-primary text-lg md:text-xl mb-1 font-bold leading-snug capitalize ${
                            featured ? "text-white" : "text-heading"
                        }`}
                    >
                        {offer.title}
                    </h3>

                    {/* Description */}
                    <ExpandableText text={offer.description} featured={featured} className="mb-2" />

                    {/* Includes List */}
                    {offer.includes && offer.includes.length > 0 && (
                        <div className="mb-2">
                            <p
                                className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                                    featured ? "text-white/60" : "text-gray-400"
                                }`}
                            >
                                INCLUDES:
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {offer.includes.map((item, index) => (
                                    <span
                                        key={index}
                                        className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${
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
            <div className="px-5 pb-4 pt-0">
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-2 pt-2 border-t border-gray-100/20">
                    <span
                        className={`text-2xl sm:text-[1.65rem] font-black ${
                            featured ? "text-[#F3D255]" : "text-heading"
                        }`}
                    >
                        {offer.salePrice} BHD
                    </span>
                    {hasDiscount && (
                        <span
                            className={`text-xs font-semibold line-through ${
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
                        className={`flex items-center gap-2 text-xs mb-2 ${
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
                    className={`group/btn w-full inline-flex items-center justify-center gap-2 px-5 py-2 sm:py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md ${
                        featured
                            ? "bg-white text-heading hover:bg-[#F3D255] hover:text-heading"
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
