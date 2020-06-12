import React from 'react'
import Header from '../components/Header'
import '../assets/scss/layout/products.scss'


import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import * as Icon from 'react-feather'
import '../assets/scss/layout/contractors.scss'
import '../assets/scss/layout/architectsRoofing.scss'
import bgimg from '../images/bg1-min.jpg'

import eval125 from '../images/evalreport125.pdf'
import eval155 from '../images/ESR155.pdf'
import roofrating155 from '../images/roofRating155.pdf'
import TDS15525 from '../images/TDS155-2.5.pdf'
import silicone from '../images/silicone.pdf'
import {Link} from 'gatsby'
import Button from 'react-bootstrap/Button'
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

// Brochure
import qs118b from '../images/QS118B.pdf'
import qs118xcb from '../images/QS118XCB.pdf'
import qs112xcb from '../images/QS112XCB.pdf'
import qs112b from '../images/QS112B.pdf'
import qs106b from '../images/QS106B.pdf'
import qs108b from '../images/QS108B.pdf'
import qs104b from '../images/QS104B.pdf'
import qs108ymb from '../images/QS108YMB.pdf'


//DOCS
import ccrr108 from '../images/CCRR-108.pdf'
import gold from '../images/GREENGUARD-Gold-Certification-2020.pdf'
import TDS108 from '../images/TDS-QS-108YM.pdf'
import spec108 from '../images/Spec108.pdf'
import TDS112xc from '../images/TDS-QS-112XC.pdf'
import TDS112 from '../images/TDS-QS-112.pdf'
import cr104 from '../images/cr104.pdf'
import spec106 from '../images/106spec.pdf'
import TDS118xc from '../images/TDS-QS-118XC.pdf'
import TDS450 from '../images/PDS-QS450.pdf'
import VOC118 from '../images/qs118Voc.pdf'
import VOC112 from '../images/qs112Voc.pdf'
import ccrr118 from '../images/CCRR-1093.pdf'
import ccrr450 from '../images/CCRR-1011.pdf'
import ccrr112 from '../images/CCRR-1011.pdf'
import TDS118 from '../images/TDS-QS-118.pdf'
import qs112 from '../images/QS112.pdf'
import qs118 from '../images/QS118.pdf'
import TDS104 from '../images/TDS104.pdf'
import eval106 from '../images/VOC106.pdf'
import roofrating106 from '../images/CR106.pdf'
import TDS106 from '../images/TDS106.pdf'
import Oem from '../images/OEM-Booklet-Website.pdf'
import clickLogo from '../images/clicklogo.svg'




import Spec from '../images/SWDSpec.pdf'

