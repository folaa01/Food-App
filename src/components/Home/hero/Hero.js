import React from 'react'
import {RiAppleFill} from 'react-icons/ri'
import {FaGooglePlay} from 'react-icons/fa'
import heroImage from '../../../assets/home/hero1.svg'
import './hero.css'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-content">
            <h1>Order <span>food</span> anytime, <br /> anywhere</h1>
            <p className='intro'>Browse from our list of specials to place your order and have food <br /> delivered to you in no time. Affordable, tasty and fast!</p>
            <div className="btn-container">
                <div className="google-btn">
                    <span className='google-img'><FaGooglePlay size={'2rem'} /></span>
                    <div>
                        <small>GET IT ON</small>
                        <p>Google Play</p>
                    </div>
                </div>
                <div className="apple-btn">
                    <span className='apple-img'><RiAppleFill size={'2rem'} /></span>
                    <div>
                        <small>Download on the</small>
                        <p>App Store</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero-image-container">
            <img src={heroImage} alt="" className="hero-img" />
        </div>
    </section>
  )
}

export default Hero