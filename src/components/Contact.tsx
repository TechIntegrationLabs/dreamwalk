import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, ExternalLink } from 'lucide-react';
import emailjs from 'emailjs-com';
import BuyTicketsButton from './BuyTicketsButton';

const Contact = () => {
  useEffect(() => {
    emailjs.init("8K5eBfHC9PsMWbwTt");
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      await emailjs.send(
        'service_xfkbsj5',
        'template_w2xmr7f',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'dreamwalklabs@gmail.com'
        }
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/place/University+Place+Mall/@40.2769,-111.6608,17z', '_blank');
  };

  return (
    <section className="py-20 bg-black" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-400 mb-8">
              Have questions about DreamWalk Park? We're here to help make
              your visit magical. Reach out to us through any of these channels.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">info@dreamwalk.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">University Place Mall<br />575 E University Pkwy<br />Orem, UT 84097</p>
                  <button
                    onClick={handleGetDirections}
                    className="mt-4 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 ease-in-out w-64"
                  >
                    <MapPin className="w-6 h-6" />
                    Get Directions
                    <ExternalLink className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white rounded-lg py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white rounded-lg py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-gray-800 text-white rounded-lg py-3 px-4 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className={`w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:opacity-90 transition-opacity flex items-center justify-center ${
                  submitStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-4 h-4 mr-2" />
                {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
        {/* Bottom Buy Tickets Button */}
        <div className="mt-16 flex justify-center">
          <BuyTicketsButton className="transform hover:scale-125" />
        </div>
      </div>
    </section>
  );
};

export default Contact;