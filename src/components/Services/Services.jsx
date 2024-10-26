import React from "react";
import "./Services.scss";
import truck from "../../../public/svgs/truck.svg";
import plane from "../../../public/svgs/plane.svg";
import ship from "../../../public/svgs/ship.svg";

export const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <div className="subtitle">
          <img src={truck} />
          <p>Road frieght</p>
        </div>
        <div className="description">
          Our road freight services offer reliable, cost-effective
          transportation for goods, ensuring timely and secure deliveries across
          regions. We provide tailored solutions for all shipment sizes to meet
          your logistics needs efficiently.
        </div>
      </div>
      <div className="service">
        <div className="subtitle">
          <img src={plane} />
          <p>Air frieght</p>
        </div>
        <div className="description">
          Air freight services provide fast, efficient shipping for urgent
          deliveries, ensuring your goods reach global destinations swiftly and
          securely.
        </div>
      </div>
      <div className="service">
        <div className="subtitle">
          <img src={ship} />
          <p>Sea frieght</p>
        </div>
        <div className="description">
          Sea freight services offer cost-effective shipping for large volumes,
          ensuring safe and reliable delivery across international waters.
        </div>
      </div>
    </div>
  );
};
