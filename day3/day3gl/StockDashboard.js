import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Table } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const socket = io("http://localhost:5000");

const StockDashboard = () => {
  const [stocks, setStocks] = useState({});
  const [stockHistory, setStockHistory] = useState({});

  useEffect(() => {
    socket.on("stockUpdate", (updatedStocks) => {
      setStocks(updatedStocks);
      setStockHistory((prevHistory) => {
        const newHistory = { ...prevHistory };
        Object.keys(updatedStocks).forEach((symbol) => {
          if (!newHistory[symbol]) newHistory[symbol] = [];
          newHistory[symbol] = [...newHistory[symbol], updatedStocks[symbol].price].slice(-20);
        });
        return newHistory;
      });
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">📈 Real-time Stock Dashboard</h1>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(stocks).map((symbol) => (
            <tr key={symbol}>
              <td>{symbol}</td>
              <td>{stocks[symbol].price}</td>
              <td style={{ color: stocks[symbol].change >= 0 ? "green" : "red" }}>
                {stocks[symbol].change}%
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2 className="text-center mt-4">📊 Stock Trends</h2>
      <div className="row">
        {Object.keys(stockHistory).map((symbol) => (
          <div key={symbol} className="col-md-4">
            <h4>{symbol}</h4>
            <Line
              data={{
                labels: Array.from({ length: stockHistory[symbol].length }, (_, i) => i + 1),
                datasets: [
                  {
                    label: symbol,
                    data: stockHistory[symbol],
                    borderColor: "blue",
                    borderWidth: 2,
                    fill: false,
                  },
                ],
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockDashboard;
