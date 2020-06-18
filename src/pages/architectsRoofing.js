import React from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import '../assets/scss/layout/architectsRoofing.scss'
import Media from 'react-bootstrap/Media'
import * as Icon from 'react-feather'
import elevation from '../images/elevation shot-min.png'
import img2 from '../images/Roofing_Edited_5-min.jpg'
import Header from '../components/Header'

import eval155 from '../images/ESR155.pdf'
import roofrating155 from '../images/roofRating155.pdf'
import TDS15525 from '../images/TDS-QS-155-2.5.pdf'
import spec155 from '../images/spec155.pdf'
import '../assets/scss/layout/architectsStepper.scss'
import greenbuilding from '../images/greenbuilding.png'
import masterSpec from '../images/images.png'
import icon2 from '../images/icon2.png'
import abaa from '../images/abaa.svg'
import greenguard from '../images/greenguard logo (1).png'
import api from '../images/API-min.jpg'
import ASU from '../images/ASU-min.jpg'
import roofingpic from '../images/Roofing_Edited_5-min.jpg'
import {Link} from 'gatsby'
import '../assets/scss/layout/global.scss'
import pic65 from '../images/065.jpg'




//Footer
import Footer from '../components/Footer'

//Technical Data Sheets

import TDS1929f from '../images/TDS-QS-1929F.pdf'

import TDS2020 from '../images/TDS-QS-2020.pdf'




import Spec from '../images/SWDSpec.pdf'














export default function architectsInsulation() {
    return (
    <div className='page'>
        <div className='arch-page'>
        <Header/>
            <div className='img-container1'>
                <span className='headspan'>Architects/Specifiers</span>

               </div>
            <div className='accordian-container1'>
               
                    <Accordion className='accordian1' defaultActiveKey="0">
                    <h4>Quik-Shield® Spray Foam Roofing Systems</h4>
                
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="16">
                <h3>QS Roofing System #1
                </h3> 
                <h3>
                  (most cost effective)  
                </h3> 
                    <h6 className='accordian-subtext1'>
                        5 year warranty available
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="16">
                        <Card.Body className='body1'>
                            <Media className='media1'>
                                    <Media.Body className='media-body1'>   
                                    <ul className='ullist'>
                                        <li>
                                        <h4>
                                        QS  155-2.5lb Foam
                                        </h4>
                                        <h5>
                                        Minimum of 1” of Spray Polyurethane Foam applied over substrate
                                        </h5>
                                        <a href={TDS15525} target='_blank' rel='noreferrer'>QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        QS  1929F Coating
                                        </h4>
                                       <h5> Flame Retardant Acrylic Coating-Two gallons per 100/sq.ft</h5>
                                        <a href={TDS1929f}target='_blank' rel='noreferrer'>QUIK-SHIELD® 1929F Technical Data Sheet</a> 
                                        </li>
                                        <h4>
                                        Specification
                                        </h4>
                                        <a href={spec155}target='_blank' rel='noreferrer' >Division 07 57 00 Specification (Download)</a>
                                        <h4 className='htag'>
                                        Code Report
                                        </h4>
                                        <a href={eval155}target='_blank' rel='noreferrer' >ESR-2532</a>
                                        
                                        
                                    </ul>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="17">
                <h3>QS Roofing System #2 </h3> <h3>(most specified)</h3>
                    <h6 className='accordian-subtext1'>
                        10 year Warranty available
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="17">
                        <Card.Body className='body1'>
                            <Media className='media1'>
                            <Media.Body className='media-body1'>   
                                    <ul className='ullist'>
                                        <li>
                                        <h4>
                                        QS  155-2.5lb Foam
                                        </h4>
                                        <h5>
                                        Minimum of 1” of Spray Foam applied over substrate</h5>
                                        <a href={TDS15525} target='_blank' rel='noreferrer'>QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        QS  1929F Coating
                                        </h4>
                                        <h5>
                                        Flame Retardant Acrylic Coating-Three gallons per 100/sq.ft
                                        </h5>
                                        <a href={TDS1929f}target='_blank' rel='noreferrer'>QUIK-SHIELD® 1929F Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        #9 Limestone granules blended in with acrylic top coat (optional)
                                        </li>
                                        <h4>
                                        Specification
                                        </h4>
                                        <a href={spec155}target='_blank' rel='noreferrer' >Division 07 57 00 Specification (Download)</a>
                                        <h4 className='htag'>
                                        Code Report
                                        </h4>
                                        <a href={eval155}target='_blank' rel='noreferrer' >ESR-2532</a>
                                    
                                    </ul>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="18">
                    <h3>QS Roofing System-Class A roof assembly #3 </h3>
                    <h3>(Most Durable)</h3>
                    <h6 className='accordian-subtext1'>
                        20 year warranty available
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="18">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                        <Media.Body className='media-body1'>   
                                    <ul className='ullist'>
                                        <li>
                                        <h4>
                                        QS  155-2.5lb Foam
                                        </h4>
                                        <h5>
                                        Minimum of 1” of Spray Foam applied over substrate
                                        </h5>
                                        <a href={TDS15525} target='_blank' rel='noreferrer'>QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        QS  1929F Coating
                                        </h4>
                                        <h5>
                                        Flame Retardant Acrylic Coating-Three gallons per 100/sq.ft
                                        <h5>
                                        #6 Limestone granules blended in with acrylic top coat
                                        </h5>
                                        </h5>
                                        <a href={TDS1929f}target='_blank' rel='noreferrer'>QUIK-SHIELD® 1929F Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        QS  2020-Cementitious  top coat
                                        </h4> 
                                        <a href={TDS2020}target='_blank' rel='noreferrer' >QUIK-SHIELD® 2020 Technical Data Sheet</a>
                                        </li>
                                        <h4>
                                        Specification
                                        </h4>
                                        <a href={spec155}target='_blank' rel='noreferrer' >Division 07 57 00 Specification (Download)</a>
                                        <h4 className='htag'>
                                        Code Report
                                        </h4>
                                        <a href={eval155}target='_blank' rel='noreferrer' >ESR-2532</a>
                                    </ul>
                                    </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <div className='drawingContainer'>
            <Link className='drawButton' to='/details/'>
                Details & Drawings
                <Icon.ExternalLink className='externalLink'/>
                </Link>
                </div>
        </Accordion>
                    
                   </div> 
                
                        <div className='isoBand1'>
            <img alt='roofing' className='ISO11' src={abaa}></img>
            <img alt='roofing' className='ISO11' src={greenguard}></img>
            <img alt='roofing' className='ISO1' src={icon2}></img>
            <img alt='roofing' className='ISO11' src={masterSpec}></img>
            <img alt='roofing' className='ISO11' src={greenbuilding}></img>

        </div>
                </div>
                <Footer/>
        </div>
    )
}