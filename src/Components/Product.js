import React, { useState, useEffect } from 'react';
import { publicRequest } from '../RequestMethod';
import { useLocation } from 'react-router-dom';
import { addProduct } from '../redux/CartRedux';
import { useDispatch } from 'react-redux';
import axios from 'axios';

/* image's */

import productthumb1 from './images/product-thumb-1.jpg'
import productthumb2 from './images/product-thumb-2.jpg'
import productthumb3 from './images/product-thumb-3.jpg'
import product1 from './images/product-1.jpg'
import product2 from './images/product-2.jpg'
import product3 from './images/product-3.jpg'
import product4 from './images/product-4.jpg'
import product5 from './images/product-5.jpg'
import product6 from './images/product-6.jpg'

/* image's */

export default function Product() {

    const [Product, setProduct] = useState({})

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch()

    const location = useLocation()

    const id = location.pathname.split('/')[2]

    useEffect(() => {

        const GetProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data)
            } catch {}
        }
        GetProduct()
    }, [id])

    const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
      };

    const HandleClick = (e) => {
        e.preventDefault();
        dispatch(
            addProduct({ ...Product, quantity })
          );
    }

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
                        <div class="thubmnail-recent">
                            <img src={productthumb1} class="recent-thumb" alt="" />
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$100.00</del>
                            </div>                             
                        </div>
                        <div class="thubmnail-recent">
                            <img src={productthumb1} class="recent-thumb" alt="" />
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$100.00</del>
                            </div>                             
                        </div>
                        <div class="thubmnail-recent">
                            <img src={productthumb1} class="recent-thumb" alt="" />
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$100.00</del>
                            </div>                             
                        </div>
                        <div class="thubmnail-recent">
                            <img src={productthumb1} class="recent-thumb" alt="" />
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div class="product-sidebar-price">
                                <ins>$700.00</ins> <del>$100.00</del>
                            </div>                             
                        </div>
                    </div>
                    
                    
                    </div>
                
                <div class="col-md-8">
                    <div class="product-content-right">
                        <div class="product-breadcroumb">
                            <a href="">Home</a>
                            <a href="">Category Name</a>
                            <a href="">Sony Smart TV - 2015</a>
                        </div>
                        
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="product-images">
                                    <div class="product-main-img">
                                        <img src={product2} alt="" />
                                    </div>
                                    
                                    <div class="product-gallery">
                                        <img src={productthumb1} alt="" />
                                        <img src={productthumb2} alt="" />
                                        <img src={productthumb3} alt="" />
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="product-inner">
                                    <h2 class="product-name">{Product.title}</h2>
                                    <div class="product-inner-price">
                                        <ins>$700.00</ins> <del>$100.00</del>
                                    </div>    
                                    
                                    <form action="" class="cart">

                                    <div class="quantity buttons_added">
                                    <input onClick={() => handleQuantity("dec")} type="button" class="minus" value="-"/>
                                    <input type="number" class="input-text qty text" title="Qty" value={quantity}/>
                                    <input onClick={() => handleQuantity("inc")} type="button" class="plus" value="+"/>
                                    </div>

                                        <button onClick={HandleClick} class="add_to_cart_button text-decoration-none" type="submit">Dodaj do koszyka</button>
                                    </form>   
                                    
                                    <div class="product-inner-category">
                                        <p>Category: <a href="">Summer</a>. Tags: <a href="">awesome</a>, <a href="">best</a>, <a href="">sale</a>, <a href="">shoes</a>. </p>
                                    </div> 
                                    
                                    <div role="tabpanel">
                                        <ul class="product-tab" role="tablist">
                                            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Description</a></li>
                                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Reviews</a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane fade in active" id="home">
                                                <h2>Product Description</h2>  
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.</p>

                                                <p>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.</p>
                                            </div>
                                            <div role="tabpanel" class="tab-pane fade" id="profile">
                                                <h2>Reviews</h2>
                                                <div class="submit-review">
                                                    <p><label for="name">Name</label> <input name="name" type="text" /></p>
                                                    <p><label for="email">Email</label> <input name="email" type="email" /></p>
                                                    <div class="rating-chooser">
                                                        <p>Your rating</p>

                                                        <div class="rating-wrap-post">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p><label for="review">Your review</label> <textarea name="review" id="" cols="30" rows="10"></textarea></p>
                                                    <p><input type="submit" value="Submit" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
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
