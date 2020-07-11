import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component { // class based component
    constructor (){
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 10,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
           products: products 
        });
    }
    // handleDecreaseQuantity = (product) => {
    //     const{ products } = this.state;
    //     const index = products.indexOf(product);
    //     if(products[index].qty == 1){
    //         return;
    //     }
    //     products[index].qty -= 1;
    //     this.setState({
    //         products: products
    //     });
    // }
    render(){
        const { products } = this.state;
        return(
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id} 
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;