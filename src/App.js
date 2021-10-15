import axios from "axios";
import React, { useState, useEffect } from "react";
import PizzaForm from './components/form';
import Pizza from './Pizza.jpg';
import {Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import * as yup from 'yup';
import formSchema from './components/formSchema';


const initialFormValues ={
  specialInstructions: '',
  size: '',
  sauce:'',
  name: '',
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyitalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatos: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
}

const initialFormErrors ={
  sauce:'',
  size:'',
}

const initialOrders = [];
const initialDisabled = true;

export default function App() {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)



const postNewOrder = newOrder => {
  axios.post(`https://reqres.in/api/orders`, newOrder)
  .then(res => {
    setOrders([res.data, ...orders])
  }).catch(err =>{
    console.error(err);
  }).finally(()=>{
    setFormValues(initialFormValues);
  })
};

  const validate = (name,value) =>{
    yup.reach(formSchema, name)
    .validate(value)
    .then(()=> setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  };

  const inputChange = (name,value) => {
    validate(name,value)
    setFormValues({
      ...formValues,
      [name]: value,
    })
  } ;

  const formSubmit = () =>{
    const newOrder = {
      specialInstructions: formValues.specialInstructions,
      size: formValues.size,
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni','sausage','canadianBacon','spicyItalianSausage','grilledChicken','onions','greenPepper','dicedTomatos','blackOlives','roastedGarlic','artichokeHearts','threeCheese','pineapple','extraCheese'].filter(topping => !!formValues[topping]),
      name: formValues.name.trim()
    }
    postNewOrder(newOrder);
  };


  useEffect(()=> {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);



  return (
    <div>
      <div>
    
        <nav>
          <h1>Lambda Eats</h1>
          <p>You can remove this code and create your own header</p>
          <div className="links">
          <Link to="/">Home</Link>
          <Link to='/Help'>Help</Link>
          </div>
          </nav>

          
        
          <Route exact path="/">
            <Home />
            
          </Route>
          <Route path="/pizza">
          <img className='pizzaPhoto' src={Pizza}/>
          <PizzaForm values={formValues}
                  change={inputChange}
                  submit={formSubmit}
                  disabled={disabled}
                  errors={formErrors}/>
          </Route>
        
    </div>



      {/* <img className='pizzaPhoto' src={Pizza}/> */}
     
        


    </div>
  );
};



