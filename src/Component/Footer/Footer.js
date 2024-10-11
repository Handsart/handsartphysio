import React from "react";
import footerlogo from '../../Assets/logoHanstart.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../Assets/fb.png';
import twitter from '../../Assets/tw.png';
import instagram from '../../Assets/ins.png';
import linkedIn from '../../Assets/linkedin.png';
import youtubeIcon from '../../Assets/yt.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <img src={footerlogo} title="footer-logo" className="footerlogo" />
                        <p className="footer-paragraph">
                            We're a team of physiotherapists specialized in different disciplines of physiotherapy, including orthopedic, sports, and neurology.
                            <br /> Our comprehensive services include chiropractic, physiotherapy, and orthotics support.
                        </p>

                        <div className="footer-contact">
                            <a href="tel:+919711841779" className="footer-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </a>
                            <div className="footer-text">
                                <h6>Contact Us</h6>
                                <h4>(+91) 9711841779</h4>
                            </div>
                        </div>

                        <div className="footer-contact">
                            <a href="mailto:handsartphysio@gmail.com" className="footer-icon">
                                <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                            </a>
                            <div className="footer-text">
                                <h6>Email</h6>
                                <h4>handsartphysio@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>Treatments available For</h2>
                        <ul>
                            <li><a href="#">Cervical</a></li>
                            <li><a href="#">Any Back Pain</a></li>
                            <li><a href="#">Stroke</a></li>
                            <li><a href="#">Bells Palsy</a></li>
                            <li><a href="#">Post THR/TKR</a></li>
                            <li><a href="#">Post Fracture</a></li>
                            <li><a href="#">Sprain/Strain Injury</a></li>
                            <li><a href="#">ACL Tear</a></li>
                            <li><a href="#">Frozen Shoulder</a></li>
                            <li><a href="#">Headache/Vertigo</a></li>
                            <li><a href="#">Chronic Knee Pain</a></li>
                            <li><a href="#">Ankle Foot Problems</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>Techniques</h2>
                        <ul>
                            <li><a href="#">Manual Therapy</a></li>
                            <li><a href="#">Osteopathy</a></li>
                            <li><a href="#">K-Tapping</a></li>
                            <li><a href="#">Cupping/Dry Needling</a></li>
                            <li><a href="#">Chiropractic Adjustment</a></li>
                            <li><a href="#">Lymphatic Drainage</a></li>
                            <li><a href="#">Acupuncture</a></li>
                            <li><a href="#">Psychological Counseling</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>Subscribe</h2>
                        <form>
                            <input type="email" placeholder="Enter your email" />
                            <button className="Subscribe-now-button" type="submit">Subscribe now</button>
                        </form>

                        <ul className="social">
                            <li><a href="https://www.facebook.com/profile.php?id=61559122726448"><img src={facebook} /></a></li>
                            <li><a href="https://www.instagram.com/handsartphysio?igsh=dXduOXF4ZDVhdHl5"><img src={twitter} /></a></li>
                            <li><a href="https://www.instagram.com/handsartphysio?igsh=dXduOXF4ZDVhdHl5"><img src={instagram} /></a></li>
                            <li><a href="https://www.linkedin.com/in/dr-tauseef-pt/"><img src={linkedIn} /></a></li>
                            <li><a href="https://www.youtube.com/@handsartphysio"><img src={youtubeIcon} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
