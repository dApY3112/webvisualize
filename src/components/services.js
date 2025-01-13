import React, { forwardRef } from "react";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceitem";
import BuildingIcon from "../assets/images/servicesIcon/building.gif";
import HouseIcon from "../assets/images/servicesIcon/house.gif";
import ManagementIcon from "../assets/images/servicesIcon/management.gif";

// Services component with forwardRef
const Services = forwardRef((props, ref) => {
  return (
    <div ref={ref}> {/* Added ref to root div */}
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="OUR SERVICES" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                Turning your <span className="italic">dream home</span>{" "}
                into a beautiful reality
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={BuildingIcon}
              title="Building Design and Interior Styling"
              description="We design spaces that inspire, blending architectural brilliance with interior elegance. From concept to creation, we craft functional and beautiful environments that reflect your style and vision"
            />
            <ServiceItem
              icon={HouseIcon}
              title="Building Renovation"
              description="Revitalize your space with our expert building renovation services. From modern upgrades to structural repairs, we transform outdated spaces into functional and stylish environments. Your vision, our craftsmanship!"
            />
            <ServiceItem
              icon={ManagementIcon}
              title="Management"
              description="Streamline your operations with our expert management solutions. From planning to execution, we ensure efficiency, organization, and success at every step."
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Services;
