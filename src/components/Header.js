import React, { useState } from 'react'
import icon1 from '../images/icon3.jpg'
import {Link} from 'gatsby'

import * as Icon from 'react-feather'
import Burger from './Hamburger'
import LOGO from '../images/logo.jpg'




export default function Header() {
  
          return (
          <header id="header">
            <div className='superheaderContainer'>
              <Icon.Phone className='phoneIcon' size={30} color='#1F3F77'/>
            <div className='superheader'>
              800-828-1394</div>
            </div>
              <nav className="navbar">
                <div className='architectsMenu'>
                  
                </div>
                <div className='industrialMenu'>
                  
                </div>
                <div id="navbar-brand">
                  <a href='/'>
                    <img className='icon1' src={LOGO} alt="swd logo" href='/'/>
                  </a>
                  
                </div>
                    <Burger/>
                  <ul className='top-nav-list' >
                  <li>
                   <a className='linkArch' href='/'>
                        Home
                        </a>
                   </li>
                   <li>
                   <a className='linkArch' href='/architectsInsulation/'>
                        Insulation
                        </a>
                   </li>
                   <li>
                   <a className='linkArch' href='/architectsRoofing/'>
                        Roofing
                        </a>
                   </li>
                    <li>
                    <div className='dropdown'>
                      <a className='linkProj' href='/projects/'>
                        Projects
                        </a>
                        <div className='projectsMenu'>
                          <ul>
                            <li>
                              <Link className='archLink' to='/projectsWall/'> Insulation Projects</Link>
                            </li>
                            <li className='roofList'>
                            <Link className='roofLink' to='/projectsRoof/'>Roofing Projects</Link>
                            </li>
                          </ul>
                        </div>
                        </div>
                    </li>
                    <li>
                    <div className='dropdown'>
                      <a className='linkProj' href='/details/'>
                        Details & Drawings
                        </a>
                        <div className='projectsMenu'>
                          <ul>
                            <li>
                              <Link className='archLink' to='/detailsInsulation/'>Insulation Details</Link>
                            </li>
                            <li className='roofList'>
                            <Link className='roofLink' to='/detailsRoof/'>Roofing Details</Link>
                            </li>
                          </ul>
                        </div>
                        </div>
                    </li>
                    <li>
                   <a className='linkArch' href='/leed/'>
                        LEED
                        </a>
                   </li>
                   
                  </ul>
              </nav>
        </header>
          )
        }

