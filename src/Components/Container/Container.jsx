import React from "react";
import ListTickets from "../ListTickets/ListTickets";
import PriceFilter from "../PriceFilter/PriceFilter";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import "./Container.scss";

export default function Container({ tickets, setCountTickets,  countTickets}) {
  return (
    <div className="container">
      <PriceFilter />
      <ListTickets tickets={tickets} />
      <ButtonAdd setCountTickets={setCountTickets} countTickets={countTickets}/>
    </div>
  );
}
