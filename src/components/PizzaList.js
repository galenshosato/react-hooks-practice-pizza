import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzaList, setPizzaList, handleClick}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaList.map(pizza => {
            return <Pizza key={pizza.id} pizza={pizza} handleClick={handleClick} />
          })} 
      </tbody>
    </table>
  );
}

export default PizzaList;
