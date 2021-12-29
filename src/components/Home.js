import React from 'react'
import Projects from './HomePage/Projects'
import Nav from './HomePage/Nav'
import Header from './HomePage/Header'
import Hamburger from './HomePage/Hamburger'
import Footer from './HomePage/Footer'



const Home = ({images}) => {
    return (
        <div>
                <Nav/>
                <Hamburger/>
                 <Header/>
            <Projects images={images}/>
            <Footer/>
          
        </div>
    )
}

export default Home
