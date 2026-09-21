import React from "react";
import { BrandText } from "./Brand";

const ExpandableText = ({ text, featured = false, className = "" }) => {
    if (!text) return null;

    return (
        <p className={`${featured ? "text-white" : "text-gray-600"} text-sm md:text-base leading-relaxed ${className}`}>
            <BrandText>{text}</BrandText>
        </p>
    );
};

export default ExpandableText;
