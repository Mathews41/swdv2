import React from 'react'
import Header from '../components/Header'
import bg from '../images/bg-min.jpg'
import asu from '../images/ASU-min.jpg'
import uofahonors from '../images/uofahonors-min.png'
import '../assets/scss/layout/projects.scss'
import api from '../images/API-min.jpg'
import elevation from '../images/elevation shot-min.png'
import aztech from '../images/aztech-min.jpg'
import '../assets/scss/layout/global.scss'




export default function projects() {
    return (
        <div className='page'>
            <Header></Header>
               
                <div></div>
                <div className='content-container'>

                    
  <div id='section_1' style={{"height": "auto"}}>
                        <h1 className='ccTitle'>Roofing Systems</h1>
                    <div class="container-proj">
  <div class="card-columns">
  <div id='card' >
      <img class="card-img-top1"  src={uofahonors} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">University of Arizona Honors Student Housing</h3>
        <h4 class="card-subtitle">
            University of Arizona Honors Student Housing
            Tucson AZ
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <div id='card' >
      <img class="card-img-top1"  src={asu} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Arizona State University </h3>
        <h4 class="card-subtitle">
            Greek Leadership Student Housing Tempe, AZ
</h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <div id='card' >
      <img class="card-img-top1"  src={aztech} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">University of Arizona</h3>
        <h4 class="card-subtitle">Arizona Science and Technology Park</h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    
    </div>
  </div>
  </div>
</div>
<div>
        </div> 
        </div>
    )
}
