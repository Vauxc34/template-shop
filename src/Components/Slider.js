import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* image's */

import sliderimg from '../Components/images/slider-img.png'

/* image's */

/* icon's */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* icon's */

export default function Slider() {

  /* slider */
  
  

  const [sliderSlide1, setSliderSlide1] = useState('active')
  const [sliderSlide2, setSliderSlide2] = useState('')
  const [sliderSlide3, setSliderSlide3] = useState('')

  const [isSliderSet, setIsSliderSet] = useState(false)

  const HandleSlider1 = () => {
    setIsSliderSet(true)
    setSliderSlide1('active')
    setSliderSlide2('')
    setSliderSlide3('')

    if(sliderSlide3 == '') {
      setSliderSlide3('')
    }

  }

  const HandleSlider2 = () => {
    setSliderSlide1('')
    setSliderSlide2('active')
    setSliderSlide3('')
    setIsSliderSet(false)
    if(isSliderSet == true) {
      setSliderSlide1('')
    }
  }

  const HandleSlider3 = () => {
    setSliderSlide3('active')
    if(isSliderSet == false) {
      setSliderSlide1('')
      setSliderSlide2('')

      if(sliderSlide1 == '') {
        setSliderSlide1('')
      }

    }
  }

  /* slider */

  return (
  <>



    <div class="hero_area">

    <div class="hero_social">
      <a href="">
      <FontAwesomeIcon icon={faFacebookF}/>
      </a>
      <a href="">
      <FontAwesomeIcon icon={faTwitter}/>
      </a>
      <a href="">
      <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a href="">
      <FontAwesomeIcon icon={faInstagram}/>
      </a>
    </div>

    <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-fluid ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Bo u nas jest tanio!
                    </h1>
                    <p>
                    Motywacją do ciągłego rozwoju naszej hurtowni wielobranżowej są stale zmieniające się trendy, potrzeby oraz to, iż wiele osób szuka oryginalnych produktów i kreatywnych rozwiązań.
                    </p>
                    <Link to="/products">
                    <div className="btn btn-warning p-2 px-3 text-white">

                     Sprawdź ofertę  
                    
                    </div>
                    </Link>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src={sliderimg} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container-fluid ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Smart Watches
                    </h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src={sliderimg} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container-fluid ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h1>
                      Smart Watches
                    </h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src={sliderimg} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li onClick={HandleSlider1} className={sliderSlide1}></li>
          <li onClick={HandleSlider2} className={sliderSlide2}></li>
          <li onClick={HandleSlider3} className={sliderSlide3}></li>
        </ol>
      </div>

    </section>

    </div>

  </>);
}
