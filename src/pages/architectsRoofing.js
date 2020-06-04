import React from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import '../assets/scss/layout/architectsRoofing.scss'
import Media from 'react-bootstrap/Media'
import * as Icon from 'react-feather'
import elevation from '../images/elevation shot-min.png'
import img2 from '../images/Roofing_Edited_5-min.jpg'
import Header from '../components/Header'
import img5 from '../images/Roofing_Edited_1-min.jpg'
import img4 from '../images/Roofing_Edited_4-min.jpg'
import eval125 from '../images/evalreport125.pdf'
import test from '../images/test.pdf'
import eval155 from '../images/ESR155.pdf'
import roofrating155 from '../images/roofRating155.pdf'
import TDS15525 from '../images/TDS155-2.5.pdf'
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




//Footer
import Footer from '../components/Footer'

//Technical Data Sheets
import TDS1881 from '../images/TDS-QS-1881.pdf'
import TDS1891 from '../images/TDS-QS-1891.pdf'
import TDS1929f from '../images/TDS-QS-1929F.pdf'
import TDS1929r from '../images/TDS-QS-1929R.pdf'
import TDS1939 from '../images/TDS-QS-1939.pdf'
import TDS1940 from '../images/TDS-QS-1940.pdf'
import TDS2020 from '../images/TDS-QS-2020.pdf'
import TDS2110 from '../images/TDS-QS-2110.pdf'
import TDS2122 from '../images/TDS-QS2122.pdf'
import TDS2000 from '../images/TDS-QS-2000.pdf'
import TDS2100 from '../images/TDS-QS-2100.pdf'
import TDS1000 from '../images/TDS-QS-1000.pdf'
import TDS1020 from '../images/TDS-QS-1020.pdf'
import TDS1030 from '../images/TDS-QS-1030.pdf'
import TDS2120 from '../images/TDS-QS-2120.pdf'



import Spec from '../images/SWDSpec.pdf'














