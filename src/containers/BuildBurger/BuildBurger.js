import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BurildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios.orders';
import Spinner from '../../components/UI/Spinner/Spinner';

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
            ingredients:null,
            totalPrice:70,
            purchasable:false,
            purchasing:false,
            loading:false
        }
    }
    componentDidMount(){
        axios.get('https://react-my-burger-a5b34.firebaseio.com/ingredients.json')
        .then(response =>{
            this.setState({ingredients:response.data})        
        })
        console.log(this.state.ingredients);
    }
    updatePurchaseState (ingredients){
        const sum=Object.keys(ingredients).map(igKey =>{
            return ingredients[igKey]
        }).reduce((sum,el) =>{
            return sum+el
        },0);
        this.setState({purchasable:sum>0})
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
        this.updatePurchaseState(updatedIngredients);
        
    }
    removeIngredientsHandler =(type) =>{
        const oldData=this.state.ingredients[type];
        if(oldData >0){
        const updatedData=oldData -1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedData;
        const priceAddition=INGREDIENTS_PRICE[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceAddition;
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }
    }
    purchaseHandle= () =>{
        this.setState({purchasing:true})
    }

    purChaseCancleHandle =() =>{
        this.setState({purchasing:false})
    }
    continueHandle=() =>{
        // this.setState({loading:true})
        // const order={
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:'Rayudu',
        //         address:{
        //             street:'test',
        //             zipcode:'123234',
        //             country:'india'
        //         },
        //         email:'rayudu@gmail.com'
        //     },
        //     deliverMethod:'fastest'
        // }
        // axios.post('/orders.json',order)
        // .then(response =>{
        //     this.setState({loading:false,purchasing:false})
        // }).catch(err =>{
        //     this.setState({loading:false,purchasing:false})
        // });
        this.props.history.push('/checkout')
    }

    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        let orderSummary=null;
        let burger=<Spinner />
        if(this.state.ingredients){
            burger=(
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                    addIngredients={this.addIngredientHandler}
                    removeIngredients={this.removeIngredientsHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandle}
                    disabled={this.state.purchasable}
                    />
                </Aux>
            )
        orderSummary=<OrderSummary 
        ingredients={this.state.ingredients}
        cancelPurchase={this.purChaseCancleHandle}
        continuePurchase={this.continueHandle}
        price={this.state.totalPrice}
        />
        }
        
        if(this.state.loading){
            orderSummary=<Spinner />
        }
        return(
            <div>
                <Modal show={this.state.purchasing} modalClosed={this.purChaseCancleHandle}>
                  {orderSummary}
                </Modal>
                {burger}
            </div>
        )
    }
}

export default BuildBurger;