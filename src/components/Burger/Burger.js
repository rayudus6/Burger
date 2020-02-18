import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredient';
import classes from './Burger.css'


const burger =(props) =>{
    let totalngredients=Object.keys(props.ingredients)
    .map(igkey =>{
        return [...Array(props.ingredients[igkey] )].map((_,i) =>{
            return <BurgerIngredients key={igkey+i} type={igkey} />
        })
    }).reduce((arr,el) =>{
        return arr.concat(el);
    });
    
    if(totalngredients.length ===0){
        totalngredients=<p>Please Add Ingredients</p>
        
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {totalngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default burger;