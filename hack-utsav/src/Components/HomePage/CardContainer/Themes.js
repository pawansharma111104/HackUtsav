import React from 'react';
import './Theme.css';
import Cards from './Cards';
// import Themes1 from '../assets/Themes1.png';


function Themes() {
  return (
    <>
      <div className="Theme">
        <div className="theme-container">
          <Cards 
            title="Zero Hunger & Good Health"
            imgSrc="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505618/phwvrmfgkztnnckdioba.gif"
            alt="Health theme illustration"
          />
          <Cards 
            title="Quality Education"
            imgSrc="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505660/mp75oezrzvrz0p2i4ja3.gif"
            alt="Education theme illustration"
          />
          <Cards 
            title="Clean Water & Clean Energy"
            imgSrc="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505532/djkq5oys2gqucrsmlcl4.gif"
            alt="Sustainability theme illustration"
          />
          <Cards 
            title="Sustainable Cities & Climate Action"
            imgSrc="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505532/djkq5oys2gqucrsmlcl4.gif"
            alt="Climate action theme illustration"
          />
          <Cards 
            title="Peace, Justice & Partnerships"
            imgSrc="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505777/mtp5ccau42dcywfb4ilp.png"
            alt="Law and policy theme illustration"
          />
          <Cards 
            title="Student Innovation"
            imgSrc="https://res.cloudinary.com/ddznylzdr/image/upload/v1726505827/yq0yd2dvwcz0jm0eyabv.png"
            alt="Student Innovation"
          />
        </div>
      </div>
{/*       
      <div className="theme-page-container">
        <img src={Themes1} alt="Homepage preview" className="Theme-page" />
      </div> */}
    </>
  );
}

export default Themes;