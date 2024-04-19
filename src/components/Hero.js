import React from 'react'
import './hero.css'
import therapy from '../photos/13.jpg'
import therapy1 from '../photos/12.jpg'
import therapy2 from '../photos/14.jpg'
const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <div className='left'>
                    <h1>We are here for you!</h1>
                    <p>Get help you need with us, we offer therapy sessions online. In only one click you can have somebody to help you stay sane.
                     </p>
                     <button>Why choose us?</button>
                </div>
                <div className='right'>
                    <div className='top-image'>
                        <img src={therapy} alt='therapy' />
                    </div>
                    <div className='bottom-images'>
                        <div className='left-image'>
                            <img src={therapy1} alt="therapy1" />
                        </div>
                        <div className='right-image'>
                            <img src={therapy2} alt="therapy2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero