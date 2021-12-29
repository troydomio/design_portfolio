import React from 'react'
import Hamburger from '../../HomePage/Hamburger'
import Nav from '../../HomePage/Nav'
import '../portfolio.css'
import '../../../App.css'

const PortfolioProject = () => {
    return (
        <div>
        <Hamburger/>
        <Nav/>
        <div className='project-container'>
            <div className='project-header'></div>
            <div className='project-title'><h4>Design & Development Portfolio</h4></div>
            <div className='project-description'>Welcome to TroyDomio.me, a responsive development and design portfolio to showcase my latest work. </div>
       </div>
       <div className='summary-video'>
        <video src='movie.mp4' controls='controls'/>
       </div>
       <div className='project-summary'>
           <div className='project-summary-title'>Project Summary</div>
           <div className='project-summary-content'>In the final weeks of December(2021), I took on a personal challenge to redesign my portfolio.
            <div>The re-design aimed to:</div> 
           <li>increase discoverability </li> 
           <li>reevaluate usability for visitors.</li> <br></br> 
           As a result, I created a responsive web application that not only showcases my work but provides documentation illustrating the development life cycle of my projects as well as their case studies.</div>
       </div>
       <div className='project-summary'>
            <div className='project-summary-title'>My Role</div>
           <div className='role'>I was the designer and developer throughout the project cycle from requirement gathering for MVP and journey mapping to wireframing and production.</div>
       </div>
       <div className='challenge project-summary'>
            <div className='project-summary-title'>The Challenge</div>
           <div className='challenge'>
               My previous portfolio lacked documentation and insight to the User Interface and User Experience Design perspective of my work. 
               <div className='new-line'></div>
               Also, my portfolio was subjected to a single page thus decreasing usability and interest as well as being unaccommodating for mobile users.
               <div className='new-line'></div>
            <img src="https://live.staticflickr.com/65535/51771034099_326d9592ac_b.jpg" className='img1' ></img>
            <div className='questions'>
            <div className='new-line'></div>
            How can I increase the usability of my web application across devices( tablets, mobile, desktop, etc)? 
            <div className='new-line'></div>
            How can I incorporate my UI/UX perspective alongside my source code?
            <div className='new-line'></div>
             How can I capture and retain interest in my work?
             </div>
           </div>
       </div>
       <div className='user-paralax'>
        <div className='newsection'>Understanding the User</div>
       </div>
       <div className='flex-persona'>
       <div className='utu-text'>
           <p>My target audience is tasked with filling roles for their organization or on behalf of other organizations. 
           <div className='new-line'></div>
            With the growing number of technical talent entering the job market my target audience is tasked to quickly assess applicants' experience levels and aptitude to match them with vacant positions.</p>
       </div>
       <div>
       <div className='persona-container'>
       <h3>Ciara Anderson</h3>
       <img src='https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'className='image-persona'/>
       <li>Age 35</li>
       <li>Technical recruiter for a staffing company</li>
       <li>Seeking technical talent to deploy for client projects</li>
       </div>
       <div className='persona-container'>
       <div className='new-line'></div>
       <h3>Dave Barton</h3>
       <img src='https://images.unsplash.com/photo-1633367583895-08545d733dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' className='image-persona'/>
       <li>Age 41</li>
       <li>Design director for a large creative agency</li>
       <li>Seeking full-time designer associates</li>
       </div>
       </div>
       </div>
       <div className='user-stories'>
       <div className='us-1'>
           <h3>As a brand new user</h3>
           <li>I need to view a portfolio of relevant projects</li>
           <li>I need view an up-to-date resume</li>
           <li>I need to easily have access to contact information</li>
       </div>
       <div>
           <h3>As a returning user</h3>
           <li>I need to know how to navigate to new projects </li>
           <li>I need view an up-to-date resume</li>
           <li>I need to easily have access to contact information</li>
       </div>
       </div>
       
       <div className='user-paralax'>
        <div className='newsection'>Design and Development Process</div>
        </div>
        <div className='ddp'>
            <div className='jmap'>
            <div>
            <p>I created a journey map to gather insight on how my personas would experience my portfolio and  accommodate for possible pain points.</p>
            <div className='new-line'></div>
            <p>From my journey map I recognized my users are very busy people who within seconds need to access vital information such as a resume or projects.</p>
            <div className='new-line'></div>
            <p>For my mobile users I incorporated a resume and project button fixed to the bottom of the UI throughout each page of the portfolio.</p>
            </div>
            <div className='new-line'></div>
            <div className='jmap'></div>
            <img src='https://live.staticflickr.com/65535/51774053705_2b921d7fb6_b.jpg' className='journey-map'></img>
            </div>
            
            
            <div className='ddp'>
                <div className='jmap'>
            <img src='https://live.staticflickr.com/65535/51772279442_b2730cd286_b.jpg' className='user-flow'></img>
            <p>From my user flow, I created a low-fidelity mockup and prototype in Figma. </p>
            </div>
            <div className='new-line'></div>
            <div className='jmap'>
                <div className='margin-t'>
                <p>Once the dots were connected for routing, I began the development process using the JavaScript framework, React.</p>
                <p>If you are curious about the development process I underwent, please refer to the <a href="">README</a> of the project's source code where I go into detail on how I broke down the phase.</p>
                </div>
                <div className='margin-t'>
            <img src='https://live.staticflickr.com/65535/51773713669_713e45b76c_b.jpg' className='mobile-ui'/>
            <img src='https://live.staticflickr.com/65535/51773068741_db4e5350d1_b.jpg' className='desktop-ui'/>
            </div>
            </div>
            </div>
         </div>
       
       <div className='user-paralax'>
        <div className='newsection'>Results and Outcome</div>
       </div>
       <div className='ddp'>
       <div className='results jmap'>
           <div>
           <h3>Landing Page</h3>
           <li>sdnajfdakfakfksjf</li>
           <li>df skfdsdjfsdjfsdj</li>
           </div>
           <div>
           <img src='https://live.staticflickr.com/65535/51776364427_62bbf53652_b.jpg'/>
           </div>
       </div>
       <div className='results jmap'>
           <div>
            <h3>Navigation Menu</h3>
           <li></li>
           <li></li></div>
           <div><img src='https://live.staticflickr.com/65535/51778061590_68ccd29e30_b.jpg'/></div>       
       </div>
       <div className='results jmap'>
           <div>
            <h3>Project List Page</h3>
           <li></li>
           <li></li></div>
           <div><img src='https://live.staticflickr.com/65535/51783475753_26f22d1b57_b.jpg'/></div>       
       </div>
       <div className='results jmap'>
           <div>
            <h3>Single Project Page</h3>
           <li></li>
           <li></li></div>
           <div><img src='https://live.staticflickr.com/65535/51783485358_d7c12dfea2_b.jpg'/></div>       
       </div>
       </div>
       <div className='user-paralax'>
        <div className='newsection'>Lessons Learned</div>
       </div>

       <div className='ddp regards'>
       <p>During this case Study I had an opportunity to connect the dots of the web development cycle from an idea to a product!</p>
       <div className='new-line'></div>
       <p>In the future...</p>
       <div className='new-line'></div>
       <p>I am going to incorporate a blog page to collect my technical and design experience.</p>
       </div>
    </div>
    )
}

export default PortfolioProject
