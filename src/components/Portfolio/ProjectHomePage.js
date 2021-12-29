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
         code='/code'
         /> 
          {/* <ProjectCard 
         image='https://images.unsplash.com/photo-1610047803562-7260ebe516cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' 
         title = 'Title'
         description='dsdfnksdfnskjnfskjnfjnjkndaksjndakjndakjdnajndakjndakjdnakdjnakdjnasdjkaskdjnakjncsjcnzkjc'
         caseurl='/portfolio/portfolio-project'
         code='/code'
         /> */}
        </div>
    )
}

export default ProjectHomePage
