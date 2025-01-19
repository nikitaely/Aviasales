import React from "react";
import Flight from "../Flight/Flight";
import "./Ticket.scss";

export default function Ticket({ price, carrier, segments }) {

  function priceCor(price) {
    return Math.floor(price / 1000) + " " + (price % 1000);
  }

  return (
    <li className="ticket">
      <div className="ticket-container">
        <span className="ticket-price">{priceCor(price)} Р</span>
        <img
          src={`//pics.avs.io/99/36/${carrier}.png`}
          className="company-logo"
          alt="company"
        />
      </div>
      {segments?.map((flight) => {
        if (!id) {
          var id = 0;
        }
        id += 1;
        return (
          <Flight
            key={id}
            origin={flight.origin}
            destination={flight.destination}
            date={flight.date}
            duration={flight.duration}
            stops={flight.stops}
          />
        );
      })}
    </li>
  );
}
