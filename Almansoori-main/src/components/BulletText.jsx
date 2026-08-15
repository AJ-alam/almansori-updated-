import React from "react";

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

const BulletText = ({ text, featured = false, className = "" }) => {
    const points = splitIntoPoints(text);
    if (points.length === 0) return null;

    return (
        <div className="relative">
            <div className={`space-y-1.5 mb-3 ${className}`}>
                {points.map((point, index) => (
                    <p
                        key={index}
                        className={`text-sm leading-relaxed ${featured ? "text-white/80" : "text-gray-600"}`}
                    >
                        {point}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default BulletText;
