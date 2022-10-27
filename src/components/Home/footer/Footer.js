import React from 'react'
import {RiAppleFill} from 'react-icons/ri'
import {FaGooglePlay} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="company-info">
          <div className="column">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
          <div className="column">
            <h3>Support</h3>
            <p>Help Center</p>
            <p>Safety Center</p>
          </div>
          <div className="column">
          <h3>Legal</h3>
            <p>Cookies Policy</p>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
            <p>Dispute resolution</p>
          </div>
          <div className="column install">
            <h3>Install App</h3>
            <div className="btn-container install-btn">
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
        </div>

        <hr />
        <div className="company-sign">
          <p>{`@${new Date().getFullYear()} Lilies. All rights reserved`}</p>
          <div className="socail-icons">
            <span><AiOutlineInstagram /></span>
            <span><AiFillTwitterCircle /></span>
            <span><AiFillYoutube /></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer