import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Footer from '../components/Footer'
import { Helmet } from "react-helmet";

import Media from 'react-bootstrap/Media'
import * as Icon from 'react-feather'
import '../assets/scss/layout/details.scss'
import Header from '../components/Header'
import uofahero from '../images/techpark.jpg'


// files
import QSW001Ceil from '../images/QSW-001 Ceiling - Cathedral with Skylight.pdf'
import QSW013Ceil from '../images/QSW-013 Unvented Attic.pdf'
import QSW012Ceil from '../images/QSW-012 Two Story Wood Construction2.pdf'
import QSW103Ceil from '../images/QSW-103 Parapet Wall and Roof Detail.pdf'
import QSW002 from '../images/QSW-002 Basement - Finished Internal Insulation.pdf'
import QSW0042 from '../images/QSW-004 Basement - Unconditioned2.pdf'
import QSW004 from '../images/QSW-004 Basement - Unconditioned.pdf'
import QSW0032 from '../images/QSW-003 Basement - Finished External Insulation2.pdf'
import QSW003 from '../images/QSW-003 Basement - Finished External Insulation.pdf'
import Qs005 from '../images/QSW-005 Crawlspace - Vented.pdf'
import QSW006 from '../images/QSW-006 Crawlspace - Unvented.pdf'
import QSW007 from '../images/QSW-007 Crawlspace - Unvented with Termite Inspection.pdf'
import QSW008 from '../images/QSW-008 Floor - Cantilevered.pdf'
import QSW0082 from '../images/QSW-008 Floor - Cantilevered2.pdf'
import QSW009 from '../images/QSW-009 Foundation Detail - Frame Construction.pdf'
import QSW101 from '../images/QSW-101 Floor Transition - Metal Frame Concrete Floor.pdf'
import QSW102 from '../images/QSW-102 Floor Transistion - Metal Frame Metal Floor.pdf'
import QSW201 from '../images/QSW-201 Foundation Detail - Masonry.pdf'
import QSW010 from '../images/QSW-010 Garage - Wall Connection with Conditioned Interior.pdf'
import QSW0102 from '../images/QSW-010 Garage - Wall Connection with Conditioned Interior2.pdf'
import QSW011 from '../images/QSW-011 Sound Attenuation Wall.pdf'
import QSW012 from '../images/QSW-012 Two Story Wood Construction.pdf'
import QSW0122 from '../images/QSW-012 Two Story Wood Construction2.pdf'
import QSW0123 from '../images/QSW-012 Two Story Wood Construction3.pdf'
import QSW014 from '../images/QSW-014 Window Unit - Wood Frame.pdf'
import QSW051 from '../images/QSW-051 Wood Wall Assembly - Face Sealed.pdf'
import QSW051a from '../images/QSW-051A Wood Wall Assembly - Face Sealed (Top View).pdf'
import QSW052 from '../images/QSW-052 Wood Wall Assembly - Drainage Plane.pdf'
import QSW052a from '../images/QSW-052A Wood Wall Assembly - Drainage Plane (Top View).pdf'
import QSW053 from '../images/QSW-053 Wood Wall Assembly - Drained Screened.pdf'
import QSW053a from '../images/QSW-053A Wood Wall Assembly - Drained Screened (Top View).pdf'
import QSW0104 from '../images/QSW-104 Steel Framing Construction with Conditioned Interior.pdf'
import QSW0153 from '../images/QSW-153 Steel Wall Assembly - Drained Screened.pdf'
import QSW0153a from '../images/QSW-153A Steel Wall Assembly - Drained Screened (Top View).pdf'
import QSW202 from '../images/QSW-202  Window Unit - Masonry.pdf'
import QSW0251 from '../images/QSW-251 Masonry or Concrete Wall - Face Sealed.pdf'
import QSW0251a from '../images/QSW-251A Masonry or Concrete Wall - Face Sealed (Top View).pdf'
import QSW0253 from '../images/QSW-253 Masonry or Concrete Wall - Drained Screened.pdf'
import QSW0253a from '../images/QSW-253A Masonry or Concrete Wall - Drained Screened (Top View).pdf'
import QSW0261 from '../images/QSW-261 Masonry Wall (CMU) - Pour Foam Insulation Face Sealed.pdf'
import QSW0261a from '../images/QSW-261A Masonry Wall (CMU) - Pour Foam Insulation Face Sealed (Top View).pdf'
import QSW0263 from '../images/QSW-263 Masonry Wall (CMU) - Pour Foam Insulation Drained Screened.pdf'
import QSW0263a from '../images/QSW-263A Masonry Wall (CMU) - Pour Foam Insulation Drained Screened (Top View).pdf'





