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
    <section className="py-12 sm:py-20 bg-black">
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          <div className="relative px-4 sm:px-6 pb-12 sm:pb-20 pt-16 sm:pt-24 lg:static lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">Get in touch</h2>
              <p className="text-base sm:text-lg leading-8 text-gray-300 mb-8">
                Ready to experience DreamWalk? We'd love to hear from you.
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-600">
                    <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">Our Location</h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-400">
                      University Place Mall<br />
                      575 E University Pkwy<br />
                      Orem, UT 84097
                    </p>
                    <a
                      href="https://maps.app.goo.gl/dxWFTQhSNTtPBhMV9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm sm:text-base text-purple-400 hover:text-purple-300"
                    >
                      <MapPin className="h-4 w-4" />
                      Get Directions
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-600">
                    <Mail className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">Email</h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-400">
                      dreamwalklabs@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
            <form onSubmit={handleSubmit} className="mx-auto max-w-xl lg:mr-0 space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 bg-black/30 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500/30 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-black/30 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500/30 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-black/30 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500/30 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center items-center gap-2 rounded-md bg-purple-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Buy Tickets Button */}
        <div className="mt-12 sm:mt-16 flex justify-center px-4">
          <BuyTicketsButton className="transform hover:scale-125" />
        </div>
      </div>
    </section>
  );
};

export default Contact;