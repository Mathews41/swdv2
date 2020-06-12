import React, { useState } from 'react'
import icon1 from '../images/icon3.png'
import {Link} from 'gatsby'

import * as Icon from 'react-feather'
import Burger from './Hamburger'
import LOGO from '../images/SWDlogo.png'




export default function Header() {
  
          return (
          <header id="header">
            <div className='superheaderContainer'>
              <Icon.Phone className='phoneIcon' size={30} color='#1F3F77'/>
            <Link className='superheader' to="/contact/">
              800-828-1394</Link>
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
                      <div className='products'>
                      <a 
                      className='linkProd' href='/products/'
                      > Products
                      </a>
                        </div>
                    </li>
                    <li>
                      <a className='linkCont' href='/contractors/'
                      >Contractors</a>
                    </li>
                    <li>
                      <div className='dropdown'>
                      <a className='linkArch' href='/architectsStepper/'>
                        Architects
                        </a>
                        <div className='architectsMenu'>
                          <ul>
                            <li>
                              <Link className='archLink' to='/architectsInsulation/'>Spray Foam Insulation</Link>
                            </li>
                            <li className='roofList'>
                            <Link className='roofLink' to='/architectsRoofing/'>Spray Foam Roofing Systems</Link>
                            </li>
                          </ul>
                        </div>
                        </div>
                    </li>
                    <li>
                    <div className='dropdown'>
                      <a className='linkProj' href='/projectsStepper/'>
                        Projects
                        </a>
                        <div className='projectsMenu'>
                          <ul>
                            <li>
                              <Link className='archLink' to='/projectsWall/'>Spray Foam Insulation Projects</Link>
                            </li>
                            <li className='roofList'>
                            <Link className='roofLink' to='/projectsRoof/'>Spray Foam Roofing Projects</Link>
                            </li>
                          </ul>
                        </div>
                        </div>
                    </li>
                    <li>
                      <Link className='linkInd' to='/industrial/'>Industrial</Link>
                    </li>
                    <li>
                      <Link className='linkAbout' to='/about/'>About</Link>
                    </li>
                    <li>
                      <Link className='linkAbout' to='/contact/'>Contact Us</Link>
                    </li>
                  </ul>
              </nav>
        </header>
          )
        }

