import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
 const [pizzaList, setPizzaList] = useState([])
 const [formData, setFormData] = useState({})

 useEffect(() => {fetch('http://localhost:3001/pizzas')
 .then(resp => resp.json())
 .then(data => setPizzaList(data))}, [])

 function handleClick (id) {
  console.log(id)
 }

  return (
    <>
      <Header />
      <PizzaForm setPizzaList={setPizzaList} />
      <PizzaList pizzaList={pizzaList} setPizzaList={setPizzaList} handleClick={handleClick}/>
    </>
  );
}

export default App;
