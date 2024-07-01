import React, { useContext } from 'react'
import "./CartItems.css"
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from "../Assets/images/cart_cross_icon.png"

const CartItems = () => {

    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)

    return (
        <div className='cartiems'>
            <div className="cartiems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quntity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div>
                            <div className="cartiems-format cartiems-format-main">
                                <img src={e.images[0]} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartiems-quntity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img src={remove_icon} className='cartitems-remove-icon' onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr  />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartiems-down">
                <div className="cartiems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartiems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartiems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <div className="cartiems-total-item">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default CartItems