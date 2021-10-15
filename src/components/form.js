import React from "react";

export default function PizzaForm(props) {
  const { values, submit, change, disabled, errors } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form id ="pizza-form" onSubmit={onSubmit}>
      <div className="pizza-group submit">
        <h2>Build Your Own Pizza</h2>
       
      </div>
      <div className="form-group inputs">
        <h4>Build Your Own Pizza</h4>
        <label>
          Choice of Size
          <p>Required</p> 
          <select value={values.size} name="size" onChange={onChange} id='size-dropdown' >
            <option value="">Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

       <div className='sauces'>
        <h2>Choice of Sauces</h2>
        <p>Required</p>
        <label>Original Red
            <input 
            type="radio"
            name='sauce'
            value='originalRed'
            onChange={onChange}
            checked={values.sauce === 'originalRed'}
            />
        </label>
        <label>Garlic Ranch
            <input 
            type="radio"
            name='sauce'
            value='garlicRanch'
            onChange={onChange}
            checked={values.sauce === 'garlicRanch'}
            />
        </label>
        <label>BBQ Sauce
            <input 
            type="radio"
            name='sauce'
            value='bbqSauce'
            onChange={onChange}
            checked={values.sauce === 'bbqSauce'}
            />
        </label>
        <label>Spinach Alfredo
            <input 
            type="radio"
            name='sauce'
            value='spinachAlfredo'
            onChange={onChange}
            checked={values.sauce === 'spinachAlfredo'}
            />
        </label>
        </div>
        
        <div className='toppings'>
        <h2>Add Toppings</h2>
        <p>Choose up to 10.</p>

        <label>Pepperoni
            <input 
            type='checkbox'
            name='pepperoni'
            onChange={onChange}
            checked={values.pepperoni}
            />
        </label>
        <label>Sausage
            <input 
            type='checkbox'
            name='sausage'
            onChange={onChange}
            checked={values.sausage}
            />
        </label>
        <label>Canadian Bacon
            <input 
            type='checkbox'
            name='canadianBacon'
            onChange={onChange}
            checked={values.canadianBacon}
            />
        </label>
        <label>Spicy Italian Sausage
            <input 
            type='checkbox'
            name='spicyItalianSausage'
            onChange={onChange}
            checked={values.spicyItalianSausage}
            />
        </label>
        <label>Grilled Chicken
            <input 
            type='checkbox'
            name='grilledChicken'
            onChange={onChange}
            checked={values.grilledChicken}
            />
        </label>
        <label>Onions
            <input 
            type='checkbox'
            name='onions'
            onChange={onChange}
            checked={values.onions}
            />
        </label>
        <label>Green Pepper
            <input 
            type='checkbox'
            name='greenPepper'
            onChange={onChange}
            checked={values.greenPepper}
            />
        </label>
        <label>Diced Tomatos
            <input 
            type='checkbox'
            name='dicedTomatos'
            onChange={onChange}
            checked={values.dicedTomatos}
            />
        </label>
        <label>Black Olives
            <input 
            type='checkbox'
            name='blackOlives'
            onChange={onChange}
            checked={values.blackOlives}
            />
        </label>
        <label>Roasted Garlic
            <input 
            type='checkbox'
            name='roastedGarlic'
            onChange={onChange}
            checked={values.roastedGarlic}
            />
        </label>
        <label>Artichoke Hearts
            <input 
            type='checkbox'
            name='artichokeHearts'
            onChange={onChange}
            checked={values.artichokeHearts}
            />
        </label>
        <label>Three Cheese
            <input 
            type='checkbox'
            name='threeCheese'
            onChange={onChange}
            checked={values.threeCheese}
            />
        </label>
        <label>Pineapple
            <input 
            type='checkbox'
            name='pineapple'
            onChange={onChange}
            checked={values.pineapple}
            />
        </label>
        <label>Extra Cheese
            <input 
            type='checkbox'
            name='extraCheese'
            onChange={onChange}
            checked={values.extraCheese}
            />
        </label>
        </div>

        <div className='specialInstructions'>
            <h2>Special Instructions</h2>
            <label>
                <input 
                type='text'
                value={values.specialInstructions}
                onChange={onChange}
                name='specialInstructions'
                placeholder="Anything special you'd like to add?"
                id='special-text'/>
            </label>
          </div>
          
          <div className="errors">
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
        </div>

        <div className='nameOrder'>
            <label id='name-input'>Name for Order:
                <input  
                value={values.name}
                onChange={onChange}
                name='name'
                type='text'
                />
            </label>
            </div>

        <div className ='submit'>
        <button id = "order-button" disabled={disabled}>
            Add to Order
        </button>
        </div>
      </div>
    </form>
  );

}
