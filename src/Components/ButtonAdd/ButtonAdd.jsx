import React from "react";
import "./ButtonAdd.scss";

export default function ButtonAdd({ setCountTickets, countTickets }) {
  return (
    <button
      className="add-button"
      onClick={() => setCountTickets(countTickets + 5)}
    >
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
}
