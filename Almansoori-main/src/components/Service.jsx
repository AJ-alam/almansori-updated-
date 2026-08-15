import React, { useState, useRef } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Service = ({ headerImage, title, desc, slug, subServices, isExpanded, onToggle }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`w-full relative transition-all duration-500 ${isExpanded ? 'z-10' : 'z-0'}`}
      onMouseEnter={() => onToggle && onToggle()}
    >
      {/* Shadow wrapper for elevated appearance */}
      <div className={`transition-all duration-500 overflow-hidden rounded-3xl ${isExpanded
        ? 'shadow-[0_20px_50px_rgba(0,0,0,0.2)] scale-[1.01] bg-brand-primary'
        : 'bg-gray-50 hover:bg-gray-100'
        }`}>
        {/* Main Service Card */}
        <div
          ref={cardRef}
          className={`group relative w-full p-6 md:p-8 min-h-[160px] flex flex-col lg:flex-row lg:justify-between gap-6 lg:items-center transition-all duration-500 overflow-hidden cursor-pointer`}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Hover Overlay - Circular "View Details" that follows cursor */}
          <div
            className={`absolute pointer-events-none z-20 ${isHovering && !isExpanded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
              transition: 'opacity 0.15s ease-out',
            }}
          >
            <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100">
              <span className="font-primary text-sm md:text-base text-heading uppercase tracking-wide text-center px-2">
                View Details
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:w-[380px] lg:flex-shrink-0">
            {/* Image above heading */}
            <div className="w-48 h-32 md:w-56 md:h-36 rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-500">
              <img
                src={headerImage}
                alt={title}
                className={`w-full h-full object-cover transition-transform duration-500 ${isHovering ? 'scale-110' : ''}`}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className={`font-primary text-2xl md:text-3xl transition-colors duration-500 ${isExpanded ? 'text-white' : 'text-heading'}`}>
                {title}
              </span>
              {subServices && subServices.length > 0 && (
                <FaChevronDown className={`text-sm transition-all duration-500 ${isExpanded ? 'rotate-180 text-white/60' : 'text-gray-400'}`} />
              )}
            </div>
          </div>

          <p className={`lg:w-[45%] text-base md:text-lg transition-colors duration-500 ${isExpanded ? 'text-white/80' : 'text-gray-600'}`}>
            {desc}
          </p>

          <Link
            to={`/services/${slug}`}
            className={`w-14 h-14 hidden md:flex rounded-full items-center justify-center transition-all duration-500 ${isExpanded
              ? 'bg-white text-brand-primary rotate-0'
              : 'bg-gray-100 text-heading -rotate-45 hover:bg-gray-200'
              }`}
          >
            <FaArrowRight className="text-xl" />
          </Link>
        </div>

        {/* Expandable Sub-Services Section */}
        {subServices && subServices.length > 0 && (
          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-6 md:px-8">
              <div className="h-px w-full bg-white/10 mb-8" />

              {/* Sub-services Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {subServices.map((sub, index) => {
                  const SubIcon = sub.icon;
                  return (
                    <Link
                      key={index}
                      to={`/services/${slug}/${sub.slug}`}
                      className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/item"
                    >
                      <SubIcon className="text-3xl text-white/70 group-hover/item:scale-110 group-hover/item:text-white transition-all duration-300" />
                      <span className="text-white/90 font-medium text-xs md:text-sm text-center transition-colors">
                        {sub.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* View All Link */}
              <div className="flex justify-center mt-8 pb-4">
                <Link
                  to={`/services/${slug}`}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-primary rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg"
                >
                  <span>View All {title} Treatments</span>
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
