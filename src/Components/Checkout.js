import React from 'react';

/* component's */

import CheckoutForm from './CheckoutForm';

/* component's */

export default function Checkout() {
  return (
      <>
    
    
    <div class="product-big-title-area">
    <div class="container">
    <div class="row">
    <div class="col-md-12">
    <div class="product-bit-title text-center">
    <h2>Finalization Order</h2>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    <div class="zigzag-bottom"></div>
    <div class="container">
    <div class="row">

    <CheckoutForm/>

    </div>
    </div>
    </>
  );
}
