import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
          ...formData,
          [name]: value
        })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
      }

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-title">
            <p>Contact</p>
        </div>
        <div className="form-group">
          {/* <label htmlFor="name">Name</label> */}
          <input 
            type="text" 
            id="name" 
            name="name"
            placeholder='Name' 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder='Email'
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="message">Message</label> */}
          <textarea 
            id="message" 
            name="message" 
            placeholder='Massage'
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact