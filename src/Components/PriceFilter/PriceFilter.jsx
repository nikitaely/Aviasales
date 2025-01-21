import React from "react";
import "./PriceFilter.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSortPrice } from "../../store";

export default function PriceFilter() {
  const sortPrice = useSelector((state) => state.tickets.sortPrice);
  const dispatch = useDispatch();

  const handleSortChange = (newSort) => {
    dispatch(setSortPrice(newSort));
  };

  return (
    <div className="price-filter">
      <ul className="price-filter__list">
        <li>
          <label className={`price-filter__item cheap ${sortPrice === "cheap" ? "active" : ""}`}>
            <input
              type="radio"
              name="sortPrice"
              value="cheap"
              checked={sortPrice === "cheap"}
              onChange={() => handleSortChange("cheap")}
            />
            САМЫЙ ДЕШЕВЫЙ
          </label>
        </li>
        <li>
          <label className={`price-filter__item faster ${sortPrice === "faster" ? "active" : ""}`}>
            <input
              type="radio"
              name="sortPrice"
              value="faster"
              checked={sortPrice === "faster"}
              onChange={() => handleSortChange("faster")}
            />
            САМЫЙ БЫСТРЫЙ
          </label>
        </li>
        <li>
          <label className={`price-filter__item optimal ${sortPrice === "optimal" ? "active" : ""}`}>
            <input
              type="radio"
              name="sortPrice"
              value="optimal"
              checked={sortPrice === "optimal"}
              onChange={() => handleSortChange("optimal")}
            />
            ОПТИМАЛЬНЫЙ
          </label>
        </li>
      </ul>
    </div>
  );
}
