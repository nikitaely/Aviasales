import React from "react";
import "./Transfers.scss";
import { useSelector, useDispatch } from "react-redux";
import { setTransfers } from "../../store";

export default function Transfers() {
  const transfers = useSelector((state) => state.tickets.transfers)
  console.log(transfers)
  const dispatch = useDispatch()

  const isChecked = (value) => {
    return transfers.includes(value);
  };

  const handleTransfersChange = (selected) => {
    dispatch(setTransfers(selected))
  }
  return (
    <aside className="transfers">
      <label className="transfers-title" htmlFor="count-transfers">
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </label>
      <div className="custom-dropdown">
        {/* All Transfers */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="all"
            value="Все"
            checked={isChecked("all")}
            onChange={() => handleTransfersChange("all")}
          />
          <span className="checkbox"></span>
          Все
        </label>

        {/* No Transfers */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="no-transfers"
            value="Без пересадок"
            checked={isChecked(0)}
            onChange={() => handleTransfersChange(0)}
          />
          <span className="checkbox"></span>
          Без пересадок
        </label>

        {/* 1 Transfer */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="one-transfer"
            value="1 пересадка"
            checked={isChecked(1)}
            onChange={() => handleTransfersChange(1)}
          />
          <span className="checkbox"></span>
          1 пересадка
        </label>

        {/* 2 Transfers */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="two-transfers"
            value="2 пересадки"
            checked={isChecked(2)}
            onChange={() => handleTransfersChange(2)}
          />
          <span className="checkbox"></span>
          2 пересадки
        </label>

        {/* 3 Transfers */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="three-transfers"
            value="3 пересадки"
            checked={isChecked(3)}
            onChange={() => handleTransfersChange(3)}
          />
          <span className="checkbox"></span>
          3 пересадки
        </label>
      </div>
    </aside>
  );
}
