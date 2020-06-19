import React from 'react'
import {Link} from 'gatsby'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import '../assets/scss/layout/architectsRoofing.scss'
import Media from 'react-bootstrap/Media'
import * as Icon from 'react-feather'
import Header from '../components/Header'
import arch from '../images/Arch Wall Photo-min.png'
import '../assets/scss/layout/architectsStepper.scss'
import Footer from '../components/Footer'
import '../assets/scss/layout/global.scss'


// Brochure
import qs118b from '../images/QS118B.pdf'
import qs118xcb from '../images/QS118XCB.pdf'
import qs112xcb from '../images/QS112XCB.pdf'
import qs112b from '../images/QS112B.pdf'
import qs106b from '../images/QS106B.pdf'
import qs108b from '../images/QS108B.pdf'
import qs104b from '../images/QS104B.pdf'
import qs108ymb from '../images/QS108YMB.pdf'

//Images
import elevation from '../images/elevation shot-min.png'
import img2 from '../images/Roofing_Edited_5-min.jpg'
import greenbuilding from '../images/greenbuilding.png'
import masterSpec from '../images/images.png'
import icon2 from '../images/icon2.png'
import abaa from '../images/abaa.svg'
import greenguard from '../images/greenguard logo (1).png'
import cabin from '../images/DSC04667-min.jpg'

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
import clickLogo from '../images/clicklogo.svg'
import ppUofNC from '../images/Project Profile - University of North Carolina.pdf'
import ppAPI from '../images/Project Profile - SPF Continuous Insulation.pdf'




export default function architectsInsulation() {
    return (
    <div className='page'>
        <div className='arch-page'>
        <Header/>
            <div className='img-container1'>
                <span>Architects/Specifiers</span>
            </div>
           
            <div className='accordian-container1'>
                <Accordion className='accordian1' defaultActiveKey="0">
                    <h4>QUIK-SHIELD® Open Cell Products</h4>
                
            
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="3">
               <h3>QS 108YM</h3>
                        <h6 className='accordian-subtext1'>
                        QS 108YM, the “Yield Monster”, is the 2nd generation Ultra-Low-Density formula with the lowest cost installed of any spray foam product on the market. Also has a 1 hour re-entry time.
                    </h6>
                                      <Icon.ChevronDown color='blue' size={45} />
                                       <h6>Tech Info Click Here</h6>


                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="3">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                <a href={TDS108}
                                    target='_blank' rel='noreferrer' >QS 108YM Technical Data Sheet </a>  
                                    <a href={spec108}
                                    target='_blank' rel='noreferrer' >QS 108YM Specification </a>  

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
                    <h4>QUIK-SHIELD® Closed Cell Products</h4>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="4">
                <h3>Air Barrier System</h3>
                    <h6 className='accordian-subtext2'>
                    QS 112 is a 1st generation Closed Cell spray foam with an industry leading 1-hour re-entry time that can be sprayed up to a 4” lift.
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
                                    target='_blank' rel='noreferrer' >QS 112 Technical Data Sheet </a>  
                                    <a href={TDS112xc}
                                    target='_blank' rel='noreferrer' >QS 112XC Technical Data Sheet </a>
                                    <a href={qs112} target='_blank' rel='noreferrer'>QS 112 Specification(Download)</a>  
                                    <a href={ccrr112}
                                    target='_blank' rel='noreferrer' >QS 112 Code Report</a>  
                                    <a href={VOC112}
                                    target='_blank' rel='noreferrer'>QS 112 VOC </a>
                                    
                            </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="5">
                <h3>QS 118/118XC</h3>
                <h6 className='accordian-subtext2'>
                QS 118 and 118XC  is a 2nd generation spray foam that delivers Ultra Low Density and can spray up to an 8” lift eliminating the need to spray  multiple lifts. Also available in Cold-Weather Foam Formula for extreme cold application conditions.
                    </h6>
                    <Icon.ChevronDown color='blue' size={45} />
                     <h6>Tech Info Click Here</h6>

                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse2' eventKey="5">
                        <Card.Body className='body2'>
                        <Media className='media2'>
                        <Media.Body className='media-body1'>
                                    <a href={TDS118}
                                    target='_blank' rel='noreferrer' >QS 118 Technical Data Sheet </a>  
                                    <a href={TDS118xc}
                                    target='_blank' rel='noreferrer' >QS 118XC Technical Data Sheet </a> 
                                    <a href={qs118} target='_blank' rel='noreferrer'>QS 118 Specification(Download)</a>  
                                    <a href={ccrr118}
                                    target='_blank' rel='noreferrer' >QS 118 Code Report</a>  
                                    <a href={VOC118}
                                    target='_blank' rel='noreferrer'>QS 118 VOC </a>
                                    
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card className='card2'>
                <Accordion.Toggle className='toggle2' as={Card.Header} eventKey="6">
                <h3>QS 450 </h3>
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
                                    target='_blank' rel='noreferrer' >QS 450 Technical Data Sheet </a> 
                                    <a href={ccrr450}
                                    target='_blank' rel='noreferrer' >QS 450 Code Report</a>  
                                    
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
            <img alt='insulation image' className='ISO11' src={abaa}></img>
            <img alt='insulation image' className='ISO11' src={greenguard}></img>
            <img alt='insulation image' className='ISO1' src={icon2}></img>
            <img alt='insulation image' className='ISO11' src={masterSpec}></img>
            <img alt='insulation image' className='ISO11' src={greenbuilding}></img>

        </div>
    
            </div>
            <Footer/>
        </div>
    )
}