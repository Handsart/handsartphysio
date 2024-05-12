import React from "react";
import headering from '../Assets/i17rc.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import BookAppointmentForm from '../Component/booking/BookAppointmentForm';


const Home = ()=>{
    return(
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                        {/* <h5>We Provide All Health Care Solution</h5> */}
                        <h2>Physiotherapy At Home</h2>
                        <h4>Book Your Session Now</h4>
                        {/* <h4>Prioritize Your Health And Well-Being With Our Expert Physio Care</h4> */}
                        {/* <button><a href='#'>Read More</a></button> */}
                        {/* <span>+</span> */}
                        <BookAppointmentForm />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header-box">
                    <img src={headering} alt="Header" />
                            <FontAwesomeIcon icon={faSquare}/>

                            {/* Render the BookAppointmentForm component */}
                            
                        </div>
                    </div>
                    {/* <div className='col-lg-6 col-md-6'>
                        <div className="header-box">
                            <img src={headering}/>
                            <FontAwesomeIcon icon={faSquare}/>
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Home;