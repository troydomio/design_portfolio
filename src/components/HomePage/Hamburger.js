import React from 'react'

const Hamburger = () => {

    const handleClick = () => {
        document.querySelector('.mobile-nav').classList.toggle('is-active')
        document.querySelector('.hamburger').classList.toggle('is-active')
    }
    return (
        <div className="hamburger_container">
            <button className="hamburger" onClick={handleClick}>
                <div className="bar"></div>
            </button>
        </div>
    )
}
export default Hamburger