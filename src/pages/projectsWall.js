import React from 'react'
import Header from '../components/Header'
import bg from '../images/bg-min.jpg'
import asu from '../images/ASU-min.jpg'
import uofahonors from '../images/uofahonors-min.png'
import '../assets/scss/layout/projects.scss'
import api from '../images/API-min.jpg'
import elevation from '../images/elevation shot-min.png'
import aztech from '../images/aztech-min.jpg'
import Footer from '../components/Footer'
import ppUofNC from '../images/Project Profile - University of North Carolina.pdf'
import ppAPI from '../images/Project Profile - SPF Continuous Insulation.pdf'
import ppCola from '../images/Project Profile - Coca-Cola Warehouse Office.pdf'
import ppWood from '../images/Project Profile - Woodville Farms.pdf'








export default function projects() {
    return (
        <div className='page'>
            <Header></Header>
               
                <div></div>
                <div className='content-container'>

                    <div id='section_0' style={{"height": "auto"}}>
                        <h1 className='ccTitle'>Wall Insulation Projects</h1>
                    <div class="container-proj">
  <div class="card-columns">
  <div id='card' >
      <img class="card-img-top1"  src={bg} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Yullman Stadium</h3>
        <h4 class="card-subtitle">
            Tulane University Yulman Stadium
            New Orleans LA
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <div id='card' >
      <img class="card-img-top1"  src={bg} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Yullman Stadium</h3>
        <h4 class="card-subtitle">
            Tulane University Yulman Stadium
            New Orleans LA
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <div id='card' >
      <img class="card-img-top1"  src={bg} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Yullman Stadium</h3>
        <h4 class="card-subtitle">
            Tulane University Yulman Stadium
            New Orleans LA
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <div id='card' >
      <img class="card-img-top1"  src={bg} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Yullman Stadium</h3>
        <h4 class="card-subtitle">
            Tulane University Yulman Stadium
            New Orleans LA
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <div id='card' >
      <img class="card-img-top1"  src={bg} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Yullman Stadium</h3>
        <h4 class="card-subtitle">
            Tulane University Yulman Stadium
            New Orleans LA
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <div id='card' >
      <img class="card-img-top1"  src={bg} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Yullman Stadium</h3>
        <h4 class="card-subtitle">
            Tulane University Yulman Stadium
            New Orleans LA
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <div id='card' >
      <img class="card-img-top1"  src={bg} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Yullman Stadium</h3>
        <h4 class="card-subtitle">
            Tulane University Yulman Stadium
            New Orleans LA
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <div id='card' >
      <img class="card-img-top1"  src={bg} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Yullman Stadium</h3>
        <h4 class="card-subtitle">
            Tulane University Yulman Stadium
            New Orleans LA
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <div id='card' >
      <img class="card-img-top1"  src={bg} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Yullman Stadium</h3>
        <h4 class="card-subtitle">
            Tulane University Yulman Stadium
            New Orleans LA
        </h4>
        <button className='cardButton'>Read Full Study</button>
      </div>
    </div>
    <a href={ppUofNC} target='_blank' id='card' >
      <img class="card-img-top1"  src={elevation} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">University of North Carolina</h3>
        <h4 class="card-subtitle">University of North Carolina at
Wilmington, NC</h4>
        <button href={ppUofNC} target='_blank' className='cardButton'>Read Full Study</button>
      </div>
    </a>
    <a href={ppAPI} target='_blank' id='card' >
      <img class="card-img-top1"  src={api} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">API Training Center</h3>
        <h4 class="card-subtitle">Brighton, MN</h4>
        <button href={ppAPI} target='_blank' className='cardButton'>Read Full Study</button>
      </div>
    </a>
    <a href={ppCola} target='_blank' id='card' >
      <img class="card-img-top1"  src={api} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Coca-Cola Warehouse</h3>
        <h4 class="card-subtitle">Montgomery, AL</h4>
        <button href={ppCola} target='_blank' className='cardButton'>Read Full Study</button>
      </div>
    </a>
    <a href={ppWood} target='_blank' id='card' >
      <img class="card-img-top1"  src={api} alt="Card image top"/>
      <div class="card-body1">
        <h3 class="card-title">Woodville Farms</h3>
        <h4 class="card-subtitle">Woodville, Ontario Canada</h4>
        <button href={ppWood} target='_blank' className='cardButton'>Read Full Study</button>
      </div>
    </a>
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
