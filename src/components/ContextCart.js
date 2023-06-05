import React , {useContext} from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from "./Items";

import { CartContext } from "./Cart";


const ContextCart = () => {
    const  { item ,clearCart ,totalItem ,totalAmount}=useContext(CartContext);

    if(item.length===0){
        return(
            <>
            <header>
        <div className="continue-shopping">
        <img src="./Images/arr.jpeg" alt="arrow" className="arrow-icon"/>
        <h3>Continue Shopping </h3>
        </div>
        <div className="cart-icon">
        <img src="./Images/images.png" alt="add-to-cart" />
        <p>{totalItem}₹</p>
        </div>
        </header>
        <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">You have <span className="total-items-count0">{totalItem}₹</span> items in shopping cart</p>
       

        <div className="cart-items">
        <div className="cart-items-container">
        <Scrollbars>
        {
            item.map((currItem) => {
                return <Items key={currItem.id} {...currItem}/>

            })
        }
        
        </Scrollbars>
        </div>
        
        <div className="card-total">
        <h3>Cart Total :<span>{totalAmount}₹</span></h3>
        <button>checkout</button>
        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        </div>
        </div>
        </section>
            </>
        )
    }
    return (
        <>
        <header>
        <div className="continue-shopping">
        <img src="./Images/arr.jpeg" alt="arrow" className="arrow-icon"/>
        <h3>Continue Shopping </h3>
        </div>
        <div className="cart-icon">
        <img src="./Images/images.png" alt="add-to-cart" />
        <p>{totalItem}₹</p>
        </div>
        </header>
        <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">You have <span className="total-items-count0">{totalItem}₹</span> items in shopping cart</p>
       

        <div className="cart-items">
        <div className="cart-items-container">
        <Scrollbars>
        {
            item.map((currItem) => {
                return <Items key={currItem.id} {...currItem}/>

            })
        }
        
        </Scrollbars>
        </div>
        
        <div className="card-total">
        <h3>Cart Total :<span>{totalAmount}₹</span></h3>
        <button>checkout</button>
        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        </div>
        </div>
        </section>
        </>

    );


};
export default ContextCart;
