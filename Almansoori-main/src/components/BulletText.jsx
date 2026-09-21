import React from "react";
import { BrandText } from "./Brand";

// Abbreviations that end with a period but do not end a sentence
const ABBREVIATIONS = ["Dr", "Mr", "Mrs", "Ms", "Prof", "St", "vs", "etc", "e.g", "i.e", "No"];

const splitIntoPoints = (text) => {
    if (!text) return [];

    // Already authored as a list
    if (Array.isArray(text)) return text.filter(Boolean);

    // Respect explicit separators first (newlines, bullet chars)
    const explicit = text
        .split(/\r?\n|(?:^|\s)[•·▪-]\s+/)
        .map((part) => part.trim())
        .filter(Boolean);
    if (explicit.length > 1) return explicit;

    // Protect abbreviations so they don't trigger a split
    let guarded = text;
    ABBREVIATIONS.forEach((abbr) => {
        guarded = guarded.replaceAll(`${abbr}.`, `${abbr}<DOT>`);
    });

    return guarded
        .split(/(?<=[.!?])\s+/)
        .map((part) => part.replaceAll("<DOT>", ".").trim())
        .filter(Boolean);
};

const renderTextWithPhoneLinks = (pointText, isFeatured = false) => {
    if (!pointText) return pointText;
    
    // Match phone numbers like 17760666, 32221676, +973 1776 0666, 1776 0666, etc.
    const phoneRegex = /(\+?973[\s-]*)?(17\d{2}[\s-]*\d{4}|32\d{2}[\s-]*\d{4}|\b17760666\b|\b32221676\b|\b\d{8}\b)/g;
    
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = phoneRegex.exec(pointText)) !== null) {
        const matchStart = match.index;
        const matchEnd = phoneRegex.lastIndex;
        const rawNumber = match[0];
        
        // Push text before the match (with BrandText formatting for almansoori)
        if (matchStart > lastIndex) {
            parts.push(
                <BrandText key={`txt-${lastIndex}`}>
                    {pointText.substring(lastIndex, matchStart)}
                </BrandText>
            );
        }

        // Clean digits for WhatsApp link (e.g. 97317760666)
        const cleanDigits = rawNumber.replace(/\D/g, "");
        const fullPhone = cleanDigits.startsWith("973") ? cleanDigits : `973${cleanDigits}`;

        parts.push(
            <a
                key={matchStart}
                href={`https://wa.me/${fullPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="Chat on WhatsApp"
                className={`font-bold underline px-1 py-0.5 rounded transition-all duration-200 ${
                    isFeatured 
                        ? "text-[#F3D255] hover:text-[#F9E59A] bg-white/10 hover:bg-white/20" 
                        : "text-brand-accent hover:text-brand-accent-700 bg-brand-accent-50 hover:bg-brand-accent-100"
                }`}
            >
                {rawNumber}
            </a>
        );

        lastIndex = matchEnd;
    }

    if (lastIndex < pointText.length) {
        parts.push(
            <BrandText key={`txt-${lastIndex}`}>
                {pointText.substring(lastIndex)}
            </BrandText>
        );
    }

    return parts.length > 0 ? parts : <BrandText>{pointText}</BrandText>;
};

const BulletText = ({ text, featured = false, className = "" }) => {
    const points = splitIntoPoints(text);
    if (points.length === 0) return null;

    return (
        <div className="relative">
            <div className={`space-y-1 ${className}`}>
                {points.map((point, index) => (
                    <p
                        key={index}
                        className={`text-sm md:text-base leading-relaxed ${featured ? "text-white/80" : "text-gray-600"}`}
                    >
                        {renderTextWithPhoneLinks(point, featured)}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default BulletText;
