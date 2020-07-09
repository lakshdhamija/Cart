import React from 'react';
class CartItem extends React.Component { // class based component
    constructor (){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
        this.state.qty++;
    }
    render () {
        const {title, price, qty} = this.state; // object destructuring so we do not have to write 'this.state' everytime
        return (
            <div className="cart-item">
                <div className="left-blcok">
                    <img style={styles.image} />    
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" onClick={this.increaseQuantity} />
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992683.svg" />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
                    </div>
                </div>
            </div>    
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;