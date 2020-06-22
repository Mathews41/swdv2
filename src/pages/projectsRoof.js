import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bg from '../images/bg-min.jpg'
import asu from '../images/ASU-min.jpg'
import uofahonors from '../images/uofahonors-min.png'
import '../assets/scss/layout/projects.scss'
import api from '../images/API-min.jpg'
import elevation from '../images/elevation shot-min.png'
import aztech from '../images/ua-tech-park-hero-min.jpg'
import trend from '../images/Trend.jpg'
import harley from '../images/harley.jpg'

import ppASU from '../images/Project Profile - ASU Greek Village.pdf'
import ppHarley from '../images/Project Profile - Harley Davidson.pdf'
import ppIBM from '../images/Project Profile - IBM - For Review.pdf'
import ppAzalea from '../images/Project Prolife - Azalea Regional Shopping Center - SJP ORIGINAL EDITS (2).pdf'
import ppTrend from '../images/Project Profile - The Trend at 51 Apartment Homes.pdf'







export default function projects() {
    return (
        <div className='projPage'>
            <Header></Header>
               
                <div></div>
                <div className='content-container'>

                    
  <div id='section_1' >
                        <h1 className='ccTitle'>Spray Foam Roofing Systems</h1>
                    <div class="container-proj">
  <div class="card-columns">
    <a href={ppASU} target='_blank' id='card' >
      <img alt='roof' class="card-img-top1"  src={asu} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Arizona State University </h3>
        <h4 class="card-subtitle">
            Greek Leadership Student Housing Tempe, AZ
</h4>
        <button href={ppASU} target='_blank' className='cardButton'>Read Full Study</button>
      </div>
    </a>
  <a href={ppASU} target='_blank' id='card' >
      <img alt='roof' class="card-img-top1"  src={uofahonors} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">University of Arizona Honors Student Housing</h3>
        <h4 class="card-subtitle">
          
            Tucson AZ
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </a>
    <a href={ppHarley} target='_blank' id='card' >
      <img alt='roof' class="card-img-top1" src={harley}  alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Harley Davidson</h3>
        <h4 class="card-subtitle">
          
            Scottsdale, AZ
        </h4>
      <button href={ppHarley} target='_blank' className='cardButton'>Read Full Study</button>
      </div>

    </a>
    <a href={ppTrend} target='_blank' id='card' >
      <img alt='roof' class="card-img-top1" src={trend}  alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">The Trend at 51 Apartment Homes</h3>
        <h4 class="card-subtitle">
          
            Phoenix, AZ
        </h4>
        <button className='cardButton' target='_blank' href={ppTrend}>Read Full Study</button>
      </div>
    </a>
    <a href={ppAzalea} target='_blank' id='card' >
      <img alt='roof' class="card-img-top1"  alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Azalea Regional Shopping Center</h3>
        <h4 class="card-subtitle">
          
            Los Angeles, CA
        </h4>
        <button className='cardButton' target='_blank' href={ppAzalea} >Read Full Study</button>
      </div>
    </a>
    {/* <a href={ppIBM} target='_blank' id='card' >
      <img alt='roof' class="card-img-top1" alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">IBM</h3>
        <h4 class="card-subtitle">
          
            Tucson AZ
        </h4>
        <button className='cardButton' target='_blank' href={ppIBM}>Read Full Study</button>
      </div>
    </a>
    <a href={ppASU} target='_blank' id='card' >
      <img alt='roof' class="card-img-top1"  src={aztech} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">University of Arizona</h3>
        <h4 class="card-subtitle">Arizona Science and Technology Park</h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </a> */}
    
    </div>
  </div>
  </div>
</div>
<div>
        </div>
        <Footer/> 
        </div>
    )
}
