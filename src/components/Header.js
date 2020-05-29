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



export default function Header() {
  
          const [isShown, setIsShown] = useState(true);
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
                    <Icon.Menu tabIndex='0' type='button' className='hamburger' color='#1F3F77' size={45}/>
                  <ul className='top-nav-list' >
                    <li>
                      <div className='products'>
                      <Link 
                      className='linkProd' to='/products/'
                      > Products
                      <div className='productsMenu'>
                          <ul>
                            <li>
                              <Link className='prodLink' to='/products/'>Wall Insulation</Link>
                            </li>
                            <li>
                              <Link className='prodLink' to='/products/'>Wall Insulation</Link>
                            </li>
                            <li>
                              <Link className='prodLink' to='/products/'>Wall Insulation</Link>
                            </li>
                            <li>
                              <Link className='prodLink' to='/products/'>Wall Insulation</Link>
                            </li>
                            <li>
                              <Link className='prodLink' to='/products/'>Wall Insulation</Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                        </div>
                    </li>
                    <li>
                      <Link className='linkCont' to='/contractors/'
                      >Contractors</Link>
                    </li>
                    <li>
                      <div className='dropdown'>
                      <Link className='linkArch' to='/architectsStepper/'>
                        Architects
                        </Link>
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
                      <Link className='linkProj'  to='/projects/'>Projects</Link>
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