export default function details() {
    return (
        <div className='detailspage'>
            <Helmet>
            <meta charSet="utf-8" />
            <title>Insulation Details</title>
            <link rel="canonical" href="https://swdarchproducts.com/detailsInsulation/" />
            </Helmet>
            <Header/>
            <div className='detailsPg'>
            <div className='detailsheader'>
                <h1>Insulation Details & Drawings</h1>
            </div>

            {/* Main Content */}

            <div className='details-content'>

                {/* Wall Accordian */}

                <div className='wallInsulation'>
                    <Accordion className='accordian1' defaultActiveKey="0">
                        <h4>Wall Insulation Details</h4>
                    
                            <Card className='card1'>
                                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                                    <h3>Ceiling </h3>
                                    <Icon.ChevronDown color='blue' size={45} />
                                    <h6>Tech Info Click Here</h6>
                                </Accordion.Toggle>
                                <Accordion.Collapse className='collapse1' eventKey="1">
                                <Card.Body className='body1'>
                                <Media className='media1'>
                                    <Media.Body className='media-body1'>   
                                    <ul className='ullist'>
                                    <li>
                                            <a href={QSW001Ceil} target='_blank' rel='noreferrer'>
                                            QSW-001 Ceiling - Cathedral with Skylight
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW012Ceil} target='_blank' rel='noreferrer'>
                                            QSW-012 Two Story Wood Construction
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW013Ceil} target='_blank' rel='noreferrer'>
                                            QSW-013 Unvented Attic
                                            </a> 
                                            </li>
                                            <li>
                                            <a href={QSW103Ceil} target='_blank' rel='noreferrer'>
                                            QSW-103 Parapet Wall and Roof Detail
                                            </a> 
                                            </li>
                                    </ul>
                                </Media.Body>
                            </Media>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='card1'>
                                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="2">
                                    <h3> Floor </h3>
                                    <Icon.ChevronDown color='blue' size={45} />
                                    <h6>Tech Info Click Here</h6>
                                </Accordion.Toggle>
                                <Accordion.Collapse className='collapse1' eventKey="2">
                                <Card.Body className='body1'>
                                <Media className='media1'>
                                    <Media.Body className='media-body1'>   
                                    <ul className='ullist'>
                                            <li>
                                            <a href={QSW002} target='_blank' rel='noreferrer'>
                                            QSW-002 Basement - Finished Internal Insulation
                                            </a> 
                                            </li>
                                            <li>
                                            <a href={QSW004} target='_blank' rel='noreferrer'>
                                            QSW-004 Basement - Unconditioned
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW0042} target='_blank' rel='noreferrer'>
                                            QSW-004 Basement - Unconditioned2
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW003} target='_blank' rel='noreferrer'>
                                            QSW-003 Basement - Finished External Insulation
                                            </a> 
                                            </li>
                                            <li>
                                            <a href={QSW0032} target='_blank' rel='noreferrer'>
                                            QSW-003 Basement - Finished External Insulation2
                                            </a> 
                                            </li>
                                            <li>
                                            <a href={Qs005 } target='_blank' rel='noreferrer'>
                                            QSW-005 Crawlspace - Vented
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW006} target='_blank' rel='noreferrer'>
                                            QSW-006 Crawlspace - Unvented
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW007} target='_blank' rel='noreferrer'>
                                            QSW-007 Crawlspace - Unvented with Termite Inspection
                                            </a> 
                                            </li>
                                            <li>
                                            <a href={QSW008} target='_blank' rel='noreferrer'>
                                            QSW-008 Floor - Cantilevered
                                            </a> 
                                            </li>
                                            <li>
                                            <a href={QSW0082} target='_blank' rel='noreferrer'>
                                            QSW-008 Floor - Cantilevered2
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW009} target='_blank' rel='noreferrer'>
                                            QSW-009 Foundation Detail - Frame Construction
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW101} target='_blank' rel='noreferrer'>
                                            QSW-101 Floor Transition - Metal Frame Concrete Floor
                                            </a> 
                                            </li>
                                            <li>
                                            <a href={QSW102} target='_blank' rel='noreferrer'>
                                            QSW-102 Floor Transistion - Metal Frame Metal Floor
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW201} target='_blank' rel='noreferrer'>
                                            QSW-201 Foundation Detail - Masonry
                                            </a>
                                            </li>
                                    </ul>
                                </Media.Body>
                            </Media>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='card1'>
                                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="3">
                                    <h3>Wall</h3>
                                    <Icon.ChevronDown color='blue' size={45} />
                                    <h6>Tech Info Click Here</h6>
                                </Accordion.Toggle>
                                <Accordion.Collapse className='collapse1' eventKey="3">
                                <Card.Body className='body1'>
                                <Media className='media1'>
                                    <Media.Body className='media-body1'>   
                                    <ul className='ullist'>
                                        <li>
                                            <a href={QSW010} target='_blank' rel='noreferrer'>
                                            QSW-010 Garage - Wall Connection with Conditioned Interior
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW0102} target='_blank' rel='noreferrer'>
                                            QSW-010 Garage - Wall Connection with Conditioned Interior2
                                            </a>
                                            </li>
                                            <li>
                                            <a href={QSW011} target='_blank' rel='noreferrer'>
                                            QSW-011 Sound Attenuation Wall
                                            </a> 
                                            </li>
                                            <li>
                                            <a href={QSW012} target='_blank' rel='noreferrer'>
                                            QSW-012 Two Story Wood Construction
                                            </a> 
                                            </li><li>
                                            <a href={QSW0122} target='_blank' rel='noreferrer'>
                                            QSW-012 Two Story Wood Construction2
                                            </a> 
                                            </li><li>
                                            <a href={QSW0123} target='_blank' rel='noreferrer'>
                                            QSW-012 Two Story Wood Construction3
                                            </a> 
                                            </li> <li>
                                            <a href={QSW014} target='_blank' rel='noreferrer'>
                                            QSW-014 Window Unit - Wood Frame
                                            </a>
                                            </li><li>
                                            <a href={QSW051} target='_blank' rel='noreferrer'>
                                            QSW-051 Wood Wall Assembly - Face Sealed
                                            </a> 
                                            </li> <li>
                                            <a href={QSW051a} target='_blank' rel='noreferrer'>
                                            QSW-051A Wood Wall Assembly - Face Sealed (Top View)
                                            </a> 
                                           </li><li>
                                            <a href={QSW052} target='_blank' rel='noreferrer'>
                                            QSW-052 Wood Wall Assembly - Drainage Plane
                                            </a>
                                            </li>  <li>
                                            <a href={QSW052a} target='_blank' rel='noreferrer'>
                                            QSW-052A Wood Wall Assembly - Drainage Plane (Top View)
                                            </a> 
                                           </li><li>
                                            <a href={QSW053} target='_blank' rel='noreferrer'>
                                            QSW-053 Wood Wall Assembly - Drained Screened
                                            </a>
                                            </li> <li>
                                            <a href={QSW053a} target='_blank' rel='noreferrer'>
                                            QSW-053A Wood Wall Assembly - Drained Screened (Top View)
                                            </a> 
                                           </li><li>
                                            <a href={QSW0104} target='_blank' rel='noreferrer'>
                                            QSW-104 Steel Framing Construction with Conditioned Interior
                                            </a> </li><li>
                                            <a href={QSW0153} target='_blank' rel='noreferrer'>
                                            QSW-153 Steel Wall Assembly - Drained Screened
                                            </a> </li><li>
                                            <a href={QSW0153a} target='_blank' rel='noreferrer'>
                                            QSW-153A Steel Wall Assembly - Drained Screened (Top View)
                                            </a> </li><li>
                                            <a href={QSW202} target='_blank' rel='noreferrer'>
                                            QSW-202  Window Unit - Masonry
                                            </a></li><li>
                                            <a href={QSW0251} target='_blank' rel='noreferrer'>
                                            QSW-251 Masonry or Concrete Wall - Face Sealed
                                            </a> </li><li>
                                            <a href={QSW0251a} target='_blank' rel='noreferrer'>
                                            QSW-251A Masonry or Concrete Wall - Face Sealed (Top View)
                                            </a> </li><li>
                                            <a href={QSW0253} target='_blank' rel='noreferrer'>
                                            QSW-253 Masonry or Concrete Wall - Drained Screened
                                            </a> </li><li>
                                            <a href={QSW0253a} target='_blank' rel='noreferrer'>
                                            QSW-253A Masonry or Concrete Wall - Drained Screened (Top View)
                                            </a> </li><li>
                                            <a href={QSW0261} target='_blank' rel='noreferrer'>
                                            QSW-261 Masonry Wall (CMU) - Pour Foam Insulation Face Sealed
                                            </a> </li><li>
                                            <a href={QSW0261a} target='_blank' rel='noreferrer'>
                                            QSW-261A Masonry Wall (CMU) - Pour Foam Insulation Face Sealed (Top View)
                                            </a> </li><li>
                                            <a href={QSW0263} target='_blank' rel='noreferrer'>
                                            QSW-263 Masonry Wall (CMU) - Pour Foam Insulation Drained Screened
                                            </a> </li><li>
                                            <a href={QSW0263a} target='_blank' rel='noreferrer'>
                                            QSW-263A Masonry Wall (CMU) - Pour Foam Insulation Drained Screened (Top View
                                            </a> </li>
                                    </ul>
                                </Media.Body>
                            </Media>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className='card1'>
                                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="4">
                                    <h3>Plan View </h3>
                                    <Icon.ChevronDown color='blue' size={45} />
                                    <h6>Tech Info Click Here</h6>
                                </Accordion.Toggle>
                                <Accordion.Collapse className='collapse1' eventKey="4">
                                <Card.Body className='body1'>
                                <Media className='media1'>
                                    <Media.Body className='media-body1'>   
                                    <ul className='ullist'>
                                    <li>
                                            <a href={QSW051a} target='_blank' rel='noreferrer'>
                                            QSW-051A Wood Wall Assembly - Face Sealed (Top View)
                                            </a>           
                                        </li>
                                        <li>
                                            <a href={QSW052a} target='_blank' rel='noreferrer'>
                                            QSW-052A Wood Wall Assembly - Drainage Plane (Top View)
                                            </a>           
                                        </li>
                                        <li>
                                            <a href={QSW053a} target='_blank' rel='noreferrer'>
                                            QSW-053A Wood Wall Assembly - Drained Screened (Top View)
                                            </a>           
                                        </li>
                                        <li>
                                            <a href={QSW0153a} target='_blank' rel='noreferrer'>
                                            QSW-153A Steel Wall Assembly - Drained Screened (Top View)
                                            </a>           
                                        </li>
                                        <li>
                                            <a href={QSW0251a} target='_blank' rel='noreferrer'>
                                            QSW-251A Masonry or Concrete Wall - Face Sealed (Top View)
                                            </a>           
                                        </li>
                                        <li>
                                            <a href={QSW0261a} target='_blank' rel='noreferrer'>
                                            QSW-261A Masonry Wall (CMU) - Pour Foam Insulation Face Sealed (Top View)
                                            </a>           
                                        </li>
                                        <li>
                                            <a href={QSW0263a} target='_blank' rel='noreferrer'>
                                            QSW-263A Masonry Wall (CMU) - Pour Foam Insulation Drained Screened (Top View)
                                            </a>           
                                        </li>
                                    </ul>
                                </Media.Body>
                            </Media>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        </Accordion>
                                </div>
                               
        </div>
        </div>
        <Footer/>
        </div>
    )
}
