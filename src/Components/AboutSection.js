import React from 'react';

/* image's */

import aboutimg from '../Components/images/about-img.png'

/* image's */

export default function AboutSection() {
  return (
    <section class="about_section layout_padding">
    <div class="container  ">
      <div class="row">
        <div class="col-md-6 col-lg-5 ">
          <div class="img-box">
            <img src={aboutimg} alt="" />
          </div>
        </div>
        <div class="col-md-6 col-lg-7">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                Co nie co o nas 🤠
              </h2>
            </div>
            <p>
            Największe centrum handlowe regionu. Usytuowane jest u zbiegu ulic Mickiewicza i Świętojańskiej, w ścisłym centrum Białegostoku. 
            Alfa to połączenie tradycji z nowoczesnością. Zabytkowe budynki zostały włączone w nowoczesne wnętrze obiektu.
            </p>
            <a className='text-decoration-none' href="https://google.pl">
              Dowiedz się więcej
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
