import React, {Component} from 'react';

import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary';


export default class extends Component{
    state={
        ingredients:{
            meat:1,
            cheese:1,
            bacon:1,
            salad:1
        }
    }
    onCheckoutCancelHandle=() =>{
        this.props.history.goBack();
    }
    onCheckoutContinueHandle=() =>{
        this.props.history.replace('/checkout/contact-data')
    }
    render(){
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                onCheckoutCancel={this.onCheckoutCancelHandle}
                onCheckoutContinue={this.onCheckoutContinueHandle}
                />
            </div>
        )
    }
}