import React from "react";
import "./PriceFilter.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSortPrice } from "../../store";

export default function PriceFilter() {
  const sortPrice = useSelector((state) => state.tickets.sortPrice);
  console.log(sortPrice);
  const dispatch = useDispatch();

  const handleSortChange = (newSort) => {
    dispatch(setSortPrice(newSort));
  };

  return (
    <div className="price-filter">
      <button
        className={`cheap ${sortPrice === "cheap" ? "active" : ""}`}
        type="button"
        onClick={() => handleSortChange("cheap")}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`faster ${sortPrice === "faster" ? "active" : ""}`}
        type="button"
        onClick={() => handleSortChange("faster")}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={`optimal ${sortPrice === "optimal" ? "active" : ""}`}
        type="button"
        onClick={() => handleSortChange("optimal")}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}
