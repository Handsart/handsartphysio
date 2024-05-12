import React from 'react';
import './ContactButtons.css';

const ContactButtons = () => {
    return (
        <div className="contact-buttons">
            <a href="tel:+919205011372" className="call-button">
                Call Now
            </a>
            <a href="https://wa.me/919205011372" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                WhatsApp Now
            </a>
        </div>
    );
}

export default ContactButtons;