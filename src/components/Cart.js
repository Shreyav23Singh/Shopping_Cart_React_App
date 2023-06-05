import React ,{createContext, useEffect, useReducer  } from "react";

import './Cart.css';
import ContextCart from "./ContextCart";
import { products } from "./Products";
import { Reducer } from "./Reducer";

export const CartContext =createContext();


const initialState ={
    item :products,
    totalAmount :0,
    totalItem:0
};

const Cart = () => {
    const [state , dispatch] =useReducer(Reducer , initialState);

    //Delete individual item from cart
    const removeItem = (id) =>{
        return dispatch({
            type:"Remove_item",
            payload:id,
        });

        
    };

    //Clear Cart 
    const clearCart =() => {
        return dispatch({
                type :"CLEAR_CART",
            });
    };
    
    //increment quantity if user click on ' + ' icon

    const increment = (id) =>{
        return dispatch({
            type :"INCREMENT",
            payload:id,
        });
    };
     //decrement quantity if user click on ' - ' icon

     const decrement = (id) =>{
        return dispatch({
            type :"DECREMENT",
            payload:id,
        });
    };

    //Here we will use useEffect to update the data
  
    useEffect(() => {
        dispatch({
          type: "GET_TOTAL"
        });
      }, [state.item]);

    return (
       
        <CartContext.Provider value={{...state , removeItem , clearCart , increment ,decrement}}>
        <ContextCart/>
        </CartContext.Provider>
        

    );

}
export default Cart ;
