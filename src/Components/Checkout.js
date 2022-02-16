import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../RequestMethod'
import { useNavigate } from 'react-router-dom';

/* component's */

import CheckoutForm from './CheckoutForm';

/* component's */

/* images */

import StripeImg from './images/Stripe-Emblem.png'
import PayUimg from './images/PayU-Logo.png'

/* images */

export default function Checkout() {

  const [stripeToken, setStripeToken] = useState(null)

    const cart = useSelector((state) => state.cart)

    const KEY = process.env.REACT_APP_STRIPE

    const onToken = (token) => {
        setStripeToken(token)
    }

    const navigate = useNavigate()

  const [PayMethod, setPayMethod] = useState(null)

  const HandlePaymentStripeSet = () => {
    setPayMethod(
    <StripeCheckout 
    name="Sklep Basic" 
    image="https://media.istockphoto.com/vectors/shopping-cart-icon-logo-isolated-on-white-background-vector-id1303295188?k=20&m=1303295188&s=612x612&w=0&h=ooD2ptnjjas8QtBCPCRX9UmIe2fg-AS2NZtNtIorMTw="  
    billingAddress 
    shippingAddress 
    currency='PLN'
    amount={cart.total * 100} 
    stripeKey={KEY} 
    token={onToken}
    />)
  }

  const HandlePaymentPayuSet = () => {
    setPayMethod(<CheckoutForm/>)
  }

  const PaymentMethods = [
    { name: 'stripe', bgc: '#5533ff73', img: StripeImg, actualFunction: HandlePaymentStripeSet, id: 1 },
    
  ]
  
  // { name: 'payU', bgc: '#90e96d67', img: PayUimg, actualFunction: HandlePaymentPayuSet, id: 2 },

  useEffect(() => {

    const makeRequest = async() => {
        try {
            const res = await userRequest.post("/checkout/payment/", {
                tokenId: stripeToken.id,
                amount: cart.total * 100      
            })
            navigate('/succes', {
              stripeData:res.data,
              products: cart, })
        } catch {

        }
    }
      stripeToken && makeRequest()
}, [stripeToken, cart.total, navigate])

  return (
      <>
    
    
    <div class="product-big-title-area">
    <div class="container">
    <div class="row">
    <div class="col-md-12">
    <div class="product-bit-title text-center">
    <h2>Finalizacja twojego zamówienia</h2>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    <div class="zigzag-bottom"></div>
    <div class="container">
    <div class="row d-flex justify-content-center">


    <div className='col-6 d-flex m-5 flex-column justify-content-center align-items-center'>

    <h5>Wybierz metodę płatności</h5>

    <div className='container-for-pay-options my-5'>

    {PaymentMethods.map((item, key) => (

    <div 
    id={item.name}
    key={key}
    style={{ background: item.bgc }}
    name={item.name}
    onClick={item.actualFunction}
    className='pay-method'>
      <img src={item.img} />
    </div>

    ))}

      

    </div>

      {PayMethod}

    </div>

    </div>
    </div>
    </>
  );
}
