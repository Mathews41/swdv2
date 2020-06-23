import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import '../assets/scss/layout/architectsStepper.scss'
import bg2 from '../images/bg2-min.jpg'
import img2 from '../images/Roofing_Edited_10-min.webp'
import { Link } from 'gatsby'
import bgimg from '../images/ASU-min.webp'
import pic1 from '../images/QS106_Edited_3-min.webp'
import * as Icon from 'react-feather'
import '../assets/scss/layout/_main.scss'
import uofa from '../images/uofahonors-min.webp'


import greenguard from '../images/greenguard logo (1).webp'
import abaa from '../images/abaa.svg'
import icon2 from '../images/icon2.png'
import greenbuilding from '../images/greenbuilding.png'
import masterSpec from '../images/images.webp'


export default function architectsStepper() {
    return (
        <div className='ArchStepperPage'>
            <img alt='background image' className='stepperimg' src={uofa}></img>
            <Header/>
        <div className='archStepper'>
            <div className='stepperPage' >
            <CardDeck id='cardDeck'>
                <a href='/architectsInsulation/'className='cardLink'>
                    <Card className='stepperCard'>
                        <Card.Img className='cardImg' variant="top" src={pic1} />
                        <Card.Body id='cardBody'>
                            <Card.Title id='cardTitle'>Spray Foam Insulation
                            <Icon.ExternalLink className='insulLink'/>
                            </Card.Title>
                                <Card.Text id='cardText'>
                                QUIK-SHIELD® Spray Foam Insulation is the most effective way to insulate the building envelope.
                                Available in 1/2lb open cell or 2lb closed cell insulation. 
                                <ul className='cardTextList'>
                                <div className='cardTextListTitle'>Benefits Include:</div>
                                    <li>Air-sealing and eliminating thermal shorts</li>
                                    <li>Superior energy performance</li>
                                    <li>Seamless air barrier</li>
                                </ul>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a className='cardLink' href='/architectsRoofing/'>
                    <Card className='stepperCard'>
                        <Card.Img className='cardImg'  variant="top" src={img2} />
                        <Card.Body id='cardBody'>
                            <Card.Title id='cardTitle'>
                                Spray Foam Roofing Systems
                            <Icon.ExternalLink className='insulLink'/>
                            </Card.Title>
                            <Card.Text id='cardText'>
                            QUIK-SHIELD® Spray Foam Roofing provides a seamless system from roof edge to roof edge.
                                <ul className='cardTextList'>
                                <div className='cardTextListTitle'>Benefits Include:</div>
                                    <li className='cardTextList'>Air Barrier</li>
                                    <li className='cardTextList'>Self- flashing around penetrations</li>
                                    <li className='cardTextList'>Thermal resistance</li>
                                    <li className='cardTextList'>No mechanical fasteners</li>
                                    <li className='cardTextList'>Cool Roof- reduces expansion and contraction</li>
                                </ul>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </CardDeck>
        </div>
        <div className='isoBand'>
            <img alt='arch stepper' className='ISO1' src={abaa}></img>
            <img alt='arch stepper' className='ISO12' src={greenguard}></img>
            <img alt='arch stepper' className='ISO' src={icon2}></img>
            <img alt='arch stepper' className='ISO11' src={masterSpec}></img>
            <img alt='arch stepper' className='ISO1' src={greenbuilding}></img>

        </div>
        </div>
        </div>
    )
}
