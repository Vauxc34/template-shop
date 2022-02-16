import React from 'react';
import { Link } from 'react-router-dom';

/* image's */

import CheckedPhoto from './images/586383a07d90850fc3ce290f.png'
import BannerPhoto from './images/freestocks-_3Q3tsJ01nc-unsplash.jpg'

/* image's */

export default function Succes() {

  return (
      <>
      <div 
      style={{ height: '250px' }}
      className='d-flex justify-content-center overflow-hidden'>
      
      </div>
      <div className='col-12'>
          <div className='row d-flex justify-content-center align-items-center'>

            <div className='w-25 d-flex justify-content-center align-items-center'>

            <img className='w-25 m-5' src={CheckedPhoto} />

            </div>

            <h2 className='text-center' >Zamówienie zostało zrealizowane i czeka na wysyłkę :)</h2>
            <h4 className='text-center' >Dziękujemy za zakup z naszego sklepu!</h4>

            <Link 
            className='text-center m-4'
            to="/">
            <input type="submit"
            className='mb-5'
            value="powrót na sklep" />
            </Link>

          </div>
      </div>

      </>
  );
}
