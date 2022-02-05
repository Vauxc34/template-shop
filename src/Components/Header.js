import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* icon's */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons';


/* icon's */

export default function Header() {

  const quantity = useSelector(state => state.cart.quantity)

  return (
      <>
    
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <Link class="navbar-brand" to="/">
            <span>
              Basic
            </span>
          </Link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
              <Link class="nav-link" to="/">strona główna<span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/watches"> produkty </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about"> twój profil </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about"> o nas </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">skontaktuj się z nami</Link>
              </li>
            </ul>
            <div class="user_option-box">
              <Link to="/">
                <FontAwesomeIcon icon={faUser}/>
              </Link>
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart}/>
                <div className='cart-quantity-icon'>
                <p className='quantity-item-itself'>
                {quantity}
                </p>
                </div>
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faSearch}/>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>

      </>
  );
}
