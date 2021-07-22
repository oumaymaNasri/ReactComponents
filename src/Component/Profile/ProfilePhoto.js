import React from 'react'
import './ProfilePhoto.css'
import SelfImg from '../../assets/images/myself-image.png';
import Fullname from './Fullname';

export default function ProfilePhoto() {
    return (
        <div>
        <div className="container">
          <div className="top-section">
              <div className="left">
                  <Fullname />
              </div>
            <div className="right">
              <img src={SelfImg} alt="me" />
            </div>
          </div>
        </div>
        </div>
    )
}

 