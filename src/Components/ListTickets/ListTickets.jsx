import React, { useState } from "react";
import Ticket from "../Ticket/Ticket";
import './ListTickets.scss'

export default function ListTickets({ tickets }) {
  console.log('ListTickets tickets:', tickets)
  return (
    <ul className="list-tickets">
      {tickets.map((ticket) => {
        return (
          <Ticket
            key={ticket.carrier + ' ' + ticket.price}
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
          />
        );
      })}
    </ul>
  );
}
