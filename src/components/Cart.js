import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    
    return  <div className='text-lg text-center' >
      
      <h3 className='my-2' >Cart</h3>
      {cartItems.length === 0 ?<h3>oops ! seems your cart is empty <Link to='/'>Go Back</Link></h3> : (
        <div className='w-6/12 m-auto' >
        <button className='my-3 p-2 btn btn-dark' onClick={handleClearCart}>Clear Cart</button>
        <ItemList items={cartItems}/>
        
      </div>)}
      
      
      
    </div>
}



export default Cart;