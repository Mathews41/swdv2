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



export default function architectsInsulation() {
    return (
    <div className='page'>
        <div className='arch-page'>
        <Header/>
            <div className='img-container1'>
                <img className='split-img11' src={cabin}/>
                <span>Architects/Specifiers</span>
                <sub></sub>
                <img className='split-img11' src={img2}/>
            </div>
            <div className='upperText'>
                <div id='upperTextArch'>
                    <a href='/projects/'>
                <img className='buildings'src={elevation}></img></a>
                <sub className='pictext'>University of North Carolina at Wilmington</sub>
                </div>
                <div className='upperText1'>
            <h1 className='htitle'>Spray Foam Insulation </h1>
                <ul className='lowerList'>
                    <li>
                    Quik Shield Spray Polyurethane Foam (SPF) offers superior energy performance and excellent insulation efficiency.
                    </li>
                    <li>
                    Effective Air and Moisture Barrier </li>
                    <li>
                    Seals all cavities and crevices
                    </li>
                    <li>
                    Higher tensile and bond strength
                    </li>
                </ul>
                </div>
                <div id='upperTextArch'>
                    <a href='/projects/'>
                <img className='buildings2'src={arch}></img></a>
                <sub className='pictext1'>API Training Center continuous insulation application</sub>
                </div>
                </div>
            <div className='accordian-container1'>
                <Accordion className='accordian1' defaultActiveKey="0">
                    <h4>QUIK-SHIELD® Open Cell Products</h4>
                
            <Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                <h3>QS 104</h3>
                    <h6 className='accordian-subtext1'>
                    QS 104 is an integral component of an energy efficient building envelope that does not require mixing.
 
                    </h6>
                                      <Icon.ChevronDown color='blue' size={45} />
                                       <h6>Tech Info Click Here</h6>


                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="1">
                        <Card.Body className='body1'>
                            <Media className='media1'>
                                    <Media.Body className='media-body1'>   
                                    <a href={TDS104}target='_blank' >QS 104 Technical Data Sheet </a>  
                                    <a href={cr104}target='_blank' >QS 104 Code Report</a>  
                                    <a href={qs104b}
                                    target='_blank'>QS 104 Brochure</a>  
                                    {/* <a href={TDS104}target='_blank' >QS 104 VOC </a>   */}
                                    
                                                                               
                                    </Media.Body>
                            </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card><Card className='card1'>
                <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="2">
                <h3>QS 106 </h3>
                        <h6 className='accordian-subtext1'>
                        QS 106 is a 1st generation 1-hour re-entry open cell foam insulation with no ignition barrier required in un-vented attics.
                    </h6>
                                      <Icon.ChevronDown color='blue' size={45} />
                                       <h6>Tech Info Click Here</h6>


                </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="2">
                        <Card.Body className='body1'>
                        <Media className='media1'>
                                <Media.Body className='media-body1'>
                                    <a href={TDS106} 
                                    target='_blank'>QS 106 Technical Data Sheet </a>  
                                    <a href={spec106} target='_blank'>QS 106 Specification (Download)</a>  
                                    <a href={roofrating106}
                                    target='_blank' >QS 106 Code Report</a>  
                                    <a href={eval106}
                                    target='_blank' >QS 106 VOC </a>
                                    <a href={qs106b}
                                    target='_blank'>QS 106 Brochure</a> 
                                    
                            </Media.Body>
                        </Media>
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
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
                                    target='_blank' >QS 108YM Technical Data Sheet </a>  
                                    <a href={spec108} target='_blank'>QS 108 Specification(Download)</a>  
                                    <a href={ccrr108}
                                    target='_blank' >QS 108YM Code Report</a>  
                                    <a href={gold}
                                    target='_blank'>QS 108YM VOC </a>
                                    <a href={qs108b}
                                    target='_blank'>QS 108YM Brochure</a> 
                                    
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
                <h3>QS 112</h3>
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
                                    target='_blank' >QS 112 Technical Data Sheet </a>  
                                    <a href={TDS112xc}
                                    target='_blank' >QS 112XC Technical Data Sheet </a>
                                    <a href={qs112} target='_blank'>QS 112 Specification(Download)</a>  
                                    <a href={ccrr112}
                                    target='_blank' >QS 112 Code Report</a>  
                                    <a href={VOC112}
                                    target='_blank'>QS 112 VOC </a>
                                    <a href={qs112b}
                                    target='_blank'>QS 112 Brochure</a> 
                                    
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
                                    target='_blank' >QS 118 Technical Data Sheet </a>  
                                    <a href={TDS118xc}
                                    target='_blank' >QS 118XC Technical Data Sheet </a> 
                                    <a href={qs118} target='_blank'>QS 118 Specification(Download)</a>  
                                    <a href={ccrr118}
                                    target='_blank' >QS 118 Code Report</a>  
                                    <a href={VOC118}
                                    target='_blank'>QS 118 VOC </a>
                                     <a href={qs118b}
                                    target='_blank'>QS 118 Brochure</a>
                                     <a href={qs118xcb}
                                    target='_blank'>QS 118XC Brochure</a>  
                                    
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
                                    target='_blank' >QS 450 Technical Data Sheet </a> 
                                    <a href={ccrr450}
                                    target='_blank' >QS 450 Code Report</a>  
                                    
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
                <div className='rtside-lower'>
                    <div className='imgsContainer11'>
                    {/* <img className='imgsLower' src={img5}/> */}
                    </div>
                    <div className='lowerContent'>
                <div className='lowerbox1'>
                <h1 className='htiltle'>Open-Cell</h1>
                <p>
                    Open-cell-foam, low-density spray    polyurethane foam is spray
                    applied to provide a continuous insulation and an air-sealing
                    barrier. Low-density SPF is also called ½ pound foam, as it
                    weighs almost 0.5 lbs. per cubic foot. The foam’s open-cell
                    structure gives some flexibility to the hardened foam.
                    R-Values start at 3.6 per inch. Open Cell has superior sound absorbtion quality. (Typically specified in climate zones 1-4)
                </p>
                {/* <img src={diagram}></img> */}
                <h1 className='htiltle'>Open-Cell Building Applications</h1>
                <ul className='lowerList1'>
                    <li>
                    Residential 
                    </li>
                    <li>
                    Attics
                    </li>
                    <li>
                    Light Commercial 
                    </li>
                </ul>
                <h2 className='htiltle'>Contact Us</h2>
                <ul className='lowerList1'>
                    <li>
                    Sue Murtey 
                    </li>
                    <li>
                    Sue.murtey@swdurethane.com

                    </li>
                    <li>
                    800-828-1394 ext 510 
                    </li>
                </ul>
                </div>
                <div className='lowerbox2'>
                <h1 className='htiltle'>Closed-Cell</h1>
                <p>
                Closed cell foam has a density starting at 1.75 pounds per cubic foot or more. Closed Cell Foam has a higher R Value than open cell foam and can perform as a vapor barrier in a wall assembly application. (Typically specified for climate zones 5 and above) 
                </p>
                {/* <img src={ccimg}/> */}
                <h1 className='htiltle'>Closed-Cell Building Applications</h1>
                <ul className='lowerList1'>
                    <li>
                    Residential Projects
                    </li>
                    <li>
                    Commercial Buildings
                    </li>
                    <li>
                    Agricultural Buildings 
                    </li>
                    <li>
                    Cold Storage Facilities 
                    </li>
                    <li>
                    Hospitals
                    </li>
                    <li>
                    Schools 
                    </li>
                    <li>
                    Industrial Buildings 
                    </li>
                    <li>
                    Manufacturing Buildings 
                    </li>
                </ul>
                    {/* <img className='imgsLower2' src={img4}/> */}
                </div>
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