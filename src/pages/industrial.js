import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

//imgs
import indLogo from '../images/Quik-Works.png'
import quikshot from '../images/QUIK-Shot.png'
import Quikimg from '../images/QUIKSHOT_Edited_1.jpg'


//Bootstrap
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'


//css
import '../assets/scss/layout/industrial.scss'

//Icons
import * as Icon from 'react-feather'



export default function industrial() {
    return (
        
        <div className='page'>
            <div>
        </div>
            <Header/>
            <div className='pagelayout'>
                <div className='scrollspy-contentind'>
                    <div id='section_01'>
                        <div className='indLogo'>
                            <img alt='industrial image' src={indLogo}></img>
                            <sub className='logotag'>Our Cool Stuff Makes Your Cool Stuff</sub>
                        </div>
                        <div className='centerSection'>
                            <div className='lftTxt'>
                            <p>
                            We provide rigid and flexible foams and elastomers for a variety of specifications, but we are much more than just a material supplier. We are all about creating a meaningful partnership with you to develop cost-effective solutions, not just to sell you products. We work with you and listen to your needs, and our team of highly skilled chemists can create custom solutions for you based on your goals. Whether you are purchasing a 5 gallon pail or a tote of material, you are important to us. When you call, we will always be ready to assist you.
                            </p>
                            <ul>
                                <li>
                                If you are tired of dealing with companies that are just commodity suppliers and who won’t work with you to create solutions, we can help.
                                </li>
                                <li>
                                Your goals and needs are what are important to us. Tell us your objectives and we will work with you to develop custom solutions based on your needs.
                                </li>
                                <li>
                                Whether you need rigid or flexible foams or elastomers, we offer a broad variety of solutions.
                                </li>
                                <li>
                                You need assistance and we offer outstanding service and support to promptly deal with any issues when you call, and we work with you to ensure that the same issues do not recur in the future.
                                </li>
                            </ul>
                            <Accordion className='accordianind' defaultActiveKey="0">
                                <h4>OEM Products</h4>
                            
                        <Card className='cardind'>
                            <Accordion.Toggle className='toggleind' as={Card.Header} eventKey="1">
                            <h3>Flexible Foam</h3>
                                <Icon.ChevronDown color='blue' size={45} />

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapseind' eventKey="1">
                                    <Card.Body className='bodyind'>
                                        <Media className='mediaind'>
                                                <Media.Body className='media-bodyind'>   
                                                <h3>Moldable & Responsive</h3>
                                                <p>
                                                The Quik-Works line of flexible systems have a wide range of densities and firmness. Formulations can be customized to meet your specific needs to ultimately deliver the total solution.
                                                </p>
                                                <button>Learn More</button>
                                                </Media.Body>
                                        </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                        <Card className='cardind'>
                            <Accordion.Toggle className='toggleind' as={Card.Header} eventKey="2">
                            <h3>Rigid Foam</h3>
                                <Icon.ChevronDown color='blue' size={45} />

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapseind' eventKey="2">
                                    <Card.Body className='bodyind'>
                                    <Media className='mediaind'>
                                            <Media.Body className='media-bodyind'>
                                            <h3>Light-Weight & Reliable</h3>
                                                <p>
                                                Our Quik-Works rigid polyurethane systems are easily customizable to produce a finished product that can meet a variety of specifications. Foams are available in a wide range of densities and reactivity profiles. Our formulations have the ability to reduce weight compared to alternative materials and can be processed using a variety of methods.
                                                </p>
                                                <button>Learn More</button>
                                        </Media.Body>
                                    </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                        <Card className='cardind'>
                            <Accordion.Toggle className='toggleind' as={Card.Header} eventKey="3">
                            <h3>Elastomers</h3>
                                <Icon.ChevronDown color='blue' size={45} />

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapseind' eventKey="3">
                                    <Card.Body className='bodyind'>
                                        <Media className='mediaind'>
                                                <Media.Body className='media-bodyind'>   
                                                <h3>Strong & Durable</h3>
                                                <p>
                                                Quik-Works Elastomers are an excellent replacement material for manufacturing parts traditionally molded from plaster, rubber, or fiberglass, providing a cost-effective alternative for many applications. They can be engineered with high load bearing capabilities, as well as abrasion, impact, and tear resistance.
                                                </p>  
                                                <button>Learn More</button> 
                                                </Media.Body>
                                        </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                        <Card className='cardind'>
                            <Accordion.Toggle className='toggleind' as={Card.Header} eventKey="4">
                            <h3>Toll Blending</h3>
                                <Icon.ChevronDown color='blue' size={45} />

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapseind' eventKey="4">
                                    <Card.Body className='bodyind'>
                                        <Media className='mediaind'>
                                                <Media.Body className='media-bodyind'>   
                                                <p>
                                                We offer toll blending to help you avoid the difficulties and pitfalls of in-house production. Our capabilities are wide ranging and can help you create the perfect formula. If you are interested in learning more please fill out the contact form.
                                                </p> 
                                                </Media.Body>
                                        </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                                </Accordion>
                            </div>
                            <div className='rtTxt'>
                                <h1>QUIK-SHOT</h1>
                                <p>
                                    If you are tired of spending large amounts of money on material costs and labor costs, then the new QUIKSHOT system may be for you. Click on our QUIKSHOT webpage to learn more about material and labor cost savings associated with our new system.
                                </p>
                                <h1>Hot Tub & Spa Foam</h1>
                                <p>
                                    We create insulation products for the hot tub and spa industries. We operate with our customer’s needs as a top priority, including helping increase profitability.
                                </p>
                                <h1>Quik-Works 7156</h1>
                                <p>
                                    Quik-Works 7156, the High Efficiency High Resiliency Flex Foam, is specially designed to make your production line more efficient. It simplifies your production line because it allows you to make a variety of products with an extreme range of ILDs. In addition, Quik-Works 7156 has unmatched flowability, which will help reduce your scrap rate, saving you time and money.
                                </p>
                                <h1>Taxidermy Foam</h1>
                                <p>
                                    Use Quik-Works products for your taxidermy forms and bases. Our kits are easy to mix, with the ability to be mixed by hand or drill. With an option for high and low density polyurethane foams, we have you covered.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="section_02" offset={100} >
                        <img alt='industrial image' className='indLogo1' src={quikshot}/>
                            <img alt='industrial image'  src={Quikimg}/>
                        <div className='qcklft'>
                            <p>The QUIK-SHOT low-pressure, heated, fluid-applied system has two features that provide material and labor cost savings to users spraying SPF, Polyurea, or Epoxy:</p>
                            <ul>
                                <li>
                                The auto-calibration proportioner mixes your materials for you at the correct ratio, reducing your costs by saving chemical waste involved in manual calibration. Labor costs associated with manual calibration are also eliminated.
                                </li>
                                <li>
                                Material preheaters and heated hoses maintain constant chemical temperatures, increasing consistency of the foam and yield.
                                </li>
                            </ul>
                            <button> QUIK-SHOT Brochure</button>
                        </div>
                        <div className='qckrt'>
                        <Accordion className='accordianind1' defaultActiveKey="0">
                                <h4>QUIK-WORKS Products</h4>
                            
                        <Card className='cardind'>
                            <Accordion.Toggle className='toggleind' as={Card.Header} eventKey="1">
                            <h3>QUIK-WORKS 4166M - Rigid Pour Foam</h3>
                                <Icon.ChevronDown color='blue' size={45} />

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapseind' eventKey="1">
                                    <Card.Body className='bodyind'>
                                        <Media className='mediaind'>
                                                <Media.Body className='media-bodyind'>   
                                                
                                                </Media.Body>
                                        </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                        <Card className='cardind'>
                            <Accordion.Toggle className='toggleind' as={Card.Header} eventKey="2">
                            <h3>QUIK-WORKS 4168M - Rigid Pour Foam</h3>
                                <Icon.ChevronDown color='blue' size={45} />

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapseind' eventKey="2">
                                    <Card.Body className='bodyind'>
                                    <Media className='mediaind'>
                                            <Media.Body className='media-bodyind'>
                                            
                                        </Media.Body>
                                    </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                        <Card className='cardind'>
                            <Accordion.Toggle className='toggleind' as={Card.Header} eventKey="3">
                            <h3>QUIK-WORKS 4170M - Rigid Pour Foam</h3>
                                <Icon.ChevronDown color='blue' size={45} />

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapseind' eventKey="3">
                                    <Card.Body className='bodyind'>
                                        <Media className='mediaind'>
                                                <Media.Body className='media-bodyind'>   
                                               
                                                </Media.Body>
                                        </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                        <Card className='cardind'>
                            <Accordion.Toggle className='toggleind' as={Card.Header} eventKey="4">
                            <h3>QUIK-WORKS 4172M - Rigid Pour Foam</h3>
                                <Icon.ChevronDown color='blue' size={45} />

                            </Accordion.Toggle>
                                <Accordion.Collapse className='collapseind' eventKey="4">
                                    <Card.Body className='bodyind'>
                                        <Media className='mediaind'>
                                                <Media.Body className='media-bodyind'>   
                                               
                                                </Media.Body>
                                        </Media>
                                    </Card.Body>
                                </Accordion.Collapse>
                        </Card>
                                </Accordion>
                            <div className='form'>

                            </div>
                        </div>
                    </div>
            <Footer/>
            </div>
            </div>
        
        </div>
    )
}
