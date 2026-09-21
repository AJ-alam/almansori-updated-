import React from "react";

const DiscoverCard = ({ icon: Icon, title, desc, bgColor }) => {
  return (
    <div className={`w-full ${bgColor} p-4 rounded-lg flex flex-col`}>
      <Icon className="mb-8 text-4xl text-brand-primary" />
      <div>
        <h4 className="font-primary text-lg md:text-xl font-bold leading-snug text-brand-primary-950 mb-1">{title}</h4>
        <p className="font-secondary-500 text-sm md:text-base leading-relaxed text-body">{desc}</p>
      </div>
    </div>
  );
};

export default DiscoverCard;
