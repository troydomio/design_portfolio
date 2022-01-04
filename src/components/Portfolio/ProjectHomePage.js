import React from 'react'
import ProjectCard from './ProjectCard'
import Hamburger from '../HomePage/Hamburger'
import Nav from '../HomePage/Nav'
import Header from '../HomePage/Header'

const ProjectHomePage = () => {
    return (
        <div>
            <Hamburger/>
            <Nav/>
            <Header/>
            {/* <div className='proj-paral'>
            </div> */}
         <ProjectCard 
         image='https://live.staticflickr.com/65535/51777672854_c3032c1d3f_b.jpg' 
         title = 'Design & Development Portfolio'
         description='Welcome to TroyDomio.me, a responsive development and design portfolio to showcase my latest work.'
         caseurl='/portfolio/portfolio-project'
         code='https://github.com/troydomio/design_portfolio'
         /> 
          <ProjectCard 
          className="one"
         image='https://live.staticflickr.com/65535/51799818378_7898af66da_b.jpg' 
         title = 'Care: Case Study '
         description='A life skills app for developing minds.'
         caseurl='/portfolio/care-project'
         code='https://github.com/troydomio/Care-Project'
         />
        </div>
    )
}

export default ProjectHomePage
