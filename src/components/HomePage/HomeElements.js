import React from 'react'
import Hamburger from './Hamburger'
import Footer from './Footer'
import DesktopNav from './DesktopNav'
import Projects from './Projects'
import Nav from './Nav'
import Header from './Header'

const HomeElements = () => {
    return (
        <div>
             <Nav/>
                <DesktopNav/>
                <Hamburger/>
                 <Header/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default HomeElements
