import React from 'react';
import * as Icon from 'react-feather'
import '../assets/scss/layout/contractors.scss'
import '../assets/scss/layout/architectsRoofing.scss'
import Header from '../components/Header'
import bgimg from '../images/bg1-min.jpg'



import wallspray from '../images/wallspray.jpg'
import roofspray from '../images/IMG_0534.jpg'
import {Link} from 'gatsby'
//Footer
import Footer from '../components/Footer'

//Technical Data Sheets


export default function contractors() {
    return (
        <div id='page-contractor'>
            <Header/>
            <img alt='contractors' className='cont-bg' src={bgimg}></img>
            <div className='header-container-cont'>
                <h1>Contractors</h1>
            <p>
            When you do business with SWD, you don’t just get great products and service, you get an outstanding partnership experience that you don’t get from any other manufacturer. Our partner support programs provide greater value to you.
            </p>
            <Link to='/products/' id='contButton'>Click here for Products</Link>
            </div>   
            <div className='contPage'>
                    <h3>Spray Foam Coalition</h3>
                <div className='contcont' >
                    <p className='contParagraph'>SWD Urethane has been a member of the Spray Foam Coalition since its inception and closely adheres to its guiding principles.

                    The Spray Foam Coalition (SFC) was formed under the Center for Polyurethanes Industry (CPI). The SFC is a dynamic organization of companies that produce and sell polyurethane spray foam insulation systems and the chemicals and equipment necessary for their use.

                    The SFC Code of Conduct provides a framework to drive continuous improvement in health and safety and product stewardship. This Code of Conduct begins with a commitment to a culture of product safety by the members that manufacture SPF systems. Each systems house member will adhere to the six commitments set forth in this Code of Conduct.

                    Quik-Shield spray foam insulation products deliver exceptional job site value that will ultimately help build repeat business and your own bottom line. Quik-Shield products are designed to be technically superior and provide benefits that will save you, the contractor, both time and money. All Quik-Shield products are code approved so you know you will be using products that meet tough building standards.</p>
                <img alt='contractors' className='contImg'src={roofspray}/>
                </div>
                    <h3>Spray Foam Growth and Opportunity</h3>
                <div className='contcont1'>
                <img alt='contractors' className='contImg1'src={wallspray}/>
                    <p className='contParagraph'>Spray foam is one of the fastest growing segments in the construction industry, and presents a great opportunity for contractors looking to get into the business. With its superior benefits spray foam is increasingly becoming the product of choice for creating energy-efficient building envelopes, and better living environments. Come partner with us and see how SWD can position you to take advantage of this opportunity.</p>
                </div>
                    <h3 >SWD Partnership</h3>
                <div className='contcont2'>
                    <p className='contParagraph2'> SWD Urethane was started by spray foam contractors, 40 years ago. We know what it is like being a contractor and we know what it takes to help you grow your business effectively and profitably. We have been where you are and can help you get where you want to be.

                    <p>We work with you to help educate and identify needs and opportunities, find solutions to your problems and position you for success. From product training, to equipment troubleshooting, to marketing and sales support, to working with code officials, we provide you with a full range of support you need.</p>

                    </p>
                </div>
                <div></div>

            </div>
                    <Footer/>
        </div>
    )
}
