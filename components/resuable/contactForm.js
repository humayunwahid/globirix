'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    saveInfo: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/forms/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage('Thank you! Your message has been sent successfully.')
        setFormData({ name: '', phone: '', email: '', subject: '', message: '', saveInfo: false })
      } else {
        setMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {message && (
        <div className={`alert ${message.includes('Thank you') ? 'alert-success' : 'alert-error'} mb-20`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="form-comment style-3">
        <div className="cols mb-20">
          <fieldset>
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </fieldset>
          <fieldset>
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </fieldset>
        </div>
        <div className="cols mb-20">
          <fieldset>
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </fieldset>
          <fieldset>
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </fieldset>
        </div>
        <div className="cols mb-20">
          <fieldset>
            <textarea 
              name="message"
              placeholder="Message" 
              value={formData.message}
              onChange={handleChange}
              required
            />
          </fieldset>
        </div>
        <div className="checkbox-item mb-30">
          <label>
            <span className="text">Save my name, email, and website in this browser for the next time I comment.</span>
            <input 
              type="checkbox" 
              name="saveInfo"
              className="checkbox-item" 
              checked={formData.saveInfo}
              onChange={handleChange}
            />
            <span className="btn-checkbox" />
          </label>
        </div>
        <div className="bot">
          <button 
            type="submit" 
            className="tf-btn text-anime-style-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message Us'}
            <i className="icon-chevron-right" />
          </button>
        </div>
      </form>
    </>
  )
}