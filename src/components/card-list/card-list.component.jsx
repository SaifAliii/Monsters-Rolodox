import { Component } from "react";
import Card from "../card/card.component";
import "../card-list/card-list.style.css";
const CardList = ({ monsters }) => {
  return (
    <div className="card-list" >
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
