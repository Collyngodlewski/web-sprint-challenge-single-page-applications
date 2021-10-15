import React from 'react';
import { useHistory } from 'react-router-dom';
import Pizza from '../Pizza.jpg';

export default function Home() {
    const history = useHistory();
    const routeToOrder = () => {
        history.push("/pizza")
    }

    return (
        <div className='home-wrapper'>
            <img className='pizzaPhoto' src={Pizza}/>
            <button 
                onClick={routeToOrder}
                className='md-button order-button'
                >
                    Order Now!
                </button>
        </div>
    )


}