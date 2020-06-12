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
import wallspray from '../images/wallspray.jpg'
import roofspray from '../images/IMG_0534.jpg'
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
            <div className='contPage'>
                    <h3>Spray Foam Coalition</h3>
                <div className='contcont' >
                    <p className='contParagraph'>SWD Urethane has been a member of the Spray Foam Coalition since its inception and closely adheres to its guiding principles.

                    The Spray Foam Coalition (SFC) was formed under the Center for Polyurethanes Industry (CPI). The SFC is a dynamic organization of companies that produce and sell polyurethane spray foam insulation systems and the chemicals and equipment necessary for their use.

                    The SFC Code of Conduct provides a framework to drive continuous improvement in health and safety and product stewardship. This Code of Conduct begins with a commitment to a culture of product safety by the members that manufacture SPF systems. Each systems house member will adhere to the six commitments set forth in this Code of Conduct.

                    Quik-Shield spray foam insulation products deliver exceptional job site value that will ultimately help build repeat business and your own bottom line. Quik-Shield products are designed to be technically superior and provide benefits that will save you, the contractor, both time and money. All Quik-Shield products are code approved so you know you will be using products that meet tough building standards.</p>
                <img className='contImg'src={wallspray}/>
                </div>
                    <h3>Spray Foam Growth and Opportunity</h3>
                <div className='contcont'>
                <img className='contImg'src={roofspray}/>
                    <p className='contParagraph'>Spray foam is one of the fastest growing segments in the construction industry, and presents a great opportunity for contractors looking to get into the business. With its superior benefits spray foam is increasingly becoming the product of choice for creating energy-efficient building envelopes, and better living environments. Come partner with us and see how SWD can position you to take advantage of this opportunity.</p>
                </div>
                    <h3 >SWD Partnership</h3>
                <div className='contcont'>
                    <p className='contParagraph'> SWD Urethane was started by spray foam contractors, 40 years ago. We know what it is like being a contractor and we know what it takes to help you grow your business effectively and profitably. We have been where you are and can help you get where you want to be.

                    <p>We work with you to help educate and identify needs and opportunities, find solutions to your problems and position you for success. From product training, to equipment troubleshooting, to marketing and sales support, to working with code officials, we provide you with a full range of support you need.</p>

                    </p>
                </div>
                <div></div>

            </div>
                    <Footer/>
        </div>
    )
}
