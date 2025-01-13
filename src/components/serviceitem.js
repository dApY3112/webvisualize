import React from "react";
const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col md:gap-20 gap-6 md:p-10 p-8 border border-primary-100">
      <img src={icon} width={60} height={60} alt={title} />
      <div className="flex flex-col gap-4">
        <p className="font-display md:text-display-md text-display-sm font-normal">
          {title}
        </p>
        <p className="text-body-lg font-light text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
};




export default ServiceItem;
