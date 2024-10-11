import React, { useState } from 'react';
import './BookAppointmentForm.css';
import emailjs from 'emailjs-com'; // Import EmailJS

const citiesInIndia = [
    "East Delhi", "North Delhi", "South Delhi", "West Delhi", "Noida", "Ghaziabad", "Greater Noida", "Gurugram", "Faridabad",
];

const BookAppointmentForm = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [submitted, setSubmitted] = useState(false); // Track submission status

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const templateParams = {
            name: name,
            mobile: mobile,
            city: city,
            to_name: "Recipient Name", // You can customize this
            message: "You have a new appointment request.", // Custom message content
        };

        emailjs.send('service_dudb7jb', 'template_oofclcq', templateParams, 'yHoPgARZBY0lQXcop') // Replace with your User ID
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                setSubmitted(true); // Update submission status
            }, (error) => {
                console.error('Failed to send email:', error);
            });
    };

    return (
        <div className="book-appointment-form">
            <h2 className='Book-Appointment-header'>Book Appointment</h2>
            {submitted ? (
                <p>Your appointment request has been submitted successfully!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number:</label>
                        <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Select Your City:</label>
                        <select value={city} onChange={(e) => setCity(e.target.value)} required>
                            <option value="">Select City</option>
                            {citiesInIndia.map((cityOption, index) => (
                                <option key={index} value={cityOption}>
                                    {cityOption}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* <div className="form-group">
                        <label>Proper Address:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Your Problem:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div> */}

                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={() => setTermsAccepted(!termsAccepted)}
                                required
                            />
                            I accept the terms and conditions
                        </label>
                    </div>
                    <div className="button-container">
                        <button className='Book-Now-button' type="submit">Book Appointment</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default BookAppointmentForm;
