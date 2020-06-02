import React, { useState } from 'react'
import icon1 from '../images/icon3.png'
import {Link} from 'gatsby'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Toggle from 'react-bootstrap/DropdownToggle'
import Item from 'react-bootstrap/DropdownItem'
import Menu from 'react-bootstrap/DropdownMenu'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import * as Icon from 'react-feather'
import Burger from './Hamburger'
import styled from 'styled-components';



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
                <div className="navbar-brand" href="/">
                  <a href='/'>
                    <img className='icon1' src={icon1} alt="" href='/' />
                  </a>
                  <div className='subtext'>
                    <h3 className='icon-text'to='/'>
                      <a href='/'>Polyurethane Technologies
                      </a>
                    </h3>
                    <sub className='subsubtext'>
                    Industrial and Construction Products
                    </sub>
                  </div>
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
                              <Link className='archLink' to='/architectsInsulation/'>Wall Insulation</Link>
                            </li>
                            <li className='roofList'>
                            <Link className='roofLink' to='/architectsRoofing/'>Roofing Systems</Link>
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
                        <div className='architectsMenu'>
                          <ul>
                            <li>
                              <Link className='archLink' to='/projectsWall/'>Wall Insulation Projects</Link>
                            </li>
                            <li className='roofList'>
                            <Link className='roofLink' to='/projectsRoof/'>Roofing Projects</Link>
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
                  </ul>
              </nav>
        </header>
          )
        }

