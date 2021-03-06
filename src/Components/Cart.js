import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

/* icon's */


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons'

/* icon's */

export default function Cart() {

    const [products, setProducts] = useState([])

    const cart = useSelector(state => state.cart)

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
      };


      useEffect(() => {

        const FetchProducts = async () => {
            try {
                const res = await axios.get('https://basic-shop-apii.herokuapp.com/api/products/')
                setProducts(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        FetchProducts()
      }, [])

  return (
      <>
      
      <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                
                <div class="col-md-12">
                    <div class="product-content-right">
                        <div class="woocommerce">
                            
                                <table cellspacing="0" class="shop_table cart">
                                    <thead>
                                        <tr>
                                            <th class="product-remove">
                                            <FontAwesomeIcon icon={faTrashAlt}/>
                                            </th>
                                            <th class="product-thumbnail">
                                            <FontAwesomeIcon icon={faImage}/>
                                            </th>
                                            <th class="product-name">produkt</th>
                                            <th class="product-price">cena</th>
                                            <th class="product-quantity">ilo????</th>
                                            <th class="product-subtotal">ca??o????</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {cart.products.map((item) => (

                                             <tr class="cart_item">
                                            <td class="product-remove">
                                                <FontAwesomeIcon icon={faMinusSquare}/>
                                            </td>

                                            <td class="product-thumbnail">
                                                <a href="single-product.html">
                                                    <img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src={item.img}/>
                                                </a>
                                            </td>

                                            <td class="product-name">
                                                <a href="single-product.html">{item.title}</a> 
                                            </td>

                                            <td class="product-price">
                                                <span class="amount">{item.price}</span> 
                                            </td>

                                            <td class="product-quantity">
                                                <div class="quantity buttons_added">
                                                    <input onClick={() => handleQuantity("dec")} type="button" class="minus" value="-"/>
                                                    <input type="number" size="4" class="input-text qty text" title="Qty" value={quantity} min="0" step="0"/>
                                                    <input onClick={() => handleQuantity("inc")} type="button" class="plus" value="+"/>
                                                </div>
                                            </td>

                                            <td class="product-subtotal">
                                                <span class="amount">{item.price * quantity}</span> 
                                            </td>
                                        </tr>


                                        ))}

                                        <tr>
                                            <td class="actions" colspan="6">
                                                <Link to="/checkout">
                                                <input type="submit" value="Finalizacja zam??wienia" name="proceed" className="checkout-button button alt wc-forward m-2"/>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            

                            <div class="cart-collaterals">


                            <div class="cross-sells">
                                <h2>By?? mo??e zainteresuje cie...</h2>
                                <ul class="products">
                                    <li class="product">
                                        <a href="single-product.html">
                                            <img width="325" height="325" alt="T_4_front" class="attachment-shop_catalog wp-post-image" src="img/product-2.jpg"/>
                                            <h3>Ship Your Idea</h3>
                                            <span class="price"><span class="amount">??20.00</span></span>
                                        </a>

                                        <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="22" rel="nofollow" href="single-product.html">Select options</a>
                                    </li>

                                    <li class="product">
                                        <a href="single-product.html">
                                            <img width="325" height="325" alt="T_4_front" class="attachment-shop_catalog wp-post-image" src="img/product-4.jpg"/>
                                            <h3>Ship Your Idea</h3>
                                            <span class="price"><span class="amount">??20.00</span></span>
                                        </a>

                                        <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="22" rel="nofollow" href="single-product.html">Select options</a>
                                    </li>
                                </ul>
                            </div>


                            <div class="cart_totals ">
                                <h2>zam??wienie w skr??cie</h2>

                                <table cellspacing="0">
                                    <tbody>
                                        <tr class="cart-subtotal">
                                            <th>Kwota za obecne zakupy</th>
                                            <td><span class="amount">{cart.total} z??</span></td>
                                        </tr>

                                        <tr class="shipping">
                                            <th>Wysy??ka</th>
                                            <td>Darmowa wysy??ka</td>
                                        </tr>

                                        <tr class="order-total">
                                            <th>Ca??o????</th>
                                            <td><strong><span class="amount">{cart.total} z??</span></strong> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>

      </>
  );
}
