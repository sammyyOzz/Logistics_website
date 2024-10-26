import React from "react";
import "./Shippingsteps.scss";
export const Shippingsteps = () => {
  return (
    <div className="shippingsteps">
      <div className="shippingstepstitle">
        <p>Ship your parcel in 4 easy steps</p>
      </div>
      <div className="shippingstep1">
        <div className="shippingstep">
          <div className="stepscount">01</div>
          <p className="shippingstepssubtitle">What are you shipping</p>
          <ul>
            <li>
              You'll need to specify the dimensions, weight and description of
              goods as packed. Our range of services can handle virtually any
              shipment you require.
            </li>
          </ul>
        </div>
        <div className="shippingstep">
          <div className="stepscount">02</div>
          <p className="shippingstepssubtitle">Choose your speed</p>
          <ul>
            <li>
              You'll need to specify the dimensions, weight and description of
              goods as packed. Our range of services can handle virtually any
              shipment you require.
            </li>
          </ul>
        </div>
      </div>
      <div className="shippingstep2">
        <div className="shippingstep">
          <div className="stepscount">03</div>
          <p className="shippingstepssubtitle">Book a pickup</p>
          <ul>
            <li>
              You'll need to specify the dimensions, weight and description of
              goods as packed. Our range of services can handle virtually any
              shipment you require.
            </li>
          </ul>
        </div>
        <div className="shippingstep">
          <div className="stepscount">04</div>
          <p className="shippingstepssubtitle">Track</p>
          <ul>
            <li>
              You'll need to specify the dimensions, weight and description of
              goods as packed. Our range of services can handle virtually any
              shipment you require.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
