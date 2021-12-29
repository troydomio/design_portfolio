import React from 'react'
import './portfolio.css'
import Hamburger from '../HomePage/Hamburger'
import Nav from '../HomePage/Nav'


const SingleProjectTemplate = () => {
    return (
        <div>
            <Hamburger/>
            <Nav/>
            <div className='project-container'>
                <div className='project-header'></div>
                <div className='project-title'><h4>Personal Portfolio Project</h4></div>
                <div className='project-description'>Welcome to TroyDomio.me, a responsive development and design portfolio to showcase my latest work. </div>
           </div>
           <div className='summary-video'>
            <video src='movie.mp4' controls='controls'/>
           </div>
           <div className='project-summary'>
               <div className='project-summary-title'>Project Summary</div>
               <div className='project-summary-content'>dsnfslnfsjgnwkjngkejfnkjfskjfnskjnffsdnfkjsdnfskjndfskjdfndskjfnskfnskjfnskjfnkjfnskjfnskjfndsnfslnfsjgnwkjngkejfnkjfskjfnskjnffsdnfkjsdnfskjndfskjdfndskjfnskf</div>
           </div>
           <div className='role project-summary'>
                <div className='project-summary-title'>My Role</div>
               <div className='project-summary-content'>dsnfslnfsjgnwkjngkejfnkjfskjfnskjnffsdnfkjsdnfskjndfskjdfndskjfnskfnskjfnskjfnkjfnskjfnskjfndsnfslnfsjgnwkjngkejfnkjfskjfnskjnffsdnfkjsdnfskjndfskjdfnd</div>
           </div>
           <div className='challenge project-summary'>
                <div className='project-summary-title'>The Challenge</div>
               <div className='project-summary-content'>dsnfslnfsjgnwkjngkejfnkjfskjfnskjnffsdnfkjsdnfskjndfskjdfndskjfnskfnskjfnskjfnkjfnskjfnskjfndsnfslnfsjgnwkjngkejfnkjfskjfnskjnffsdnfkjsdnfskjndfsk</div>
           </div>
           <div className='user-paralax'>
            <div className='newsection'>Understanding the User</div>
           </div>
           <div className='user-paralax'>
            <div className='newsection'>Design and Development Process</div>
           </div>
           <div className='user-paralax'>
            <div className='newsection'>Results and Outcome</div>
           </div>
           <div className='user-paralax'>
            <div className='newsection'>Lesson's Learned</div>
           </div>
        </div>
    )
}

export default SingleProjectTemplate

// background-image: url('https://images.unsplash.com/photo-1592312040436-64eec4863b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');