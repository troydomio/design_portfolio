import React from 'react'
import Hamburger from '../../../HomePage/Hamburger'
import Nav from '../../../HomePage/Nav'
import './care.css'
import Footer from '../../../HomePage/Footer'

const careapp = () => {
    return (
        <div>
            <Hamburger/>
            <Nav/>
            <div></div>
            <div className='care-images'>
                <img src="https://live.staticflickr.com/65535/51800094714_46bf07b241_b.jpg"/>
                <img src="https://live.staticflickr.com/65535/51800461830_01415ab132_b.jpg"/>
                <img src="https://live.staticflickr.com/65535/51800094699_4855896ddc_b.jpg"/>
                <img src="https://live.staticflickr.com/65535/51799854553_8a6fb27914_b.jpg"/>
                <img src="https://live.staticflickr.com/65535/51799854548_872156e7fe_b.jpg"/>
                <img  src="https://live.staticflickr.com/65535/51800461775_772291294a_b.jpg"/>
                <img src="https://live.staticflickr.com/65535/51800461760_acd76515dc_b.jpg"/>
            </div>
            <Footer/>
        </div>
    )
}

export default careapp
