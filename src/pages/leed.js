import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import greenbuilding from '../images/LEEDLOGO.png'
import energy from '../images/energy.png'
import inno from '../images/innovation.png'
import material from '../images/material.png'
import indoor from '../images/indoor.png'




export default function leed() {
    return (
        <div className='leedpg'>
            <div className='page'>
        <div className='arch-page'>
        <Header/>
            <div className='img-container1'>
                <span className='headspan'> </span>
                <img alt='roofing' className='LEED' src={greenbuilding}></img>
               </div>
               <div className='leedtop'>
               <h3 className='leedtitle'>
                    LEED Credits for a Cleaner Climate
                    Spray foam insulation is a total building performance solution that contributes to
                    LEEDv3 legacy credits, including new LEEDv4 credits, in the following categories:</h3>
               </div>
                
                <ul className='leedlist'>
                    <li>
                        <h2>Energy & Atmosphere</h2>   
                        <img src={energy}/>
                    </li>
                    <li>
                        <h2>Innovation & Design</h2>   
                        <img src={inno}/>
                    </li>
                    <li>
                        <h2>Materials & Resources</h2>   
                        <img src={material}/>
                    </li>
                    <li>
                        <h2>Indoor Environmental Quality</h2>   
                        <img src={indoor}/>
                    </li>
                </ul>
                </div>
                <Footer/>
        </div>
            
        </div>
    )
}
