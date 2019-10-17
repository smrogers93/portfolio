import React, {Component} from 'react';
import sample from './sample.mp4';
import scrollSnapPolyfill from 'css-scroll-snap-polyfill';
import './style.css';

class Splash extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const gra = function(min, max) {
            return Math.random() * (max - min) + min;
        }
        const init = function(){
            let items = document.querySelectorAll('section');
        
            scrollSnapPolyfill()
        }
        }   


    render() {
        return (
            <>  
                <div className="placeholder">
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
                <div className="section">
                    <h1>Section One</h1>
                </div>
                <div className="section">
                    <h1>Section Two</h1>
                </div>
                <div className="section">
                    <h1>Section Three</h1>
                </div>
                </div>
            </>
        )
    }
    
}



export default Splash;