import React, { useState, useEffect, useMemo } from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Api from "../../API/api";
import { useSelector, useDispatch } from "react-redux";
import { Spin } from "antd";
import "./App.scss";

export default function App() {
  const [listTickets, setTickets] = useState([]);
  const [countTickets, setCountTickets] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = new Api();

  const sortPrice = useSelector((state) => state.tickets.sortPrice);
  const transfers = useSelector((state) => state.tickets.transfers);

  const sortTickets = (tickets, criteria) => {
    switch (criteria) {
      case "cheap":
        return [...tickets].sort((a, b) => a.price - b.price);
      case "faster":
        return [...tickets].sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration
        );
      case "optimal":
      default:
        return tickets;
    }
  };

  const filterTickets = (tickets, transfers) => {
    if (transfers.includes("all")) {
      return tickets;
    }
    return tickets.filter((ticket) =>
      transfers.some((transfer) => ticket.segments[0].stops.length === transfer)
    );
  };

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);

    const loadTickets = async () => {
      let totalTickets = [];
      try {
        const initialTickets = await api.getTickets();
        if (!isMounted) return;

        totalTickets = initialTickets;
        setTickets(initialTickets);
        setIsLoading(false);

        // Загружаем оставшиеся билеты
        while (totalTickets.length < 10000) {
          try {
            const newTickets = await api.getTickets();
            if (!isMounted) return;
            totalTickets = [...totalTickets, ...newTickets];
            setTickets([...totalTickets]); // Обновляем состояние
          } catch (err) {
            console.error("Ошибка при загрузке дополнительных билетов:", err);
          }
        }
      } catch (error) {
        if (isMounted) {
          setError(
            "Ошибка при получении информации о билетах: " + error.message
          );
          setIsLoading(false);
        }
      }
    };

    loadTickets();

    return () => {
      isMounted = false;
    };
  }, []);

  const sortedTickets = useMemo(
    () => sortTickets(listTickets, sortPrice),
    [listTickets, sortPrice]
  );

  const visibleTickets = useMemo(
    () => filterTickets(sortedTickets, transfers),
    [sortedTickets, transfers]
  );

  if (isLoading) {
    return (
      <div className="app">
        <Spin size="large" tip="Loading" />
      </div>
    );
  }

  if (error) {
    return <div className="app">Ошибка: {error}</div>;
  }

  return (
    <div className="app">
      <Header />
      <Content
        tickets={visibleTickets.slice(0, countTickets)}
        setTickets={setTickets}
        setCountTickets={setCountTickets}
        countTickets={countTickets}
      />
    </div>
  );
}
