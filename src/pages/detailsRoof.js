import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Footer from '../components/Footer'
import { Helmet } from "react-helmet";

import Media from 'react-bootstrap/Media'
import * as Icon from 'react-feather'
import '../assets/scss/layout/details.scss'
import Header from '../components/Header'
import uofahero from '../images/techpark.jpg'


// files
import QSW001Ceil from '../images/QSW-001 Ceiling - Cathedral with Skylight.pdf'

//Roofing Details
import QSW001r from '../images/QSR-001 - New Metal Parapet Cap.pdf'
import QSW003r from '../images/QSR-003 - Base Flashing For Wall-Supported Deck.pdf'
import QSW003ar from '../images/QSR-003A - Base Flashing Wall-Supported Deck Tall Wall.pdf'
import QSW008ar from '../images/QSR-008A - Typical Existing Area Divider.pdf'
import QSW010r from '../images/QSR-010 - Mechanical Equipment Support New and Remedial.pdf'
import QSW011r from '../images/QSR-011 - Equipment Support Stand.pdf'
import QSW013r from '../images/QSR-013 - Prefabricated Metal Curb.pdf'
import QSW014r from '../images/QSR-014 - Wood Raised Curb.pdf'
import QSW015r from '../images/QSR-015 - Structural Member through Roof Deck.pdf'
import QSW018r from '../images/QSR-018 - Deck Supported Penetration.pdf'
import QSW020r from '../images/QSR-020 - Roof Drain With Fastener.pdf'
import QSW020rr from '../images/QSR-020A - Roof Drain Without Fastener.pdf'
import QSW021r from '../images/QSR-021 SCUPPER DETAIL AT PARAPET WALL.pdf'
import QSW022r from '../images/QSR-022 OVERFLOW SCUPPER AT PARAPET WALL.pdf'
import QSW121r from '../images/QSR-121 SLOPED ROOF AND CRICKETS.pdf'
import QSW122r from '../images/QSR-122 SLOPE TO DRAIN.pdf'
import QSW131r from '../images/QSR-131 - Remedial Air Conditioner Treatment.pdf'
import QSW132r from '../images/QSR-132 - Existing Pitch Pan.pdf'
import QSW133r from '../images/QSR-133 - Equipment Support on Existing Stand.pdf'
import QSW134r from '../images/QSR-134 - Roof Equipment Protective Wall.pdf'
import QSW135r from '../images/QSR-135 - AC Duct Elbow.pdf'
import QSW142r from '../images/QSR-142 1-3 Hour Class A Metal Deck.pdf'
import QSW143r from '../images/QSR-143 - Class A Metal Fluted Deck with Tape.pdf'
import QSW144r from '../images/QSR-144 - Class B Roof on Combustible Deck.pdf'
import QSW145r from '../images/QSR-145 - Polyiso Board.pdf'
import QSW146r from '../images/QSR-146 2 Hour Class A Concrete Deck.pdf'
import QSW147r from '../images/QSR-147 - Class A Roof on Combustible Deck with Cementitious Coating.pdf'
import QSW151r from '../images/QSR-151 - Roof Hatch.pdf'
import QSW152r from '../images/QSR-152 - Raised Curb for Skylight.pdf'
import QSW153r from '../images/QSR-153 - Raised Curb for Down Draft Equipment.pdf'
import QSW161r from '../images/QSR-161 - Parapet Wall Detail.pdf'
import QSW162r from '../images/QSR-162 - Foam and Coating Short Parapet Wall.pdf'
import QSW163r from '../images/QSR-163 - New Flashing Wall-Supported Deck.pdf'
import QSW164r from '../images/QSR-164 - Stucco Finish on Parapet Wall.pdf'
import QSW165r from '../images/QSR-165 - Mansard Wall Top and Bottom.pdf'
import QSWAIA from '../images/AIA Certificate - Roofing System Paul Simonsen DIGITAL.pdf'
import drain from '../images/Drain.pdf'




export default function details() {
    return (
        <div className='detailspage'>
            <Header/>
            <title>Roofing Details</title>

            <div className='detailsPg'>
            <div className='detailsheader'>
                <h1>Roofing Details & Drawings</h1>
            </div>

            {/* Main Content */}

            <div className='details-content'>

                {/* Wall Accordian */}

               
                                <div className='Roofing'>
                                <Accordion className='accordian1' defaultActiveKey="0">
                                    <h4>Roofing Details</h4>
                                
                            
                    <Card className='card1'>
                    <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="1">
                        <h3>Curb & Equipment & other Misc Details </h3>
                        <Icon.ChevronDown color='blue' size={45} />
                        <h6>Tech Info Click Here</h6>
                    </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="1">
                    <Card.Body className='body1'>
                        <Media className='media1'>
                            <Media.Body className='media-body1'>   
                            <ul className='ullist'>
                                <li>
                                    <a href={QSW008ar} target='_blank' rel='noreferrer'>
                                    QSR-008A - Typical Existing Area Divider
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW010r} target='_blank' rel='noreferrer' >
                                    QSR-010 - Mechanical Equipment Support New and Remedial
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW011r} target='_blank' rel='noreferrer'>
                                    QSR-011 - Equipment Support Stand
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW013r} target='_blank' rel='noreferrer'>
                                    QSR-013 - Prefabricated Metal Curb
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW014r} target='_blank' rel='noreferrer'>
                                    QSR-014 - Wood Raised Curb
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW020r} target='_blank' rel='noreferrer'>
                                    QSR-020 - Roof Drain With Fastener
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW020rr} target='_blank' rel='noreferrer'>
                                    QSR-020A - Roof Drain Without Fastener
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW131r} target='_blank' rel='noreferrer'>
                                    QSR-131 - Remedial Air Conditioner Treatment
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW132r} target='_blank' rel='noreferrer'>
                                    QSR-132 - Existing Pitch Pan
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW133r} target='_blank' rel='noreferrer'>
                                    QSR-133 - Equipment Support on Existing Stand
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW134r} target='_blank' rel='noreferrer'>
                                    QSR-134 - Roof Equipment Protective Wall
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW135r} target='_blank' rel='noreferrer'>
                                    QSR-135 - AC Duct Elbow
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW151r} target='_blank' rel='noreferrer'>
                                    QSR-151 - Roof Hatch
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW152r} target='_blank' rel='noreferrer'>
                                    QSR-152 - Raised Curb for Skylight
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW153r} target='_blank' rel='noreferrer'>
                                    QSR-153 - Raised Curb for Down Draft Equipment
                                    </a>
                                </li>
                            </ul>
                        </Media.Body>
                    </Media>
                </Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                    <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="2">
                        <h3>Drains & Scuppers </h3>
                        <Icon.ChevronDown color='blue' size={45} />
                        <h6>Tech Info Click Here</h6>
                    </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="2">
                    <Card.Body className='body1'>
                        <Media className='media1'>
                            <Media.Body className='media-body1'>   
                            <ul className='ullist'>
                                <li>
                                    <a href={QSW001Ceil} target='_blank' rel='noreferrer'>
                                    QSW-001 Ceiling - Cathedral with Skylight
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW020r} target='_blank' rel='noreferrer'>
                                    QSR-020 ROOF DRAIN WITH MECHANICAL FASTENER
                                    </a>
                                </li>
                                <li>
                                    <a href={drain} target='_blank' rel='noreferrer'>
                                    QSR-020 ROOF DRAIN
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW021r} target='_blank' rel='noreferrer'>
                                    QSR-021 SCUPPER DETAIL AT PARAPET WALL
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW022r} target='_blank' rel='noreferrer'>
                                    QSR-022 OVERFLOW SCUPPER AT PARAPET WALL
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW121r} target='_blank' rel='noreferrer'>
                                    QSR-121 SLOPED ROOF AND CRICKETS
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW122r} target='_blank' rel='noreferrer'>
                                    QSR-122 SLOPE TO DRAIN
                                    </a>
                                </li>
                            </ul>
                        </Media.Body>
                    </Media>
                </Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                    <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="3">
                        <h3>Expansion Joints and Penetrations </h3>
                        <Icon.ChevronDown color='blue' size={45} />
                        <h6>Tech Info Click Here</h6>
                    </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="3">
                    <Card.Body className='body1'>
                        <Media className='media1'>
                            <Media.Body className='media-body1'>   
                            <ul className='ullist'>
                                <li>
                                    <a href={QSW015r} target='_blank' rel='noreferrer'>
                                    QSR-015 - Structural Member through Roof Deck
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW018r} target='_blank'>
                                    QSR-018 - Deck Supported Penetration
                                    </a>
                                </li>
                            </ul>
                        </Media.Body>
                    </Media>
                </Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                    <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="5">
                        <h3>Flashing </h3>
                        <Icon.ChevronDown color='blue' size={45} />
                        <h6>Tech Info Click Here</h6>
                    </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="5">
                    <Card.Body className='body1'>
                        <Media className='media1'>
                            <Media.Body className='media-body1'>   
                            <ul className='ullist'>
                            <li>
                                    <a href={QSW003r} target='_blank' rel='noreferrer'>
                                    QSR-003 - Base Flashing For Wall-Supported Deck
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW003ar} target='_blank'>
                                    QSR-003A - Base Flashing Wall-Supported Deck Tall Wall
                                    </a>
                                </li><li>
                                    <a href={QSW163r} target='_blank' rel='noreferrer'>
                                    QSR-163 - New Flashing Wall-Supported Deck
                                    </a>
                                </li>
                            </ul>
                        </Media.Body>
                    </Media>
                </Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                    <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="6">
                        <h3>Wall and Parapet </h3>
                        <Icon.ChevronDown color='blue' size={45} />
                        <h6>Tech Info Click Here</h6>
                    </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="6">
                    <Card.Body className='body1'>
                        <Media className='media1'>
                            <Media.Body className='media-body1'>   
                            <ul className='ullist'>
                            <li>
                                    <a href={QSW001r} target='_blank' rel='noreferrer'>
                                    QSR-001 - New Metal Parapet Cap
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW021r} target='_blank'>
                                    QSR-021 - Scupper Detail at Parapet Wall
                                    </a>
                                </li><li>
                                    <a href={QSW022r} target='_blank' rel='noreferrer'>
                                    QSR-022 - Overflow Scupper at Parapet Wall
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW161r} target='_blank'>
                                    QSR-161 - Parapet Wall Detail
                                    </a>
                                </li><li>
                                    <a href={QSW162r} target='_blank' rel='noreferrer'>
                                    QSR-162 - Foam and Coating Short Parapet Wall
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW164r} target='_blank'>
                                    QSR-164 - Stucco Finish on Parapet Wall
                                    </a>
                                </li><li>
                                    <a href={QSW165r} target='_blank' rel='noreferrer'>
                                    QSR-165 - Mansard Wall Top and Bottom
                                    </a>
                                </li>
                            </ul>
                        </Media.Body>
                    </Media>
                </Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card className='card1'>
                    <Accordion.Toggle className='toggle1' as={Card.Header} eventKey="4">
                        <h3>Fire Rated Assemblies </h3>
                        <Icon.ChevronDown color='blue' size={45} />
                        <h6>Tech Info Click Here</h6>
                    </Accordion.Toggle>
                    <Accordion.Collapse className='collapse1' eventKey="4">
                    <Card.Body className='body1'>
                        <Media className='media1'>
                            <Media.Body className='media-body1'>   
                            <ul className='ullist'>
                            <li>
                                    <a href={QSW142r} target='_blank' rel='noreferrer'>
                                    QSR-142 1 - 3 Hour - Class ‘A’ Metal Deck
Roof Assembly
                                    </a>
                                </li>
                            <li>
                                    <a href={QSW143r} target='_blank' rel='noreferrer'>
                                    QSR-143 - Class A Metal Fluted Deck with Tape
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW144r} target='_blank'>
                                    QSR-144 - Class B Roof on Combustible Deck
                                    </a>
                                </li><li>
                                    <a href={QSW145r} target='_blank' rel='noreferrer'>
                                    QSR-145 - Polyiso Board
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW146r} target='_blank' rel='noreferrer'>
                                    QSR-146 2 Hour Class A Concrete Deck
                                    </a>
                                </li>
                                <li>
                                    <a href={QSW147r} target='_blank'>
                                    QSR-147 - Class A Roof on Combustible Deck with Cementitious Coating
                                    </a>
                                </li>
                            </ul>
                        </Media.Body>
                    </Media>
                </Card.Body>
            </Accordion.Collapse>
            </Card>
            </Accordion>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}
