import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* component's */



/* component's */

export default function ShopSection() {

  const [Products, setProducts] = useState([])
  const [isProductFeature, setIsProductFeature] = useState('no')
  const [loading, setLoading] = useState(false)

  const location = useLocation()

  const category = location.pathname.split('/')[2]

  const GetProducts = async () => {
    try {
      const res = await axios.get('https://basic-shop-apii.herokuapp.com/api/products/')
      console.log(res.data)
      setProducts(res.data)
      //setIsProductFeature(res.data)
      setLoading(true)
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    GetProducts()
  }, [])


  return (
      <>

       <section class="shop_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Najnowsze przedmioty
        </h2>
      </div>
      <div class="row">

      {Products.slice(0, 1).map((product, pId) => (
          <div 
          category={category}
          product={product} 
          key={pId} 
          class="col-md-6">
          <div class="box">
            <Link to={`/product/${product._id}`}>
              <div class="img-box">
                <img src={product.img} alt="" />
              </div>
              <div class="detail-box">
                <h6>
                  {product.title}
                </h6>
                <h6>
                  Price:
                  <span>
                    {product.price} zł
                  </span>
                </h6>
              </div>
              <div class="new">
                <span>
                {isProductFeature}
                </span>
              </div>
            </Link>
          </div>
        </div>
      ))}
        
      {Products.slice(1,2).map((product, pId) => (
          <div 
          product={product} 
          key={pId} 
          class="col-md-6 col-xl-3">
          <div class="box">
            <Link to={`/product/${product._id}`}>
              <div class="img-box">
                <img src={product.img}/>
              </div>
              <div class="detail-box">
                <h6>
                  {product.title}
                </h6>
                <h6>
                  Price:
                  <span>
                    {product.price} zł
                  </span>
                </h6>
              </div>
              <div class="new"><span>{isProductFeature}</span>
              </div>
            </Link>
          </div>
        </div>
      ))}

      </div>
     
     <div className='col-12 d-flex justify-content-center'>
        <Link className='d-inline-block position-relative m-4' to={`/products/:category`}>
        <div class="btn btn-warning p-2 px-3 d-inline-block text-white">
          Zobacz wszystkie produkty
        </div>
        </Link>
     </div>

    </div>
  </section>

      </>
  );
}
