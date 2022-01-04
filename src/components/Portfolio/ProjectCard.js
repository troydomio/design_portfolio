import React from 'react'
import Footer from '../HomePage/Footer'

const ProjectCard = ({image, description,title,caseurl,code}) => {
    return (
        <>
        <div className='proj-card'>
            <div>
             <div className='proj-title'>{title}</div>
             <div className='proj-desc'>{description}</div>
             </div>
             <div>
             <a href="/portfolio/portfolio-project"><img src={image}/></a>
             <p>React | JavaScript | HTML | CSS | Figma</p>      
                <div className='flex'>
                <div><a href={caseurl}>Case Study</a></div>
                <div ><a href={code}>View Code</a></div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ProjectCard
