'use client'
import { useState } from 'react'

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/forms/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage('Thank you! Your consultation request has been submitted.')
        setFormData({ fullName: '', email: '', subject: '', message: '' })
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
      <form onSubmit={handleSubmit} className="form-contact bg-transparent style-3">
        <div className="cols mb-10">
          <fieldset>
            <input 
              type="text" 
              name="fullName"
              placeholder="Full Name" 
              value={formData.fullName}
              onChange={handleChange}
              required 
            />
          </fieldset>
        </div>
        <div className="cols mb-10">
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
        </div>
        <div className="cols mb-10">
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
        <div className="cols mb-10">
          <fieldset>
            <textarea
              name="message"
              className="h-100px"
              placeholder="Write message"
              value={formData.message}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <button 
          type="submit" 
          className="tf-btn full text-anime-style-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Get Consultation'}
          <i className="icon-chevron-right" />
        </button>
      </form>
    </>
  )
}