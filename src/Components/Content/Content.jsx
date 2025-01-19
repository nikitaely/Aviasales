import React from "react";
import Container from "../Container/Container";
import Transfers from "../Transfers/Transfers";
import "./Content.scss";

export default function Content({
  tickets,
  setCountTickets,
  countTickets
}) {
  return (
    <div className="content">
      <Transfers />
      <Container
        tickets={tickets}
        setCountTickets={setCountTickets}
        countTickets={countTickets}
      />
    </div>
  );
}
