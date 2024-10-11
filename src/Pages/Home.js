import React, { useState, useEffect } from "react";
import i1 from '../Assets/i19.jpeg';
import i2 from '../Assets/i20.jpeg';
import i3 from '../Assets/r3.png';
import i4 from '../Assets/r4.png';
import i5 from '../Assets/r5.png';
import i6 from '../Assets/r6.png';
import i7 from '../Assets/i21.jpeg';
import i8 from '../Assets/i22.jpeg';
import i10 from '../Assets/i24.jpeg';
import i11 from '../Assets/i25.jpeg';
import i12 from '../Assets/i26.jpeg';
import facebookIcon from '../Assets/fbr.png';
import twitterIcon from '../Assets/twr.png';
import instagramIcon from '../Assets/insr.png';
import linkedInIcon from '../Assets/linkedin.png';
import youtubeIcon from '../Assets/yt.png';

import physicalTherapy from '../Assets/Physical_Therapy.jpg';
import neckAndBackPain from '../Assets/Neck_and_Back_Pain.jpg';
import sportsInjuryRehab from '../Assets/Sports_Injury_Rehab.jpg';
import neurologicalRehab from '../Assets/Neurological_Rehab_and_Paralysis.jpg';
import headaches from '../Assets/Headaches_and_Migraines.jpeg';
import stressDisorders from '../Assets/Stress_and_Sleep_Disorders.jpg';
import osteopathy from '../Assets/Osteopathy.jpg';
import craniosacralTherapy from '../Assets/Craniosacral_Therapy.jpg';
import chiropractic from '../Assets/Chiropractic.jpg';
import acupuncture from '../Assets/Acupuncture_and_Dry_Needling.jpg';
import weightLoss from '../Assets/Weight_Loss_and_Systemic_illness.jpg';
import PhoneIcon from '@mui/icons-material/Phone';

import './Home.css';
import BookAppointmentForm from '../Component/booking/BookAppointmentForm';
import Testimonials from './Testimonials'; // Import your Testimonials component

const images = [i1, i2, i3, i4, i5, i6, i7, i8, i10, i11, i12]; 

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Define links for each service
  const serviceLinks = {
    sportsInjuryRehab: "",
    neurologicalRehab: "",
    physicalTherapy: "",
    neckAndBackPain: "",
    headaches: "",
    stressDisorders: "",
    osteopathy: "",
    craniosacralTherapy: "",
    chiropractic: "",
    acupuncture: "",
    weightLoss: "",
  };

  // Video data
  const videoLinks = [
    "https://www.instagram.com/reel/DA-R6YqJRHW/embed",
    "https://www.instagram.com/reel/DAxkospJ3ub/embed",
    "https://www.instagram.com/reel/DA0AX_1JaeW/embed"
  ];

  return (
    <header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-6'>
            <h2 className="Physiotherapy-At-Home-header">Physiotherapy At Home</h2>
            <h4>Book Your Session Now</h4>
            <BookAppointmentForm />
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="image-container">
              <img src={images[currentImageIndex]} alt="Header" className="styled-image" />
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="video-section">
          <h3>Check Out Our Handsart Videos</h3>
          <div className="video-grid">
            {videoLinks.map((link, index) => (
              <iframe 
                key={index}
                src={link} 
                width="320" 
                height="400" 
                frameBorder="0" 
                scrolling="no" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
                title={`Instagram Reel ${index + 1}`}
              ></iframe>
            ))}
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="follow-us-section">
          <h3>Follow us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61559122726448"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="https://www.instagram.com/handsartphysio?igsh=dXduOXF4ZDVhdHl5"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="https://www.instagram.com/handsartphysio?igsh=dXduOXF4ZDVhdHl5"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/dr-tauseef-pt/"><img src={linkedInIcon} alt="LinkedIn" /></a>
            <a href="https://www.youtube.com/@handsartphysio"><img src={youtubeIcon} alt="YouTube" /></a>
          </div>
        </div>

        {/* Physiotherapy Services Section */}
        <div className="services-section">
          <h2>Physiotherapy for Today's Lifestyle</h2>
          <p>We Have All Your Needs Covered</p>
          <div className="services-grid">
            <div className="service-item">
              <a href={serviceLinks.sportsInjuryRehab}>
              <img src={sportsInjuryRehab} alt="Sports Injury Rehab" />
              <p>Sports Injury Rehab</p>
              </a>
            </div>
            <div className="service-item">
              <a href={serviceLinks.sportsInjuryRehab}>
              <img src={neurologicalRehab} alt="Neurological Rehab and Paralysis" />
              <p>Neurological Rehab and Paralysis</p>
              </a>
            </div>
            <div className="service-item">
            <a href={serviceLinks.sportsInjuryRehab}>
              <img src={physicalTherapy} alt="Physical Therapy" />
              <p>Physical Therapy</p>
              </a>
            </div>
            <div className="service-item">
            <a href={serviceLinks.sportsInjuryRehab}>
              <img src={neckAndBackPain} alt="Neck and Back Pain" />
              <p>Neck and Back Pain</p>
              </a>
            </div>
            <div className="service-item">
            <a href={serviceLinks.sportsInjuryRehab}>
              <img src={headaches} alt="Headaches and Migraines" />
              <p>Headaches and Migraines</p>
              </a>
            </div>
            <div className="service-item">
            <a href={serviceLinks.sportsInjuryRehab}>
              <img src={stressDisorders} alt="Stress and Sleep Disorders" />
              <p>Stress and Sleep Disorders</p>
              </a>
            </div>
            <div className="service-item">
            <a href={serviceLinks.sportsInjuryRehab}>
              <img src={osteopathy} alt="Osteopathy" />
              <p>Osteopathy</p>
              </a>
            </div>
            <div className="service-item">
            <a href={serviceLinks.sportsInjuryRehab}>
              <img src={craniosacralTherapy} alt="Craniosacral Therapy" />
              <p>Craniosacral Therapy</p>
              </a>
            </div>
            <div className="service-item">
            <a href={serviceLinks.sportsInjuryRehab}>
              <img src={chiropractic} alt="Chiropractice" />
              <p>Chiropractice</p>
              </a>
            </div>
            <div className="service-item">
            <a href={serviceLinks.sportsInjuryRehab}>
              <img src={acupuncture} alt="Acupuncture and Dry Needling" />
              <p>Acupuncture and Dry Needling</p>
              </a>
            </div>
            <div className="service-item">
            <a href={serviceLinks.sportsInjuryRehab}>
              <img src={weightLoss} alt="Weight Loss and Systemic Illness" />
              <p>Weight Loss and Systemic Illness</p>
              </a>
            </div>
            <div className="contact-item">
              <a href="tel:+919711841779">
                <PhoneIcon className="phone-icon" fontSize="large" />
              </a>
              <p className="enquiry-text">FOR ENQUIRY</p>
              <a href="tel:+919711841779" className="enquiry-number">
                +91- 9711841779
              </a>
            </div>
          </div>
        </div>

        <Testimonials /> {/* Place the testimonials section here */}

        <div className="book-appointment-container">
          <a href="#" className="book-appointment-button">Book an Appointment</a>
        </div>
      </div>
    </header>
  );
};

export default Home;