export default function architectsInsulation() {
    return (
    <div className='page'>
        <div className='arch-page'>
        <Header/>
            <div className='img-container1'>
                <img className='split-img11' src={elevation}/>
                <span className='headspan'>Architects/Specifiers</span>
                <sub></sub>
                <img className='split-img11' src={img2}/>
            </div>
            <div className='upperText'>
            <div>
                    <a href='/projects/'>
                <img className='buildings'src={roofingpic}></img></a>
                <sub className='pictext'>Quik-Shield® 155 Coated Foam Roof</sub>
                </div>
            <div className='upperText1'>
            <h1 className='htitle'>QUIK-SHIELD® Foam Coated Roofing Systems</h1>
                <ul className='lowerList'>
                    <p>
                        Enhances your building envelope while also increasing your projects energy efficiency.
                        Not only is it cost effective, but penetrations are easily sealed thus eliminating any potential water leakeage. It is also low maintenance, weather resistant, and requires no mechanical fasteners. Low Global Warming potential product.(Low GWP)
                        </p>
                </ul>
                </div>
                <div>
                    <a href='/projects/'>
                <img className='buildings2'src={ASU}></img></a>
                <sub className='pictext1'>Arizona State University Greek Leadership Housing</sub>
                </div>
                </div>
            <div className='accordian-container1'>
               
                    <Accordion className='accordian1' defaultActiveKey="0">
                    <h4>Quik-Shield® Roofing Systems</h4>
                
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="16">
                <h3>Quik Shield®Roofing System #1
                </h3> 
                <h3>
                  (most cost effective)  
                </h3> 
                    <h6 className='accordian-subtext1'>
                        5 year warranty available
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="16">
                        <Card.Body className='body1'>
                            <Media className='media1'>
                                    <Media.Body className='media-body1'>   
                                    <ul className='ullist'>
                                        <li>
                                        <h4>
                                        Quik Shield® 155-2.5lb
                                        </h4>
                                        <h5>
                                        Minimum of 1” of Spray Polyurethane Foam applied over substrate
                                        </h5>
                                        <a href={TDS15525} target='_blank'>QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        Quik Shield® 1929F
                                        </h4>
                                       <h5> Flame Retardant Acrylic Coating-Two gallons per 100/sq.ft</h5>
                                        </li>
                                        <a href={TDS1929f}target='_blank'>QUIK-SHIELD® 1929F Technical Data Sheet</a> 
                                        <li>
                                        <h4>
                                        Specification
                                        </h4>
                                        </li>
                                        <a href={spec155}target='_blank' >Division 07 57 00 Specification (Download)</a>
                                        <li>
                                        <h4>
                                        Code Report
                                        </h4>
                                        </li>
                                        <a href={eval155}target='_blank' >ESR-2532</a>
                                        
                                        
                                    </ul>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="17">
                <h3>QUIK-SHIELD®Roofing System #2 </h3> <h3>(most specified)</h3>
                    <h6 className='accordian-subtext1'>
                        10 year Warranty available
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="17">
                        <Card.Body className='body1'>
                            <Media className='media1'>
                            <Media.Body className='media-body1'>   
                                    <ul className='ullist'>
                                        <li>
                                        <h4>
                                        Quik Shield® 155-2.5lb
                                        </h4>
                                        <h5>
                                        Minimum of 1” of Spray Foam applied over substrate</h5>
                                        <a href={TDS15525} target='_blank'>QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        Quik Shield® 1929F
                                        </h4>
                                        <h5>
                                        Flame Retardant Acrylic Coating-Three gallons per 100/sq.ft
                                        </h5>
                                        <a href={TDS1929f}target='_blank'>QUIK-SHIELD® 1929F Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        #9 Limestone granules blended in with acrylic top coat
                                        </li>
                                        <li>
                                        <h4>
                                        Specification
                                        </h4>
                                        </li>
                                        <a href={spec155}target='_blank' >Division 07 57 00 Specification (Download)</a>
                                        <li>
                                        <h4>
                                        Code Report
                                        </h4>
                                        </li>
                                        <a href={eval155}target='_blank' >ESR-2532</a>
                                    
                                    </ul>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="18">
                    <h3>QUIK-SHIELD®Roofing System-Class A roof assembly #3 </h3>
                    <h3>(Most Durable)</h3>
                    <h6 className='accordian-subtext1'>
                        20 year warranty available
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="18">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                        <Media.Body className='media-body1'>   
                                    <ul className='ullist'>
                                        <li>
                                        <h4>
                                        Quik Shield® 155-2.5lb Foam
                                        </h4>
                                        <h5>
                                        Minimum of 1” of Spray Foam applied over substrate
                                        </h5>
                                        <a href={TDS15525} target='_blank'>QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        Quik Shield® 1929F Coating
                                        </h4>
                                        <h5>
                                        Flame Retardant Acrylic Coating-Three gallons per 100/sq.ft
                                        <h5>
                                        #6 Limestone granules blended in with acrylic top coat
                                        </h5>
                                        </h5>
                                        <a href={TDS1929f}target='_blank'>QUIK-SHIELD® 1929F Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        Quik Shield® 2020-Cementitious  top coat
                                        </h4> 
                                        <a href={TDS2020}target='_blank' >QUIK-SHIELD® 2020 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        Specification
                                        </h4>
                                        </li>
                                        <a href={spec155}target='_blank' >Division 07 57 00 Specification (Download)</a>
                                        <li>
                                        <h4>
                                        Code Report
                                        </h4>
                                        </li>
                                        <a href={eval155}target='_blank' >ESR-2532</a>
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
                <div className='rtside-lower1'>
                    <div className='lowerbox3'>
                        <h1 className='htilte'>
                            Building Applications
                        </h1>
                        <ul className='lowerList1'>
                            <li>
                            Multi-Dwelling 
                            </li>
                            <li>
                            Commercial Buildings
                            </li>
                            <li>
                            Industrial Facilities 
                            </li>
                            <li>
                            Agricultural Structure
                            </li>
                            <li>
                            Homes (residential) 
                            </li>
                            <li>
                            Retail Developments 
                            </li>
                        </ul>
                    </div>
                    </div>
                        <div className='isoBand1'>
            <img className='ISO11' src={abaa}></img>
            <img className='ISO11' src={greenguard}></img>
            <img className='ISO1' src={icon2}></img>
            <img className='ISO11' src={masterSpec}></img>
            <img className='ISO11' src={greenbuilding}></img>

        </div>
                </div>
                <Footer/>
        </div>
    )
}