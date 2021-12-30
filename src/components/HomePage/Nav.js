import React from 'react'

const Nav = () => {
    return (
        <nav className="mobile-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="https://drive.google.com/file/d/1GXFuYOXGvEVW9LXBQtJYg9jmokkgVanh/view?usp=sharing" target='_blank'>Resume</a>
            {/* <a href="/blog">Blog</a> */}
            <a href="/portfolio">Projects</a>
        </nav>
    )
}

export default Nav
