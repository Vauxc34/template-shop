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
            <div class="col-md-4">
                <div class="single-sidebar">
                        <h2 class="sidebar-title">znajdź ciekawy produkt</h2>
                        <form action="">
                            <input type="text" />
                            <input type="submit" value="szukaj" />
                        </form>
                    </div>
                    
                    <div class="single-sidebar">
                        <h2 class="sidebar-title">produkty</h2>

                        {products.map((item, key) => (

                        <div key={key} class="thubmnail-recent">
                        <img src={item.img} class="recent-thumb"/>
                        <h2>
                            <Link to={`/product${item._id}`}>
                            <h2>{item.title}</h2>
                            </Link>
                        </h2>
<                       div class="product-sidebar-price">
                         <ins>{item.price}</ins> 
                         <del>{item.price}</del>
                        </div>                             
                        </div>

                        ))}
                       
                    </div>
                    
            </div>
                
                <div class="col-md-8">
                    <div class="product-content-right">
                        <div class="woocommerce">
                            <form method="post" action="#">
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
                                            <th class="product-quantity">ilość</th>
                                            <th class="product-subtotal">całość</th>
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
                                                <input type="submit" value="Finalizacja zamówienia" name="proceed" className="checkout-button button alt wc-forward m-2"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>

                            <div class="cart-collaterals">


                            <div class="cross-sells">
                                <h2>Być może zainteresuje cie...</h2>
                                <ul class="products">
                                    <li class="product">
                                        <a href="single-product.html">
                                            <img width="325" height="325" alt="T_4_front" class="attachment-shop_catalog wp-post-image" src="img/product-2.jpg"/>
                                            <h3>Ship Your Idea</h3>
                                            <span class="price"><span class="amount">£20.00</span></span>
                                        </a>

                                        <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="22" rel="nofollow" href="single-product.html">Select options</a>
                                    </li>

                                    <li class="product">
                                        <a href="single-product.html">
                                            <img width="325" height="325" alt="T_4_front" class="attachment-shop_catalog wp-post-image" src="img/product-4.jpg"/>
                                            <h3>Ship Your Idea</h3>
                                            <span class="price"><span class="amount">£20.00</span></span>
                                        </a>

                                        <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="22" rel="nofollow" href="single-product.html">Select options</a>
                                    </li>
                                </ul>
                            </div>


                            <div class="cart_totals ">
                                <h2>zamówienie w skrócie</h2>

                                <table cellspacing="0">
                                    <tbody>
                                        <tr class="cart-subtotal">
                                            <th>Kwota za obecne zakupy</th>
                                            <td><span class="amount">{cart.total} zł</span></td>
                                        </tr>

                                        <tr class="shipping">
                                            <th>Wysyłka</th>
                                            <td>Darmowa wysyłka</td>
                                        </tr>

                                        <tr class="order-total">
                                            <th>Całość</th>
                                            <td><strong><span class="amount">{cart.total} zł</span></strong> </td>
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
