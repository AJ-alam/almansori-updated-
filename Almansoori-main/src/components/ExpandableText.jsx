import React from "react";

const ExpandableText = ({ text, className = "" }) => {
    if (!text) return null;

    return (
        <p className={`text-gray-600 text-sm leading-relaxed ${className}`}>
            {text}
        </p>
    );
};

export default ExpandableText;
