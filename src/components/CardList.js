import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card
          email={robot.email}
          id={robot.id}
          key={robot.id}
          name={robot.name}
        />
      ))}
    </div>
  );
};

export default CardList;
