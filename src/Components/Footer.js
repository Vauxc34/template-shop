import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* icon's */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* icon's */

export default function Footer() {



  return (
      <>
      
      <footer class="footer_section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 footer-col">
          <div class="footer_detail">
            <h4>
              O nas 🏬
            </h4>
            <p>
            Jesteśmy firmą z długoletnim stażem, posiadamy doświadczenie zarówno w branży odzieżowej jak i obuwniczej. 
            Dokładamy wszelkich starań, aby dostarczyć nasze produkty na czas oferując rzetelną obsługę.
            </p>
            <div class="footer_social">
              <a href="">
                <FontAwesomeIcon icon={faFacebookF}/>
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
              <a href="">
              <FontAwesomeIcon icon={faLinkedin}/>
              </a>
              <a href="">
              <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 footer-col">
          <div class="footer_contact">
            <h4>
              Znajdź nas na 🙄
            </h4>
            <div class="contact_link_box">
              <a className=' text-decoration-none' href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Warszawa
                </span>
              </a>
              <a className=' text-decoration-none' href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Zadzwoń 632 443 222
                </span>
              </a>
              <a className=' text-decoration-none' href="sklep-basic@gmail.com">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  sklep-basic@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 footer-col">
          <div class="footer_contact">
            <h4>
              Zasubsykruj 📧
            </h4>
            <form action="#">
              <input type="text" placeholder="Twój adres e-mail" />
              <button type="submit">
              Zasubsykruj
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 footer-col">
          <div class="map_container">
            <div class="map">
              <div id="googleMap"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-info">
        
      </div>
    </div>
  </footer>

      </>
  );
}
