import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const order=(props)=>{
    let ordersList=Object.keys(props.ingredients).map(igKey =>{
    return <li key={igKey}>
                <span style={{textTransform:"uppercase"}}>
                {igKey}
                </span>:{props.ingredients[igKey]}
           </li>
    })
    return(
        <Aux>
            <h2>Your Order</h2>
            <p>Your Favourite Added Ingredients:</p>
            <ul>
                {ordersList}
            </ul>
            <p>Total price:<strong>{props.price}</strong></p>
            <p>Continue for checkout?</p>
            <Button btnType="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continuePurchase}>CONTINUE</Button>
        </Aux>
    )
}

export default order;