// src/components/Contact.js
import React from 'react';
import '../App.css';
import ParallaxCard from '../components/ParallaxCard';
import ReactImage from '../assets/React_images.png';
import Flutter from '../assets/flutter_image.jpeg'
import Laravel from '../assets/Laravel.jpeg'
function Contact() {
  return (
    <div className="contact-container">
      <h2 style={{ color: 'white' }}>Contact Page</h2><br />
      <ParallaxCard 
        title="React" 
        // description="Card description goes here." 
        imageSrc={ReactImage} // Use the unique name for the image
      />
      <ParallaxCard 
        title="Flutter" 
        // description="Card description goes here." 
        imageSrc={Flutter} // Replace with your image path
      />
      <ParallaxCard 
        title="Laravel" 
        // description="Card description goes here." 
        imageSrc={Laravel} // Replace with your image path
      />
    
    </div>
  );
}

export default Contact;
