import React, { useState } from 'react';
import { facebook, insta, linkdin, mail } from '../assets/img/logos';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const response = await fetch('http://localhost:5000/api/contact', {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('home/thebutt/admin.mindfull.co.in/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ success: false, message: data.error || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    // First try standard mailto approach
    window.location.href = 'mailto:marketing@mindfull.co.in';
    
    // Fallback for mobile devices or special cases
    setTimeout(() => {
      if (!document.hidden) {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=marketing@mindfull.co.in', '_blank');
      }
    }, 100);
  };

  return ( <>
  
    <div className="content-desktop-view">

    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/2">
            <div className="mb-12">
              <h2 className="text-4xl text-gray-300 mb-1">Contact Us,</h2>
              <p className="text-5xl text-white mb-10">
                Let's Build your <br /> Digital Legacy.
              </p>
              <p className="text-lg max-w-lg text-gray-600">
                At <span className="text-white">Mindfull,</span> we design with purpose blending creativity and strategy to craft brand identities that resonate.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 content-start items-start">
                
                {/* Call Center */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    {/* Replace with your PNG icon */}
                  
                    <h3 className="text-sm text-white">Call Center</h3>
                  </div>
                  <p className="text-gray-400 text-sm">+917980009725</p>
                  <span className="text-gray-400 text-sm">+918888866365</span>
                </div>
  
                {/* Our Location */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    
                    <h3 className="text-sm text-white">Our Location</h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Ganesham-D. Itt Floor, Unit No. 1,<br />
                    Govind-Yashada Chowk. Pimple<br />
                    Saudagar, Pune 41027
                  </p>
                </div>
  
                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-center">
                 
                    <h3 className="text-sm text-white">Email</h3>
                  </div>
                  <p className="text-gray-400 text-sm">marketing@mindfull.co.in</p>
                </div>
  
                {/* Social Network */}
                <div className="space-y-2">
                  <div className="flex items-center">
                  
                    <h3 className="text-sm text-white">Social Network</h3>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/mindfull-creative-studio/" >
                      <img src={linkdin} alt="" width="30"  />
                    </a>
                    <a href="https://www.facebook.com/share/1AAnudm6Fw/" >
                      <img src={facebook} alt="" width="30"  />
                    </a>
                    <a href="https://www.instagram.com/mindfull.co.in/" >
                      <img src={insta} alt=""  width="30" />
                    </a>
                    <a href="#" className="-mt-1" onClick={handleEmailClick}>
                      <img src={mail} alt=""  width="40" />
                    </a>
                  </div>
                </div>
              </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2 bg-white p-9">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
              <p className="text-gray-600">
                We help you to unleash the power within your business
              </p>
            </div>

            {submitStatus && (
              <div className={`mb-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-1">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-5 text-black block w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-5 block text-black w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b text-black border-gray-900 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-5 mb-10 block w-full border-b text-black border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{ backgroundColor: '#11526B' }}
                className="text-white px-20 py-3 rounded-md transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className="content-mobile-view">

    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row ">
              <h2 className="text-2xl text-gray-400 ">Contact Us,</h2>
              <p className="text-xl text-white mb-1">
                Let's Build your Digital Legacy.
              </p>
              <p className="text-sm max-w-lg text-gray-600 mb-6">
                At <span className="text-white">Mindfull,</span> we design with purpose blending creativity and strategy to craft brand identities that resonate.
              </p>
          {/* Left Column - Contact Info */}
        

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2 bg-white p-9">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
              <p className="text-gray-600">
                We help you to unleash the power within your business
              </p>
            </div>

            {submitStatus && (
              <div className={`mb-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-1">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-5 text-black block w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-5 block text-black w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b text-black border-gray-900 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-5 mb-10 block w-full border-b text-black border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{ backgroundColor: '#11526B' }}
                className="text-white px-20 py-3 rounded-md transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Contactus;