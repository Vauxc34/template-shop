import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* icon's */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons';


/* icon's */

export default function Header({ HandleSearchSomething }) {

  const quantity = useSelector(state => state.cart.quantity)

  const HeaderOption = [
    { name: "strona główna" ,url: "/" },
    { name: "produkty" ,url: "/watches" },
    { name: "twój profil" ,url: "/twoj-profil/:id" },
    { name: "o nas" ,url: "/about" },
    { name: "skontaktuj się z nami" ,url: "/contact" },
  ]

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

              {HeaderOption.map(((option) => (
                <li class="nav-item active">
                <Link class="nav-link" to={`${option.url}`}>{option.name}<span class="sr-only">(current)</span></Link>
                </li>
              )))}
  

            </ul>
            <div class="user_option-box">
              <Link to="/twoj-profil/:id">
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
              <a onClick={HandleSearchSomething}>
                <FontAwesomeIcon icon={faSearch}/>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
      </>
  );
}
