import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({
  title,
  breadcrumb = "Home",
  breadcrumbLink = "/",
  backgroundImage,
}) => {
  return (
    <div className="w-full h-[350px] md:h-[400px] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="font-primary text-2xl md:text-4xl lg:text-4xl !text-white uppercase mb-4 leading-tight">
          {title}
        </h2>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 md:gap-3 text-white/80">
          <Link
            to={breadcrumbLink}
            className="font-secondary-500 text-sm md:text-base lg:text-lg hover:text-white transition-colors"
          >
            {breadcrumb}
          </Link>
          <span className="text-lg md:text-xl">→</span>
          <span className="font-secondary-600 text-sm md:text-base lg:text-lg text-white">
            {title}
          </span>
        </div>
      </div>

      {/* Background Image */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] h-60 md:h-[250px] absolute -bottom-20 md:-bottom-28 lg:-bottom-32 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default PageHeader;
