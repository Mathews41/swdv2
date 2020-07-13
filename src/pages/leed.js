import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import greenbuilding from '../images/LEEDLOGO.png'



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
                
                        
                </div>
                <Footer/>
        </div>
            
        </div>
    )
}
