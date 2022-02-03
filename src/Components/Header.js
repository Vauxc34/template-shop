import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

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
              <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/watches"> Watches </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about"> About </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div class="user_option-box">
              <a href="">
                <i class="fa fa-user" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>

      </>
  );
}
