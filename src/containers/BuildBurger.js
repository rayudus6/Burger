import React, { Component } from 'react';

import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BurildControls/BuildControls';

const INGREDIENTS_PRICE={
    meat:12,
    cheese:14,
    bacon:20,
    salad:26
}

class  BuildBurger extends Component{
    constructor(props){
        super(props);
        this.state={
            ingredients:{
                meat:0,
                cheese:0,
                salad:0,
                bacon:0
            },
            totalPrice:70
        }
    }

    addIngredientHandler =(type) =>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
        const priceAddition=INGREDIENTS_PRICE[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })
        
    }
    removeIngredientsHandler =(type) =>{
        const oldData=this.state.ingredients[type];
        if(oldData >0){
        const updatedData=oldData -1;
        const removedIngredients={
            ...this.state.ingredients
        }
        removedIngredients[type]=updatedData;
        const priceAddition=INGREDIENTS_PRICE[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceAddition;
        this.setState({
            ingredients:removedIngredients,
            totalPrice:newPrice
        })
    }
    }

    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                addIngredients={this.addIngredientHandler}
                removeIngredients={this.removeIngredientsHandler}
                disabledInfo={disabledInfo}
                price={this.state.totalPrice}
                />
            </div>
        )
    }
}

export default BuildBurger;