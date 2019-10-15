import React from 'react';
import sample from './sample.mp4';
import './style.css';

function Splash() {
    return (
        <video className="background-video" width="100%" autoPlay loop muted>
            <source src={sample} type="video/mp4" />
        </video>
    )
}

export default Splash;