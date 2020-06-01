import React, { useState } from 'react'
import logo from '../images/icon3.png'
import appstore from '../images/appstore-min.png'
import googleplay from '../images/googleplay.png'
import facebook from '../images/facebook.jpeg'
import linkedin from '../images/linkedin.png'
import youtube from '../images/youtube.png'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import greenguard from '../images/greenguard logo (1).png'
import icon2 from '../images/icon2.png'
import greenbuilding from '../images/greenbuilding.png'
import abaa from '../images/abaa.svg'




export default function Footer() {
  return (
    <div className='footer'>
      <div className='logoContainer'>
        <img className='footerLogo'src={logo}/>
        <span>Polyurethane Technologies</span>
        <sub>Industrial and Construction Products</sub>
      </div>
      <div>
        <div className='footerMain'>
          <ul>
            <h3>Main</h3>
            <li>
              <a href='/products/'> Products </a>
            </li>
            <li>
              <a href='/contractors/'> Contractors </a>
            </li>
            <li>
              <a href='/architectsStepper/'> Architects </a>
            </li>
            <li>
              <a href='/projects/'> Projects </a>
            </li>
            <li>
              <a href='/industrial/'> Industrial </a>
            </li>
            <li>
              <a href='/about/'> About </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footerAbout'>
        <ul>
         <h3>About</h3>
          <li>
           <a href='/about/'> About SWD </a>
          </li>
          <li>
          <a href='contact'> Contact Us </a>
          </li>
          <li>
          <a> News </a>
          </li>
          <li>
          <a> Careers </a>
          </li>
          <li>
          <a> Testimonials </a>
          </li>
          <li>
          <a> Terms and Conditions </a>
          </li>
          <li>
            <a> Privacy Policy </a>
          </li>
        </ul>
      </div>
      <div className='footerQuestions'>
        <h3>Questions? Call Us.</h3>
        <p>We’re here to help. Call us and speak with a foam specialist who will answer any questions you might have.</p>
        <h3 className='number'>800-828-1394</h3>
      </div>
      <div className='ogLogoContainer'>
      <div className='logosContainer'>
        <img className='google' src={appstore}></img>
        <img className='google' src={googleplay}></img>
        <img className='socialLogo' src={facebook}></img>
        <img className='socialLogo1' src={youtube}></img>
        <img className='socialLogo' src={linkedin}></img>
        </div>
        </div>
    </div>
  )
}
