import React from "react";

const DiscoverCard = ({ icon: Icon, title, desc, bgColor }) => {
  return (
    <div className={`w-full ${bgColor} p-4 rounded-lg flex flex-col`}>
      <Icon className="mb-8 text-4xl text-brand-primary" />
      <div>
        <h4 className="font-primary text-xl 2xl:text-2xl text-brand-primary-950">{title}</h4>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};

export default DiscoverCard;
