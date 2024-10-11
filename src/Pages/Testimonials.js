import React from 'react';
import './Testimonials.css'; // Ensure to have this CSS file
import PersonIcon from '@mui/icons-material/Person'; // Import the Person icon

const testimonialsData = [
    {
      name: "Nikita Sharma",
      review: "I am writing to express my sincere gratitude to Dr. Tauseef for the exceptional care and treatment I received for my slip disc condition. His expertise and compassionate approach have been invaluable in managing my pain and helping me regain mobility. I highly recommend him to anyone in need of physiotherapy.",
      rating: 5
    },
    {
      name: "Irfan Ahmad",
      review: "Dr. Tauseef's treatment has made a significant difference in my recovery from knee surgery. He takes the time to explain each exercise and ensures I feel comfortable throughout the process. His dedication to his patients is truly commendable.",
      rating: 5
    },
    {
      name: "Anjali Singh",
      review: "After my sports injury, I was struggling to get back to my routine. Thanks to Dr. Tauseef’s personalized treatment plan and ongoing support, I'm back on the field stronger than ever. He is knowledgeable, friendly, and genuinely cares about his patients.",
      rating: 5
    },
    {
      name: "Zeeshan Khan",
      review: "Dr. Tauseef has been a lifesaver for my chronic back pain. His holistic approach to treatment, coupled with his warm demeanor, makes every visit a positive experience. I cannot thank him enough for the relief I’ve found under his care.",
      rating: 5
    },
    {
      name: "Riya Gupta",
      review: "I had been experiencing severe neck pain for months, and I finally decided to see Dr. Tauseef. His thorough assessment and effective treatment plan have made a world of difference. I am now able to move freely without pain, and I am incredibly grateful.",
      rating: 5
    }
  ];  

  const Testimonials = () => {
    return (
      <section className="testimonials-section">
        <h2>Patient Testimonials</h2>
        <p>Our Patient-centric approach to Physiotherapy services is duly validated by reviews from patients across clinic care, home care, and digital rehab settings.</p>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="testimonial-header">
                <div className="testimonial-stars">
                  {Array(testimonial.rating).fill('⭐️').map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                </div>
                <h4 className="testimonial-name">
                  <PersonIcon style={{ verticalAlign: 'middle'}} /> {/* Icon added */}
                  {testimonial.name}
                </h4>
              </div>
              <p>{testimonial.review}</p>
            </div>
          ))}
          <div className="testimonial-item all-reviews">
            <div className="all-reviews-button">
              <a href="/reviews" className="all-reviews-link">All reviews</a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  