export default function products() {
    return (
        <div id='page-contractor'>
            <Header/>
            <img alt='contractors background' className='cont-bg' src={bgimg}></img>
            <div className='header-container-cont1'>
                <h1>Products</h1>
            <p>
            We strive to provide a partnership experience unmatched by our competitors.
            </p>
            
            </div>   
            <div className='accordian-containerProd'>
                <Accordion className='accordianProd' defaultActiveKey="0">
                    <h4>QUIK-SHIELD® Roofing Products</h4>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                    <h3>Spray Foam</h3>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="1">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                <Accordion className='accordianProdSub' defaultActiveKey="0">
                    <h4>QS Spray Foam</h4>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                    <h3>QS 155</h3> Roofing Spray Foam
                        <h6 className='accordian-subtext1'>
                     a closed-cell, spray–applied polyurethane roofing foam and is a LOW GLOBAL WARMING POTENTIAL product.
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="1">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                    <a href={Spec} target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 155 Specification (Download)</a>  
                                    <a href={roofrating155} target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 155 UL Report</a>  
                                    <a href={TDS15525} target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 155 Technical Data Sheet</a>  
                                    <a href={eval155} target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 155 Evaluation Report (ESR)</a> 
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                    </Accordion>
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="2">
                    <h3>Roofing Systems</h3>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="2">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                <Accordion className='accordianProdSub' defaultActiveKey="0">
                    <h4>Quik-Shield® Roofing Systems</h4>
                
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="16">
                <h3>QS Roofing System Our most specified roofing system </h3>
                    <h6 className='accordian-subtext1'>
                        5 year Warranty available
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
                                        QS 155-2.5lb
                                        </h4>
                                        <h5>
                                        1” of Spray Polyurethane Foam applied over substrate
                                        </h5>
                                        <a href={TDS15525} target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        QS 1929F
                                        </h4>
                                       <h5> Flame Retardant Acrylic Coating-Two gallons per 100/sq.ft</h5>
                                        </li>
                                        <a href={TDS1929f}target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 1929F Technical Data Sheet</a> 
                                        
                                        <a href={Spec}target='_blank'  rel="noopener noreferrer" >Division 07 57 00 Specification (Download)</a>
                                        <a href={eval155}target='_blank'  rel="noopener noreferrer" >ESR-2532</a>
                                        
                                        
                                    </ul>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="17">
                <h3>QUIK-SHIELD®Roofing System #2</h3>
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
                                        QS 155-2.5lb
                                        </h4>
                                        <h5>
                                        1” of Spray Foam applied over substrate</h5>
                                        <a href={TDS15525} target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        QS 1929F
                                        </h4>
                                        <h5>
                                        Flame Retardant Acrylic Coating-Three gallons per 100/sq.ft
                                        </h5>
                                        <a href={TDS1929f}target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 1929F Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        #9 Limestone granules blended in with acrylic top coat
                                        </li>
                                        <a href={Spec}target='_blank'  rel="noopener noreferrer">
                                        Division 07 57 00 Specification (Download)</a>
                                        <a href={eval125}target='_blank'  rel="noopener noreferrer" >ESR-2532</a>
                                    </ul>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="18">
                    <h3>QS Roofing System-Class A roof assembly #3</h3>
                    <h6 className='accordian-subtext1'>
                        20 year Warranty available
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
                                        QS 155-2.5lb
                                        </h4>
                                        <h5>
                                        1” of Spray Foam applied over substrate
                                        </h5>
                                        <a href={TDS15525} target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        QS 1929F
                                        </h4>
                                        <h5>
                                        Flame Retardant Acrylic Coating-Three gallons per 100/sq.ft
                                        </h5>
                                        <a href={TDS1929f}target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 1929F Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        QS 2020-Cementitious  top coat
                                        </h4> 
                                        <h5>
                                        #6 Limestone granules blended in with acrylic top coat
                                        </h5>
                                        <a href={TDS2020}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 2020 Technical Data Sheet</a>
                                        </li>
                                       
                                        <a href={Spec}target='_blank'  rel="noopener noreferrer">
                                        Division 07 57 00 Specification (Download) 
                                        </a>
                                        <a href={eval125}target='_blank'  rel="noopener noreferrer" >ESR-2532</a>
                                    </ul>
                                    </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
           
            
                    </Accordion>
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="3">
                    <h3>Coating Products</h3>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="3">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                <Accordion className='accordianProdSub' defaultActiveKey="0">
                    <h4>QUIK-SHIELD® Coating Products</h4>
                
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="2">
                <h3>Acrylic Coatings</h3>
                    <h6 className='accordian-subtext2'>
                    
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="2">
                        <Card.Body className='body2'>
                        <Accordion className='accordian2' defaultActiveKey="0">
                    <h4>Acrylic Coatings</h4>
                
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="3">
                QUIK-SHIELD® 1929F - Flame Retardant
                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="3">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href='SWD07-57-00.docx'target='_blank'  rel="noopener noreferrer"
                                    download='SWD07-57-00.docx' 
                                    >QUIK-SHIELD® 1929F Specification (Download)</a>  
                                    <a href={TDS1929f}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 1929F Technical Data Sheet</a>  
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="4">
                QUIK-SHIELD® 1929R
                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="4">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 1929R Specification (Download)</a>  
                                    <a href={TDS1929r}target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 1929R Technical Data Sheet</a> 
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="5">
                QUIK-SHIELD® 1939 - High-Performance
                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="5">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 1939 Specification (Download)</a>  
                                    <a href={TDS1939}target='_blank'  rel="noopener noreferrer" >QQUIK-SHIELD® 1939 Technical Data Sheet</a>  
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="6">
                QUIK-SHIELD® 1940 - Bleed Blocking
                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="6">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 1940 Specification (Download)</a>  
                                    <a href={TDS1940}target='_blank'  rel="noopener noreferrer" > QUIK-SHIELD® 1940 Technical Data Sheet</a> 
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="7">
                QUIK-SHIELD® 1881 - Acrylic Patching Compound
                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="7">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    
                                    <a href={TDS1881}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 1881 Technical Data Sheet</a>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            
                    </Accordion>
                            <Media className='media2'>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            
            
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="13">
                <h3>Cementitious Coatings</h3>
                <h6 className='accordian-subtext2'>
                    
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="13">
                        <Card.Body className='body2'>
                        <Accordion className='accordian2' defaultActiveKey="0">
                    <h4>Cementitious Coatings</h4>
                
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="14">

                QUIK-SHIELD® 2020 - Cementitious Roof Coating
                <h1></h1>
                                <Icon.ChevronDown color='blue' size={45} />
                                 <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="14">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>
                                    <a href={TDS2020}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 2020 Technical Data Sheet</a>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                    </Accordion>
                        <Media className='media2'>
                                <Media.Body className='media-body2'>
                                
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="20">
                <h3>Primers</h3>
                    <h6 className='accordian-subtext2'>
                    
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="20">
                        <Card.Body className='body2'>
                        <Accordion className='accordian2' defaultActiveKey="0">
                    <h4>Primers</h4>
                
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="3">
                Quik-Shield® 1000 - Fast Drying Primer
                <h1></h1>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="3">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank'  rel="noopener noreferrer" 
                                    >QUIK-SHIELD® 1000 Specification (Download)</a>  
                                    <a href={TDS1000}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 1000 Technical Data Sheet</a>  
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="4">
                Quik-Shield® 1020 - Acrylic Primer
                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="4">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 1020 Specification (Download)</a>  
                                    <a href={TDS1020}target='_blank'  rel="noopener noreferrer">QUIK-SHIELD® 1020 Technical Data Sheet</a> 
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="5">
                Quik-Shield® 2000 - Low VOC Primer                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="5">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 2000 Specification (Download)</a>  
                                    <a href={TDS2000}target='_blank'  rel="noopener noreferrer" >QQUIK-SHIELD® 2000 Technical Data Sheet</a>  
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="6">
                Quik-Shield® 1030 - Rust Inhibiting Primer                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="6">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 1030 Specification (Download)</a>   
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="7">
                Quik-Shield® 1040 - Single-Ply Primer                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="7">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    
                                    <a href={Spec}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 1040 Specification (Download)</a>   
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="8">
                Quik-Shield® 2100 - Etching Wash Primer             <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="8">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 2100 Specification (Download)</a> 
                                    <a href={TDS2100}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 2100 Technical Data Sheet</a>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            
                    </Accordion>
                            <Media className='media2'>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="8">
                    <h3>Silicone Coatings</h3>
                        <h6 className='accordian-subtext2'>

                    </h6>
                                    <Icon.ChevronDown color='blue' size={45} />
                                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="8">
                        <Card.Body className='body1'>
                        <Accordion className='accordian2' defaultActiveKey="0">
                    <h4>Silicone Coatings</h4>
                
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="9">

                QUIK-SHIELD® 2120 - High Solids Silicone Roof Coating          
                <h5> a high solids, moisture cure, fluid applied silicone coating.</h5>    
                <Icon.ChevronDown color='blue' size={45} />
                 <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="9">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>     
                                    <a href={silicone} download='silicone.pdf'>QUIK-SHIELD® 2120 Technical Data Sheet</a>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="10">

                QUIK-SHIELD® 2110 - Silicone Roof Coating  
                <h1></h1>    
                <Icon.ChevronDown color='blue' size={45} />
                 <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="10">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>
                                    <a href={TDS2110}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 2110 Technical Data Sheet</a>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="11">

                QUIK-SHIELD® 1891 - Silicone Patching Compound      
                <h1></h1>
                <Icon.ChevronDown color='blue' size={45} />
                 <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="11">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>  
                                    <a href={TDS1891}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 1891 Technical Data Sheet</a>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="12">

                QUIK-SHIELD® 2122 - High Solids Walkway Coating               
                <h1></h1>    
                <Icon.ChevronDown color='blue' size={45} />
                 <h6>Tech Info Click Here</h6>
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="12">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>  
                                    <a href={TDS2122}target='_blank'  rel="noopener noreferrer" >QUIK-SHIELD® 2122 Technical Data Sheet</a>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                    </Accordion>
                        <Media className='media2'>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                    </Accordion>
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                    </Accordion>
                    <Accordion className='accordianProd' defaultActiveKey="0">
                    <h4>QUIK-SHIELD® Spray Foam Insulation Products</h4>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                    <h3>Open Cell</h3>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>
                    {/* <Button variant='outline-primary' className="dropButton">click meeee</Button> */}
            </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="1">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                <Accordion className='accordianProdSub' defaultActiveKey="0">
                    <h4>Open Cell</h4>
                    <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                <h3>QUIK-SHIELD® 104</h3>
                    <h6 className='accordian-subtext1'>
                    QUIK-SHIELD® 104 is an integral component of an energy efficient building envelope that does not require mixing.
 
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="1">
                        <Card.Body className='body1'>
                            <Media className='media1'>
                                    <Media.Body className='media-body1'>   
                                    <a href={TDS104}target='_blank' rel='noreferrer'  >QUIK-SHIELD® 104 Technical Data Sheet </a>  
                                    <a href={cr104}target='_blank' rel='noreferrer'  >QUIK-SHIELD® 104 Code Report</a>  
                                    <a href={qs104b}
                                    target='_blank' rel='noreferrer' >QUIK-SHIELD® 104 Brochure</a>  
                                    {/* <a href={TDS104}target='_blank' rel='noreferrer'  >QUIK-SHIELD® 104 VOC </a>   */}
                                    
                                                                               
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card><Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="2">
                <h3>QUIK-SHIELD® 106 </h3>
                        <h6 className='accordian-subtext1'>
                        QUIK-SHIELD® 106 is a 1st generation 1-hour re-entry open cell foam insulation with no ignition barrier required in un-vented attics.
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="2">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                    <a href={TDS106} 
                                    target='_blank' rel='noreferrer' >QUIK-SHIELD® 106 Technical Data Sheet </a>  
                                    <a href={spec106} target='_blank' rel='noreferrer' >QUIK-SHIELD® 106 Specification (Download)</a>  
                                    <a href={roofrating106}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 106 Code Report</a>  
                                    <a href={eval106}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 106 VOC </a>
                                    <a href={qs106b}
                                    target='_blank' rel='noreferrer' >QUIK-SHIELD® 106 Brochure</a> 
                                    
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="3">
               <h3>QUIK-SHIELD® 108YM</h3>
                        <h6 className='accordian-subtext1'>
                        QUIK-SHIELD® 108YM, the “Yield Monster”, is the 2nd generation Ultra-Low-Density formula with the lowest cost installed of any spray foam product on the market. Also has a 1 hour re-entry time.
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="3">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                    <a href={TDS108}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 108YM Technical Data Sheet </a>  
                                    <a href={spec108} target='_blank' rel='noreferrer' >QUIK-SHIELD® 108 Specification(Download)</a>  
                                    <a href={ccrr108}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 108YM Code Report</a>  
                                    <a href={gold}
                                    target='_blank' rel='noreferrer' >QUIK-SHIELD® 108YM VOC </a>
                                    <a href={qs108b}
                                    target='_blank' rel='noreferrer' >QUIK-SHIELD® 108YM Brochure</a> 
                                    
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                    </Accordion>
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="3">
                    <h3>Closed Cell</h3>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="3">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                <Accordion className='accordianProdSub' defaultActiveKey="0">
                    <h4>Closed Cell Products</h4>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="4">
                <h3>QUIK-SHIELD® 112</h3>
                    <h6 className='accordian-subtext2'>
                    QUIK-SHIELD® 112 is a 1st generation Closed Cell spray foam with an industry leading 1-hour re-entry time that can be sprayed up to a 4” lift.
                    Air Barrier Association of America Approved.
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="4">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                            <Media.Body className='media-body1'>
                                    <a href={TDS112}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 112 Technical Data Sheet </a>  
                                    <a href={TDS112xc}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 112XC Technical Data Sheet </a>
                                    <a href={qs112} target='_blank' rel='noreferrer' >QUIK-SHIELD® 112 Specification(Download)</a>  
                                    <a href={ccrr112}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 112 Code Report</a>  
                                    <a href={VOC112}
                                    target='_blank' rel='noreferrer' >QUIK-SHIELD® 112 VOC </a>
                                    <a href={qs112b}
                                    target='_blank' rel='noreferrer' >QUIK-SHIELD® 112 Brochure</a> 
                                    
                            </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="5">
                <h3>QUIK-SHIELD® 118/118XC</h3>
                <h6 className='accordian-subtext2'>
                QUIK-SHIELD® 118 and 118XC  is a 2nd generation spray foam that delivers Ultra Low Density and can spray up to an 8” lift eliminating the need to spray  multiple lifts. Also available in Cold-Weather Foam Formula for extreme cold application conditions.
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="5">
                        <Card.Body className='body2'>
                        <Media className='media2'>
                        <Media.Body className='media-body1'>
                                    <a href={TDS118}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 118 Technical Data Sheet </a>  
                                    <a href={TDS118xc}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 118XC Technical Data Sheet </a> 
                                    <a href={qs118} target='_blank' rel='noreferrer' >QUIK-SHIELD® 118 Specification(Download)</a>  
                                    <a href={ccrr118}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 118 Code Report</a>  
                                    <a href={VOC118}
                                    target='_blank' rel='noreferrer' >QUIK-SHIELD® 118 VOC </a>
                                     <a href={qs118b}
                                    target='_blank' rel='noreferrer' >QUIK-SHIELD® 118 Brochure</a>
                                     <a href={qs118xcb}
                                    target='_blank' rel='noreferrer' >QUIK-SHIELD® 118XC Brochure</a>  
                                    
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="6">
                <h3>QUIK-SHIELD® 450 </h3>
                <h6 className='accordian-subtext2'>
                2 lb density, rigid, closed cell, polyurethane pour foam system. Which creates a seamless water resistant barrier and provides for exceptional insulation values.
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="6">
                        <Card.Body className='body2'>
                        <Media className='media2'>
                        <Media.Body className='media-body1'>
                                    <a href={TDS450}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 450 Technical Data Sheet </a> 
                                    <a href={ccrr450}
                                    target='_blank' rel='noreferrer'  >QUIK-SHIELD® 450 Code Report</a>  
                                    
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <div className='drawingContainer'>
            <Link className='drawa' to='/details/'>
                Details & Drawings
                <Icon.ExternalLink className='externalLink'/>
                </Link>
                </div>
                    </Accordion>
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                    </Accordion>
                    <Accordion className='accordianProd' defaultActiveKey="0">
                    <h4>Industrial Products</h4>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                    <h3>OEM</h3>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="1">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                <Accordion className='accordianProdSub' defaultActiveKey="0">
                                <h4>OEM Products</h4>
                            
                        <Card className='card1'>
                            <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                            <h3>Flexible Foam</h3>
                                <Icon.ChevronDown color='blue' size={45} />
                                 <h6>Tech Info Click Here</h6>

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapse1' eventKey="1">
                                    <Card.Body className='body1'>
                                        <Media className='media1'>
                                                <Media.Body className='media-body1'>   
                                                <h3>Moldable & Responsive</h3>
                                                <p>
                                                The Quik-Works line of flexible systems have a wide range of densities and firmness. Formulations can be customized to meet your specific needs to ultimately deliver the total solution.
                                                </p>
                                                <a href={Oem} target='_blank' rel='noreferrer' id='oemButton'>Learn More</a>
                                                </Media.Body>
                                        </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                        <Card className='card1'>
                            <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="2">
                            <h3>Rigid Foam</h3>
                                <Icon.ChevronDown color='blue' size={45} />
                                 <h6>Tech Info Click Here</h6>

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapse1' eventKey="2">
                                    <Card.Body className='body1'>
                                    <Media className='media1'>
                                            <Media.Body className='media-body1'>
                                            <h3>Light-Weight & Reliable</h3>
                                                <p>
                                                Our Quik-Works rigid polyurethane systems are easily customizable to produce a finished product that can meet a variety of specifications. Foams are available in a wide range of densities and reactivity profiles. Our formulations have the ability to reduce weight compared to alternative materials and can be processed using a variety of methods.
                                                </p>
                                                <a target='_blank' rel='noreferrer'  href={Oem}id='oemButton'>Learn More</a>
                                        </Media.Body>
                                    </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                        <Card className='card1'>
                            <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="3">
                            <h3>Elastomers</h3>
                                <Icon.ChevronDown color='blue' size={45} />
                                 <h6>Tech Info Click Here</h6>

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapse1' eventKey="3">
                                    <Card.Body className='body1'>
                                        <Media className='media1'>
                                                <Media.Body className='media-body1'>   
                                                <h3>Strong & Durable</h3>
                                                <p>
                                                Quik-Works Elastomers are an excellent replacement material for manufacturing parts traditionally molded from plaster, rubber, or fiberglass, providing a cost-effective alternative for many applications. They can be engineered with high load bearing capabilities, as well as abrasion, impact, and tear resistance.
                                                </p>  
                                                <a href={Oem} target='_blank' rel='noreferrer' id='oemButton'>Learn More</a> 
                                                </Media.Body>
                                        </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                        <Card className='card1'>
                            <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="4">
                            <h3>Toll Blending</h3>
                                <Icon.ChevronDown color='blue' size={45} />
                                 <h6>Tech Info Click Here</h6>

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapseind' eventKey="4">
                                    <Card.Body className='body1'>
                                        <Media className='media1'>
                                                <Media.Body className='media-body1'>   
                                                <p>
                                                We offer toll blending to help you avoid the difficulties and pitfalls of in-house production. Our capabilities are wide ranging and can help you create the perfect formula. If you are interested in learning more please fill out the contact form.
                                                </p> 
                                                </Media.Body>
                                        </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                                </Accordion>
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="3">
                    <h3>QUIK-SHOT®</h3>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="3">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                    </Accordion>
                    <Accordion className='accordianProd' defaultActiveKey="0">
                    <h4>Parts & Equipment</h4>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                    <h3> Spray Gun </h3>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="1">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
                    </Accordion>
                    
                    
                    
                    </div>
                    <Footer/>
        </div>

    )
}
