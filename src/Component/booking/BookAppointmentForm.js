import React, { useState } from 'react';
import './BookAppointmentForm.css';

const citiesInIndia = [
    "Noida", "Delhi NCR",
    // Add more cities
];

const BookAppointmentForm = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="book-appointment-form">
            <h2>Book Appointment</h2>
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
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookAppointmentForm;
