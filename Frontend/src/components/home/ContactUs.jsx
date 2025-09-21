import { useState, useEffect } from 'react';

const ContactUs = () => {
  const [formData, setFormData] =useState({
    name: '',
    email: '',
    phone: '',
    subject:'',
    message:''
  });

  const [formErrors, setFormErrors] =useState({});
  const [isSubmitting, setIsSubmitting] =useState(false);
  const [submitStatus, setSubmitStatus] =useState(null);
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleFocus = (field) => {
    setFocused(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur =(field) => {
    setFocused(prev =>({
      ...prev,
      [field]: false
    }));
    
    // Validate on blur
    validateField(field, formData[field]);
  };

  const validateField = (field, value) => {
    let error = null;
    
    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (value.trim() && !/^[0-9]{10}$/i.test(value.replace(/[^0-9]/g, ''))) {
          error = 'Please enter a valid 10-digit phone number';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
      default:
        break;
    }
    
    setFormErrors(prev => ({
      ...prev,
      [field]: error
    }));
    
    return error === null;
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    
    Object.keys(formData).forEach(field => {
      if (field === 'name' || field === 'email' || field === 'message') {
        const fieldIsValid = validateField(field, formData[field]);
        if (!fieldIsValid) {
          isValid = false;
        }
      }
    });
    
    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('pending');
    
    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Uncomment below for actual API integration
      /*
      const response = await fetch('/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      */
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll into view when there are errors
  useEffect(() => {
    if (Object.keys(formErrors).some(key => formErrors[key])) {
      const errorField = document.querySelector('.error-message');
      if (errorField) {
        errorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [formErrors]);

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 border-t-4 border-black">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#103d01]">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6 text-[#017979]">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#017979] p-2 rounded-full text-white mr-4 flex items-center justify-center w-10 h-10 min-w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-gray-600 mt-1">Dr. D Y Patil Institute of Technology, Pimpri, Pune - 411018</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#017979] p-2 rounded-full text-white mr-4 flex items-center justify-center w-10 h-10 min-w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-600 mt-1">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#017979] p-2 rounded-full text-white mr-4 flex items-center justify-center w-10 h-10 min-w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-600 mt-1">sportclub@dypvp.edu.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#017979] p-2 rounded-full text-white mr-4 flex items-center justify-center w-10 h-10 min-w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Operating Hours</h4>
                  <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-full w-9 h-9 flex items-center justify-center text-white">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 transition-colors rounded-full w-9 h-9 flex items-center justify-center text-white">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="bg-red-600 hover:bg-red-700 transition-colors rounded-full w-9 h-9 flex items-center justify-center text-white">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                  </svg>
                </a>
                <a href="#" className="bg-pink-600 hover:bg-pink-700 transition-colors rounded-full w-9 h-9 flex items-center justify-center text-white">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-[#017979]">Send us a message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Your message has been sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>There was an error sending your message. Please try again later.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label 
                    htmlFor="name" 
                    className={`absolute transition-all duration-300 ${
                      focused.name || formData.name 
                        ? '-top-2.5 left-2 text-sm bg-white px-1 text-[#017979]' 
                        : 'top-3 left-3 text-gray-500'
                    }`}
                  >
                    Your Name*
                  </label>
                  <input 
                    type="text" 
                    className={`w-full border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 pt-3 focus:outline-none focus:ring-2 focus:ring-[#017979] transition-all duration-300`}
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    required 
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1 error-message">{formErrors.name}</p>
                  )}
                </div>
                
                <div className="relative">
                  <label 
                    htmlFor="email" 
                    className={`absolute transition-all duration-300 ${
                      focused.email || formData.email 
                        ? '-top-2.5 left-2 text-sm bg-white px-1 text-[#017979]' 
                        : 'top-3 left-3 text-gray-500'
                    }`}
                  >
                    Email Address*
                  </label>
                  <input 
                    type="email" 
                    className={`w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 pt-3 focus:outline-none focus:ring-2 focus:ring-[#017979] transition-all duration-300`}
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required 
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1 error-message">{formErrors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label 
                    htmlFor="phone" 
                    className={`absolute transition-all duration-300 ${
                      focused.phone || formData.phone 
                        ? '-top-2.5 left-2 text-sm bg-white px-1 text-[#017979]' 
                        : 'top-3 left-3 text-gray-500'
                    }`}
                  >
                    Phone Number (Optional)
                  </label>
                  <input 
                    type="tel" 
                    className={`w-full border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 pt-3 focus:outline-none focus:ring-2 focus:ring-[#017979] transition-all duration-300`}
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1 error-message">{formErrors.phone}</p>
                  )}
                </div>
                
                <div className="relative">
                  <label 
                    htmlFor="subject" 
                    className={`absolute transition-all duration-300 ${
                      focused.subject || formData.subject 
                        ? '-top-2.5 left-2 text-sm bg-white px-1 text-[#017979]' 
                        : 'top-3 left-3 text-gray-500'
                    }`}
                  >
                    Subject (Optional)
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md p-3 pt-3 focus:outline-none focus:ring-2 focus:ring-[#017979] transition-all duration-300"
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={() => handleBlur('subject')}
                  />
                </div>
              </div>
              
              <div className="relative">
                <label 
                  htmlFor="message" 
                  className={`absolute transition-all duration-300 ${
                    focused.message || formData.message 
                      ? '-top-2.5 left-2 text-sm bg-white px-1 text-[#017979]' 
                      : 'top-3 left-3 text-gray-500'
                  }`}
                >
                  Your Message*
                </label>
                <textarea 
                  className={`w-full border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 pt-3 focus:outline-none focus:ring-2 focus:ring-[#017979] transition-all duration-300`}
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  required
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1 error-message">{formErrors.message}</p>
                )}
              </div>
              
              <div className="flex items-center">
                <button 
                  type="submit" 
                  className={`px-6 py-3 bg-[#017979] text-white rounded-md font-semibold transition-all duration-300 flex items-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#015a5a]'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
