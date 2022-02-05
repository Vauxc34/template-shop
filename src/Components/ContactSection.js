import React from 'react';

/* image's */

import contactimg from '../Components/images/contact-img.jpg'

/* image's */


export default function ContactSection() {
  return (
      <>
       <section class="contact_section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="form_container">
            <div class="heading_container">
              <h2>
                Skontaktuj się z nami
              </h2>
            </div>

            <form action="https://formsubmit.co/your@email.com" method="POST">
              <div>
                <input type="text" name="name" placeholder="Imię i nazwisko " required/>
              </div>
              <div>
                <input type="email" name="email" placeholder="Adres Email" required/>
              </div>
              <div>
                <input type="text" placeholder="Numer telefonu" />
              </div>
              <div className='w-100'>
                <textarea
                style={{ width: '100%', height: '175px' }}
                name="message" class="message-box" placeholder="Wiadomość" />
              </div>
              <div class="d-flex ">
                <button type="submit">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src={contactimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

      </>
  );
}
