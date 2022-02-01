import React from 'react'
import './AboutCards.scss'

const AboutCard3 = ({message}) => {
    return (
        <>
        <div className="card card-3">
            <i className="icons fal fa-home-lg-alt"></i>
            <h3 className="card-title">Home Plants</h3>
            <h4 className="card-message">{message}</h4>

        </div>
    </>
    )
}

export default AboutCard3
