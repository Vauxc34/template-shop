import React from 'react';

/* image's */

import c1 from '../Components/images/c1.jpg'
import c2 from '../Components/images/c2.jpg'

/* image's */

export default function ClientSection() {
  return (
      <>
      
      <section class="client_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Opinie naszych klientów
        </h2>
      </div>
      <div class="carousel-wrap ">
        <div class="owl-carousel client_owl-carousel">
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src={c1} alt="" />
              </div>
              <div class="detail-box">
                <div class="client_info">
                  <div class="client_name">
                    <h5>
                      Andrzej Kolasa
                    </h5>
                    <h6>
                      Jeden z naszych oddanych klientów
                    </h6>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                Dla ludzi ze średnim wykształceniem, niejednokrotnie bez matury to bardzo dobra praca. Po studiach z językami nikt nie będzie pracował za takie grosze. Pensje na tym samym poziomie co w Biedronce czy Lidlu. Brakuje tylko jeszcze Ukraińców w tej instytucji. Ogólnie na 4+
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src={c2} alt="" />
              </div>
              <div class="detail-box">
                <div class="client_info">
                  <div class="client_name">
                    <h5>
                      Martyna Żółkiewicz
                    </h5>
                    <h6>
                      Klientka
                    </h6>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                Obecnie jestem klientem Banku Millenium.Chcę powiedzieć że jestem bardzo zadowolony z jakości usług i udogodnień jakie bank oferuje i ciągle się rozwijając.Osobiście Polecam Bank Millenium.Wcześniej byłem do repolonizacji w pekao i to jak by być w latach 80tych i tak ten bank trzyma poziom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      </>
  );
}
