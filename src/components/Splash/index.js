import React from 'react';
import sample from './sample.mp4';
import './style.css';

function Splash() {
    return (
        <>  
            <div className="splash-container">
                <video className="background-video" autoPlay loop muted>
                    <source src={sample} type="video/mp4" />
                    
                </video>
                <div className="text-focus-in">hello</div>
                <div className="text-focus-in-2">my name is steve rogers</div>
                <div className="text-focus-in-3">let's take a tour</div>
                <div class="arrow bounce">
                    <a class="fa fa-arrow-down fa-2x" href="#"></a>
                </div>
            </div>
        </>
    )
}

export default Splash;