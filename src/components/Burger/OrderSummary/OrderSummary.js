import React from 'react';

import Aux from '../../../hoc/Aux';

const order=(props)=>{
    let ordersList=Object.keys(props.ingredients).map(igKey =>{
    return <li key={igKey}>
        <span style={{textTransform:"uppercase"}}>{igKey}</span>:{props.ingredients[igKey]}
           </li>
    })
    return(
        <Aux>
            <h2>Your Order</h2>
            <p>Ingredients:</p>
            <ul>
                {ordersList}
            </ul>
            <p>Continue for checkout?</p>
        </Aux>
    )
}

export default order;