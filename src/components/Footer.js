import React, {useState} from 'react';
import { Helmet } from "react-helmet";


import logo from '../images/gatsby-icon.png'
import appstore from '../images/appstore-min.jpg'
import googleplay from '../images/googleplay.jpg'
import facebook from '../images/facebook.jpg'
import linkedin from '../images/linkedin.jpg'
import youtube from '../images/youtube.jpg'
import Contact from './Contact'


export default function Footer() {
  return (
    <div className='footer'>
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
              <a href='/projects/'> Projects </a>
            </li>
            <li>
              <a href='/details/'> Details & Drawings </a>
            </li>
            
          </ul>
        </div>
      </div>
      
      <Contact/>
      <div className='footerQuestions'>
        <h3 className='questionsTitle'>Questions? Call Us.</h3>
        <p>We’re here to help. Call us to speak with a foam specialist or visit our corporate website.</p>
        <h3 className='number'>800-828-1394</h3>
        <a className='domain'href='http://swdurethane.com/'> swdurethane.com </a>
      </div>
      <div className='ogLogoContainer'>
      <div className='logosContainer'>
        
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
        <Helmet>
          <script type="application/ld+json">
            {`
              {
                "@type": "Organization",
                "url": "https://www.swdarchproducts.com",
                "name": "SWD Urethane",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "800-828-1394",
                  "contactType": "Customer Support"
                }
              }
            `}
          </script>
        </Helmet>
    </div>
    
  )
}
