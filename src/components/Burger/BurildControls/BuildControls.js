import React from 'react';

import BuildControl from './BurildControl/BuildControl';
import classes from './BuildControls.css'

const controls=[
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
]

const buildControls =(props) =>(
    <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price}</strong></p>
        {controls.map( ctrl =>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() =>props.addIngredients(ctrl.type)}
            removed={() =>props.removeIngredients(ctrl.type)}
            disabled={props.disabledInfo[ctrl.type]}
            />
        ))}
        <button 
        className={classes.OrderButton} 
        disabled={!props.disabled}
        onClick={props.ordered}
        >Order Now!</button>
    </div>
)

export default buildControls;