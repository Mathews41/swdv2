import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


//css 
import '../assets/scss/layout/about.scss'

//images
import img5 from '../images/API-min.jpg'
import img6 from '../images/ASU-min.jpg'
import img7 from '../images/QS106_Edited_15-min.jpg'
import picture4 from '../images/Picture4.jpg'
import picture5 from '../images/Picture5.png'
import picture6 from '../images/Picture7.jpg'




export default function about() {
    return (
        <div className='page'>
            <Header/>
            <div className='img-containerab'>
                <img alt='about image' className='split-imgab' src={img6}/>
                <h3 className='headspanAb'>About Us</h3>
                <sub></sub>
                <img alt='about image' className='split-imgab' src={img5}/>
            </div>
            <div className='aboutPg'></div>
            <img alt='about image' src={picture4}/>
            <p className='aboutParagraph'>At SWD, we never forget our roots. We were started by spray foam contractors, over 40 years ago, who needed roofing and insulation solutions that traditional polyurethane suppliers could not provide. Our past experience gives us the unique understanding of how to partner with you to help grow your business effectively and profitably.</p>
            <p className='aboutParagraph'>As a systems house, SWD has an exceptional lab processing team that gives us the ability to develop solutions based upon your specific needs. Unlike commodity providers, SWD will work with you to develop best-result solutions.</p>
            <img alt='about image' src={picture5}/>
            <p className='aboutParagraph'>SWD Urethane creates strong partnerships by offering a specification program, engineering assistance and code support for commercial, residential and industrial buildings. It is also an AIA/CES registered provider and can provide a full range of educational presentations. In addition, SWD Urethane will work with clients to develop best-result solutions. SWD has an exceptional lab processing team that gives it the ability to develop solutions based upon specific architect, contractor or builder needs.

 

            SWD Urethane is a member of the U.S. and Canada Green Building Council. Quik-Shield® spray foam is a LEED qualified material that can count towards LEED points.

            </p>
            <img alt='about image' src={picture6}/>
            
            <Footer/>
        </div>
    )
}
