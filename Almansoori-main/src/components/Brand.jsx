import React from "react";

// Brand name rules (per client doc):
//  - always one word "almansoori"
//  - "a" and "m" always lowercase
//  - always brand yellow accent color
const BRAND_REGEX = /al[-\s]?mansoori/gi;

// Standalone usage: <Brand /> -> yellow "almansoori"
const Brand = ({ className = "" }) => (
    <span className={`text-brand-accent font-semibold normal-case ${className}`}>almansoori</span>
);

// Inline usage inside a sentence/string:
//   <BrandText>Dr. Aysha AlMansoori established ...</BrandText>
// Highlights every occurrence of the brand word, lowercased + yellow.
export const BrandText = ({ children, className = "" }) => {
    if (typeof children !== "string") return children;

    const parts = [];
    let lastIndex = 0;
    let match;
    let key = 0;
    BRAND_REGEX.lastIndex = 0;
    while ((match = BRAND_REGEX.exec(children)) !== null) {
        // Check if this occurrence is part of a doctor's / person's personal name
        const textBefore = children.slice(0, match.index);
        const isDoctorName = /(?:(?:Dr\.?|Doctor|DR\.?)\s*(?:[A-Za-z]+\s+)?|Aysha\s+|Ayesha\s+)$/i.test(textBefore);

        if (isDoctorName) {
            if (match.index > lastIndex) {
                parts.push(children.slice(lastIndex, match.index));
            }
            // Used in a person's name: keep black/normal text color
            parts.push(
                <span key={key++} className="text-inherit normal-case font-normal">
                    almansoori
                </span>
            );
            lastIndex = match.index + match[0].length;
            continue;
        }

        if (match.index > lastIndex) {
            parts.push(children.slice(lastIndex, match.index));
        }
        // Used as the medical center/brand: make yellow
        parts.push(
            <span key={key++} className={`text-brand-accent font-semibold normal-case ${className}`}>
                almansoori
            </span>
        );
        lastIndex = match.index + match[0].length;
    }
    if (lastIndex < children.length) {
        parts.push(children.slice(lastIndex));
    }
    return <>{parts}</>;
};

export default Brand;
