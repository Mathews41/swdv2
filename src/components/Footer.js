import React from 'react'

import logo from '../images/icon3.jpg'
import appstore from '../images/appstore-min.jpg'
import googleplay from '../images/googleplay.jpg'
import facebook from '../images/facebook.jpg'
import linkedin from '../images/linkedin.jpg'
import youtube from '../images/youtube.jpg'





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
              <a href='/'> Home </a>
            </li>
            <li>
              <a href='/architectsInsulation/'> Insulation </a>
            </li>
            <li>
              <a href='/architectsRoofing/'> Roofing </a>
            </li>
            <li>
              <a href='/projectsStepper/'> Projects </a>
            </li>
            <li>
              <a href='/details/'> Details & Drawings </a>
            </li>
          </ul>
        </div>
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
