import React from 'react';

/* image's */

import f1 from '../Components/images/f1.png'
import f2 from '../Components/images/f2.png'
import f3 from '../Components/images/f3.png'
import f4 from '../Components/images/f4.png'

/* image's */

export default function FeatureSection() {

  const TableOfFeatures = [
    { header: 'Zabawki prosto z chin !' ,desc: 'W chinach często słyszy się o kradzieży dóbr własnych, czy o tym, że John Xina strzela do swoich obywateli' },
    { header: 'Komiksy i magazyny podróżnicze' ,desc: 'Od lat jako sprzedawcy gazet - pokazujemy innym, że warto...' },
    { header: 'Elektronika i sprzęt AGD' ,desc: 'Tylko u nas mogą państwo zakupić najnowszy telefon spod znaku GooPhone F1 Ultra' },
    { header: 'Tanie Chemikalia' ,desc: 'Soczysty rozpuszczalnik, czy uzależniający xanax to u nas chleb powszedni' },
  ]

  return (
      <>

<section class="feature_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Przede wszystkim stawiamy na jakość i najlepsze ceny
        </h2>
        <p>
          Nasze sklepy są znane z licznych afer, jak dla przykładu ta, kiedy baba z chin se włosy podpaliła na ladzie - płacąc jakimś czereśniakom za silnik do malucha
        </p>
      </div>
      <div class="row">
        
        {TableOfFeatures.map((item) => (

          <div class="col-sm-6 col-lg-3">
          <div class="box">
          <div class="img-box">
    
            </div>
            <div class="detail-box">
             <h5>
                {item.header}
              </h5>
              <p>
               {item.desc}
              </p>
              <a href="">
               <span>
                Dowiedz się więcej
                </span>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
             </a>
            </div>
          </div>
          </div>

        ))}

      </div>
     
     <button type="button" name="" id="" class="btn btn-primary m-5 w-25 text-uppercase bg-warning border-0 py-2">
       zobacz więcej
     </button>
     
    </div>
  </section>

      </>
  );
}
