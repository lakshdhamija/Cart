import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component { // class based component
    render(){
        return(
            <div className="cart">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}

export default Cart;