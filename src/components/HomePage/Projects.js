import React from 'react'
import Cloud from './Cloud'

const Projects = ({images}) => {
    return (
        <div className='projects'>
           <div className='project-text'>My Latest Work</div>
           <div className='project-image'>
            <div className='space'>
                <a href="/portfolio/portfolio-project"><img src="https://live.staticflickr.com/65535/51777661794_004fcd3ee5_b.jpg"></img></a>
            </div>
            <div className='space'>
                <a href="/portfolio/portfolio-project"><img src="https://live.staticflickr.com/65535/51777841250_e890175812_b.jpg"></img></a>
            </div>
            <div className='space-last'>
                <a href="/portfolio/portfolio-project"><img src="https://live.staticflickr.com/65535/51777841250_e890175812_b.jpg"></img></a>
            </div>
          </div>
          <Cloud/>
        </div>
    )
}

export default Projects
