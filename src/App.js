import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import PizzaForm from "./Components/pizzaForm";
import Home from "./Components/home";

const initialFormValues = {
  name: '',
  size: 'small',
  toppings: [],
  instructions: '',
}; 


const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [order, setOrder] = useState([])
  const [orderRecord, setOrderRecord] = useState(null)

  const handleChange = (name, value) => {
   setFormValues({ ...formValues, [name]: value });
  }
 
  const handleSubmit = () => {
    axios
    .post('https://reqres.in/api/orders', formValues)
    .then(res => {
      setOrder([ res.data, ...order]);
      console.log(res.data);
      setOrderRecord(res.data);
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues));
  }

  return (
    <>
      <Link to='/' id='home'>
        <h1>Home</h1>
      </Link>
      <Link to='/pizza' id='order-pizza'>
        <h3>Order Pizza</h3>
      </Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza' element={<PizzaForm 
        value={formValues} 
        change={handleChange} 
        submit={handleSubmit}
        />} />
      </Routes>
      
    </>
  );
};
export default App;
