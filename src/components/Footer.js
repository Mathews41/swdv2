import React from 'react'

import logo from '../images/icon3.png'
import appstore from '../images/appstore-min.png'
import googleplay from '../images/googleplay.png'
import facebook from '../images/facebook.jpeg'
import linkedin from '../images/linkedin.png'
import youtube from '../images/youtube.webp'





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
        <h3 className='questionsTitle'>Questions? Call Us.</h3>
        <p>We’re here to help. Call us and speak with a foam specialist.</p>
        <h3 className='number'>800-828-1394</h3>
      </div>
      <div className='ogLogoContainer'>
      <div className='logosContainer'>
        <a href='https://apps.apple.com/us/app/swd-urethane-quik-shield/id1111843502'>
          <img className='google' src={appstore}></img>
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.dysonk.SWDUrethane'>
          <img className='google' src={googleplay}></img>
        </a>
        <a href='https://www.youtube.com/channel/UChAwoFSfTCE5gv5YCUR-6VA' target='_blank rel='noreferrer>
          <img className='socialLogo1' src={youtube}></img>
        </a>
        <a href='https://www.facebook.com/swdurethane/' target='_blank' rel='noreferrer'>
          <img className='socialLogo'src={facebook}></img>
        </a>
        <a href='https://www.linkedin.com/company/swd-urethane/?viewAsMember=true'target='_blank' rel='noreferrer'>
          <img className='socialLogo' src={linkedin}></img>
        </a>
        </div>
        </div>
    </div>
  )
}
