import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";

export default function App() {
  // <Hero />
  const cards = Data.map((data) => {
    return (
      <Card
        key={data.id}
        {...data} //spread operator.. same as data={data}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-container">{cards}</div>
    </div>
  );
}
