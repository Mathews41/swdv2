import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import '../assets/scss/layout/architectsStepper.scss'
import bg2 from '../images/bg2-min.jpg'
import img2 from '../images/Roofing_Edited_11-min.jpg'
import { Link } from 'gatsby'
import bgimg from '../images/bg-min.jpg'
import pic1 from '../images/QS106_Edited_3-min.jpg'
import * as Icon from 'react-feather'
import '../assets/scss/layout/_main.scss'

import greenguard from '../images/greenguard logo (1).png'
import abaa from '../images/abaa.svg'
import icon2 from '../images/icon2.png'
import greenbuilding from '../images/greenbuilding.png'
import masterSpec from '../images/images.png'




export default function architectsStepper() {
    return (
        <div className='page'>
            <Header/>
        <img className='bgimg' src={bgimg} fluid></img>
        <div className='archStepper'>
            <div className='stepperPage' >
            <CardDeck id='cardDeck'>
                <a href='/projectsWall/'className='cardLink'>
                    <Card className='stepperCard'>
                        <Card.Img className='cardImg' variant="top" src={pic1} />
                        <Card.Body id='cardBody'>
                            <Card.Title id='cardTitle'>Insulation Projects
                            <Icon.ExternalLink className='insulLink'/>
                            </Card.Title>
                                <Card.Text id='cardText'>
                                QUIK-SHIELD® Spray Foam insulation is the most effective way to insulate any type of building. Whether using an open-cell foam or a two pound closed-cell foam, spray foam creates an unsurpassed air barrier insulation system. This air barrier not only delivers thermal resistance against conduction (R-value) that surpasses batt and cellulose, it also dramatically reduces energy loss through convection.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a className='cardLink' href='/projectsRoof/'>
                    <Card className='stepperCard'>
                        <Card.Img className='cardImg'  variant="top" src={img2} />
                        <Card.Body id='cardBody'>
                            <Card.Title id='cardTitle'>
                                Roofing Projects
                            <Icon.ExternalLink className='insulLink'/>
                            </Card.Title>
                                <Card.Text id='cardText'>
                                QUIK-SHIELD® Seamless Monolithic Urethane Foam Roof System
From roof edge to roof edge QUIK-SHIELD® urethane foam provides a seamless roof with no mechanical fasteners, providing the building with an unsurpassed air barrier and increased thermal resistance. QUIK-SHIELD® also provides self-flashing around HVAC curbs, vents, and skylights, adding additional protection against moisture and air infiltration through otherwise failed metal flashings.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </CardDeck>
        </div>
        <div className='isoBand'>
            <img className='ISO1' src={abaa}></img>
            <img className='ISO1' src={greenguard}></img>
            <img className='ISO' src={icon2}></img>
            <img className='ISO11' src={masterSpec}></img>
            <img className='ISO1' src={greenbuilding}></img>

        </div>
        </div>
        </div>
    )
}
