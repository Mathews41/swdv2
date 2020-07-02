import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import '../assets/scss/layout/architectsStepper.scss'
import bg2 from '../images/bg2-min.jpg'
import img2 from '../images/Roofing_Edited_2-min.jpg'
import { Link } from 'gatsby'
import bgimg from '../images/bg-min.jpg'
import pic1 from '../images/QS112_Edited_6-min (2).jpg'
import * as Icon from 'react-feather'
import '../assets/scss/layout/_main.scss'
import uofa from '../images/uofahonors-min.jpg'
import jul from '../images/yul-overall.jpg'


import greenguard from '../images/greenguard logo (1).jpg'
import abaa from '../images/abaa.svg'
import icon2 from '../images/icon2.jpg'
import greenbuilding from '../images/greenbuilding.jpg'
import masterSpec from '../images/images.jpg'




export default function architectsStepper() {
    return (
        <div className='page'>
            {/* <img alt='background image' className='stepperimg' src={uofa}></img> */}
            <Header/>
        <div className='archStepper2'>
            <div className='stepperPage2' >
            <CardDeck id='cardDeck2'>
                <a href='/detailsInsulation/'className='cardLink'>
                    <Card className='stepperCard2'>
                        <Card.Img className='cardImg1' variant="top" src={jul} />
                        <Card.Body id='cardBody'>
                            <Card.Title id='cardTitle'>Insulation Details & Drawings
                            <Icon.ExternalLink className='insulLink'/>
                            </Card.Title>
                                <Card.Text id='cardText2'>
                                
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a className='cardLink' href='/detailsRoof/'>
                    <Card className='stepperCard2'>
                        <Card.Img className='cardImg1'  variant="top" src={uofa} />
                        <Card.Body id='cardBody'>
                            <Card.Title id='cardTitle'>
                                Roofing Details & Drawings
                            <Icon.ExternalLink className='insulLink'/>
                            </Card.Title>
                                <Card.Text id='cardText2'>
                                
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </CardDeck>
        </div>
        <div className='isoBand'>
            <img alt='stepper' className='ISO1' src={abaa}></img>
            <img alt='stepper' className='ISO12' src={greenguard}></img>
            <img alt='stepper' className='ISO' src={icon2}></img>
            <img alt='stepper' className='ISO11' src={masterSpec}></img>
            <img alt='stepper' className='ISO1' src={greenbuilding}></img>

        </div>
        </div>
        </div>
    )
}
