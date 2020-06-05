import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


//css 
import '../assets/scss/layout/about.scss'

//images
import img5 from '../images/API-min.jpg'
import img6 from '../images/ASU-min.jpg'
import img7 from '../images/QS106_Edited_15-min.jpg'




export default function about() {
    return (
        <div className='page'>
            <Header/>
            <div className='img-containerab'>
                <img className='split-imgab' src={img6}/>
                <h3 className='headspanAb'>About Us</h3>
                <sub></sub>
                <img className='split-imgab' src={img5}/>
            </div>
            <div className='aboutPg'>
                <div className='aboutPg1'>
                    <img className='aboutImg' src={img7}/>
                    <div className='psection'>
                    <h2 className='pfs'>Call to Action</h2>
                    <p className='aboutP'>
                    We were started by spray foam contractors over 45 years ago, who needed roofing and insulation solutions that traditional polyurethane suppliers could not provide. Our past experience gives us the unique understanding of how to partner with you to help grow your business effectively and profitably.
                    </p>
                    </div>
                </div>
                <div className='aboutPg1'>
                <div className='psection'>
                <h2 className='pfs'>Location Location Location</h2>
                    <p className='aboutP'>
                    Located in Mesa, Arizona, SWD has grown to providing breakthrough polyurethane systems for a number of industries around the globe including both construction and industrial products. As a systems house, SWD has an exceptional lab processing team that gives us the ability to develop solutions based upon your specific needs. Unlike commodity providers, SWD will work with you to develop best-result solutions.
                    </p>
                    </div>
                    <img className='aboutImg1' src={img6}/>
                </div>
                <div className='aboutPg1'>
                    <img className='aboutImg2' src={img7}/>
                    <div className='pfs'>
                    <h2 className='pfs'>Partners For Success</h2>
                    <p className='aboutP1'>
                    You can count on us to partner with you to deliver reliable products, service, and training that will help you grow your business. We believe that through meaningful partnerships, we can help create a community that is committed to growing the polyurethane foam industry worldwide and success for everyone involved. 
                    </p>
                    </div>
                </div>
                <div className='SFC'>
                    <h2>
                        Spray Foam Coalition
                    </h2>
                    <ul>
                        <li>
                            <p>
                            SWD Urethane has been a member of the Spray Foam Coalition since its inception and closely adheres to its guiding principles.
                            </p>
                        </li>
                        <li>
                            <p>
                            The Spray Foam Coalition (SFC) was formed under the Center for Polyurethanes Industry (CPI). The SFC is a dynamic organization of companies that produce and sell polyurethane spray foam insulation systems and the chemicals and equipment necessary for their use.
                            </p>
                        </li>
                        <li>
                            <p>
                            The SFC Code of Conduct provides a framework to drive continuous improvement in health and safety and product stewardship. This Code of Conduct begins with a commitment to a culture of product safety by the members that manufacture SPF systems. Each systems house member will adhere to the six commitments set forth in this Code of Conduct.
                            </p>
                        </li>
                    </ul>
                    <button>
                        Become a Contractor
                    </button>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
