import React from 'react'
import Hamburger from '../HomePage/Hamburger'
import Nav from '../HomePage/Nav'
import Header from '../HomePage/Header'
import './about.css'

const About = () => {
    return (
        <div>
            <Hamburger/>
            <Nav/>
            <Header/>
            <div className='about'>
                <p>
Hello! My name is Troy and I am a former teacher and recent graduate of Flatiron School's Software Engineering certification program. I am currently seeking an opportunity to translate my experience with crafting differentiated academic activities and solutions to developing design-minded, responsive and user-focused interfaces and designs. As I make the pivot from architecting analog experiences to digital ones I invite you to view my latest work!
                </p>
                <div className='socials'>
                <div className='border'><a href="">GitHub</a></div>
                <div className='border'><a href="">LinkedIn</a></div>
               <div className='border'> <a href="https://drive.google.com/file/d/1GXFuYOXGvEVW9LXBQtJYg9jmokkgVanh/view?usp=sharing" target='_blank'>Resume</a></div>
                <div className='email'><p>troy_domio@yahoo.com</p></div>
                </div>
            </div>
        </div>
    )
}

export default About
