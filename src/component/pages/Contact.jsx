import React, { useState } from 'react'
import '../../style/style.css'
// import supabase from '../../config/supabaseClient'
function Contact() {
  return (
    <div className='contact-back py-5'>
  <div className="container">
    <div className="row g-4">
      {/* Contact Info Box */}
      <div className="col-lg-5 col-md-6">
        <div className="box2 p-4 p-lg-5 h-100 bg-light rounded">
          <h3 className="mb-4">Contact Info</h3>
          <p className='para mb-4'>
            Get in touch with us to learn more about our restaurant, make a reservation, or place an order. 
            We'd love to hear from you!
          </p>
          
          <div className="contact-details">
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-envelope me-3 mt-1"></i>
              <p className="mb-0">demo@lorem.com</p>
            </div>
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-telephone me-3 mt-1"></i>
              <p className="mb-0">+1 500 000 0000</p>
            </div>
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-globe me-3 mt-1"></i>
              <p className="mb-0">http://demo.com</p>
            </div>
            <div className="d-flex align-items-start">
              <i className="bi bi-geo-alt me-3 mt-1"></i>
              <p className="mb-0">Street 238,52 tempor Donec ultricies mattis nulla, suscipit risus tristique ut.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Box */}
      <div className="col-lg-7 col-md-6">
        <div className="box3 p-4 p-lg-5 bg-white rounded shadow-sm">
          <h3 className="mb-4">Get in touch</h3>
          <p className="mb-4">
            Want to get in touch? We'd love to chat with you about our menu, events, or anything else on your mind. 
            Send us a message or give us a call - we can't wait to hear from you!
          </p>
          
          <form action="">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name"
                // onChange={(e)=>setName(e.target.value)}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email"
                // onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                name="message" 
                rows="4"
                // onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-danger w-100 py-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Contact