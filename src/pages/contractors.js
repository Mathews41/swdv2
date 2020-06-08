import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import * as Icon from 'react-feather'
import '../assets/scss/layout/contractors.scss'
import '../assets/scss/layout/architectsRoofing.scss'
import Header from '../components/Header'
import bgimg from '../images/bg1-min.jpg'


import eval125 from '../images/evalreport125.pdf'
import test from '../images/test.pdf'
import eval155 from '../images/ESR155.pdf'
import roofrating155 from '../images/roofRating155.pdf'
import TDS15525 from '../images/TDS155-2.5.pdf'
import acryl from '../images/acryl.pdf'
import silicone from '../images/silicone.pdf'
import Cementitious from '../images/cementitious.pdf'
import spec155 from '../images/spec155.pdf'
import greenbuilding from '../images/greenbuilding.png'
import masterSpec from '../images/images.png'
import icon2 from '../images/icon2.png'
import abaa from '../images/abaa.svg'
import greenguard from '../images/greenguard logo (1).png'
import {Link} from 'gatsby'
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

export default function contractors() {
    return (
        <div id='page-contractor'>
            <Header/>
            <img className='cont-bg' src={bgimg}></img>
            <div className='header-container-cont'>
                <h1>Contractors</h1>
            <p>
            When you do business with SWD, you don’t just get great products and service, you get an outstanding partnership experience that you don’t get from any other manufacturer. Our partner support programs provide greater value to you.
            </p>
            
            </div>   
            <div className='accordian-container1'>
                <Accordion className='accordian1' defaultActiveKey="0">
                    <h4>QUIK-SHIELD® Spray Foam</h4>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                    <h3>QUIK-SHIELD® 155</h3> Roofing Spray Foam
                        <h6 className='accordian-subtext1'>
                     a closed-cell, spray–applied polyurethane roofing foam and is a LOW GLOBAL WARMING POTENTIAL product.
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="1">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                    <a href={Spec} target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 155 Specification (Download)</a>  
                                    <a href={roofrating155} target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 155 UL Report</a>  
                                    <a href={TDS15525} target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 155 Technical Data Sheet</a>  
                                    <a href={eval155} target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 155 Evaluation Report (ESR)</a> 
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
                    <Accordion className='accordian1' defaultActiveKey="0">
                    <h4>Quik-Shield® Roofing Systems</h4>
                
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="16">
                <h3>Quik Shield®Roofing System Our most specified roofing system </h3>
                    <h6 className='accordian-subtext1'>
                        5 year Warranty available
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
                                        1” of Spray Polyurethane Foam applied over substrate
                                        </h5>
                                        <a href={TDS15525} target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        Quik Shield® 1929F
                                        </h4>
                                       <h5> Flame Retardant Acrylic Coating-Two gallons per 100/sq.ft</h5>
                                        </li>
                                        <a href={TDS1929f}target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 1929F Technical Data Sheet</a> 
                                        
                                        <a href={Spec}target='_blank' rel="noopener noreferrer" >Division 07 57 00 Specification (Download)</a>
                                        <a href={eval155}target='_blank' rel="noopener noreferrer" >ESR-2532</a>
                                        <h5>
                                            5 year manufacturer warranty available
                                        </h5>
                                        
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
                                        1” of Spray Foam applied over substrate</h5>
                                        <a href={TDS15525} target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        Quik Shield® 1929F
                                        </h4>
                                        <h5>
                                        Flame Retardant Acrylic Coating-Three gallons per 100/sq.ft
                                        </h5>
                                        <a href={TDS1929f}target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 1929F Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        #9 Limestone granules blended in with acrylic top coat
                                        </li>
                                        <a href={Spec}target='_blank' rel="noopener noreferrer">
                                        Division 07 57 00 Specification (Download)</a>
                                        <a href={eval125}target='_blank' rel="noopener noreferrer" >ESR-2532</a>
                                    
                                        <h5>
                                            10 year manufacturer warranty
                                        </h5>
                                    </ul>
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="18">
                    <h3>QUIK-SHIELD®Roofing System-Class A roof assembly #3</h3>
                    <h6 className='accordian-subtext1'>
                        20 year Warranty available
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
                                        Quik Shield® 155-2.5lb
                                        </h4>
                                        <h5>
                                        1” of Spray Foam applied over substrate
                                        </h5>
                                        <a href={TDS15525} target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 155 Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        Quik Shield® 1929F
                                        </h4>
                                        <h5>
                                        Flame Retardant Acrylic Coating-Three gallons per 100/sq.ft
                                        </h5>
                                        <a href={TDS1929f}target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 1929F Technical Data Sheet</a>
                                        </li>
                                        <li>
                                        <h4>
                                        Quik Shield® 2020-Cementitious  top coat
                                        </h4> 
                                        <h5>
                                        #6 Limestone granules blended in with acrylic top coat
                                        </h5>
                                        <a href={TDS2020}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 2020 Technical Data Sheet</a>
                                        </li>
                                       
                                        <a href={Spec}target='_blank' rel="noopener noreferrer">
                                        Division 07 57 00 Specification (Download) 
                                        </a>
                                        <a href={eval125}target='_blank' rel="noopener noreferrer" >ESR-2532</a>
                                       <h5> 20 year manufacturer warranty available
                                       </h5>
                                    </ul>
                                    </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
           
            
                    </Accordion>
                    <Accordion className='accordian1' defaultActiveKey="0">
                    <h4>QUIK-SHIELD® Coating Products</h4>
                
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="2">
                <h3>Acrylic Coatings</h3>
                    <h6 className='accordian-subtext2'>
                    
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />

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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="3">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href='SWD07-57-00.docx'target='_blank' rel="noopener noreferrer"
                                    download='SWD07-57-00.docx' 
                                    >QUIK-SHIELD® 1929F Specification (Download)</a>  
                                    <a href={TDS1929f}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 1929F Technical Data Sheet</a>  
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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="4">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 1929R Specification (Download)</a>  
                                    <a href={TDS1929r}target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 1929R Technical Data Sheet</a> 
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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="5">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 1939 Specification (Download)</a>  
                                    <a href={TDS1939}target='_blank' rel="noopener noreferrer" >QQUIK-SHIELD® 1939 Technical Data Sheet</a>  
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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="6">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 1940 Specification (Download)</a>  
                                    <a href={TDS1940}target='_blank' rel="noopener noreferrer" > QUIK-SHIELD® 1940 Technical Data Sheet</a> 
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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="7">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    
                                    <a href={TDS1881}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 1881 Technical Data Sheet</a>
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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="14">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>
                                    <a href={TDS2020}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 2020 Technical Data Sheet</a>
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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="3">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank' rel="noopener noreferrer" 
                                    >QUIK-SHIELD® 1000 Specification (Download)</a>  
                                    <a href={TDS1000}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 1000 Technical Data Sheet</a>  
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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="4">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 1020 Specification (Download)</a>  
                                    <a href={TDS1020}target='_blank' rel="noopener noreferrer">QUIK-SHIELD® 1020 Technical Data Sheet</a> 
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="5">
                Quik-Shield® 2000 - Low VOC Primer                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="5">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 2000 Specification (Download)</a>  
                                    <a href={TDS2000}target='_blank' rel="noopener noreferrer" >QQUIK-SHIELD® 2000 Technical Data Sheet</a>  
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="6">
                Quik-Shield® 1030 - Rust Inhibiting Primer                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="6">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 1030 Specification (Download)</a>   
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="7">
                Quik-Shield® 1040 - Single-Ply Primer                <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="7">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    
                                    <a href={Spec}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 1040 Specification (Download)</a>   
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="8">
                Quik-Shield® 2100 - Etching Wash Primer             <h1></h1>    
                    <Icon.ChevronDown color='blue' size={45} />
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="8">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>   
                                    <a href={Spec}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 2100 Specification (Download)</a> 
                                    <a href={TDS2100}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 2100 Technical Data Sheet</a>
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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="10">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>
                                    <a href={TDS2110}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 2110 Technical Data Sheet</a>
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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="11">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>  
                                    <a href={TDS1891}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 1891 Technical Data Sheet</a>
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
                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="12">
                        <Card.Body className='body2'>
                            <Media className='media2'>
                                    <Media.Body className='media-body2'>  
                                    <a href={TDS2122}target='_blank' rel="noopener noreferrer" >QUIK-SHIELD® 2122 Technical Data Sheet</a>
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
                    </div>
                    <Footer/>
        </div>
    )
}
