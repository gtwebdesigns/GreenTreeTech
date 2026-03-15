import React, { useState } from 'react';
import { MapPin, Clock, ShieldCheck, CheckCircle2, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID
      const response = await fetch('https://formspree.io/f/mykndeok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-zinc-400">Get in touch for a free diagnostic or service request.</p>
        <div className="w-60 h-1 bg-brand-green mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
          
          {status === 'success' ? (
            <div className="bg-brand-green/10 border border-brand-green/20 p-8 rounded-2xl text-center animate-in fade-in zoom-in duration-300">
              <CheckCircle2 className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-zinc-400 mb-6">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-brand-green font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-400 text-sm mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" 
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                ></textarea>
              </div>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again or contact us directly.</p>
              )}

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-brand-green hover:bg-brand-green/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all flex items-center justify-center space-x-2"
              >
                {status === 'submitting' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Request</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-zinc-500 text-center">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </form>
          )}
        </div>

        <div className="space-y-8">
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-6">Office Info</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-brand-green mr-4 mt-1" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-zinc-400 text-sm">Los Angeles, CA USA</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-brand-green mr-4 mt-1" />
                <div>
                  <p className="text-white font-semibold">Hours</p>
                  <p className="text-zinc-400 text-sm">By Appointment Only</p>
                  <p className="text-zinc-500 text-xs mt-1">Closed Sundays, Wednesdays and Major Holidays</p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="text-brand-green mr-4 mt-1" />
                <div>
                  <p className="text-white font-semibold">Diagnostics</p>
                  <p className="text-zinc-400 text-sm">Free initial diagnostics for all new clients.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-green/10 p-8 rounded-3xl border border-brand-green/20 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Find Us on Yelp</h3>
            <p className="text-zinc-400 text-sm mb-6">Check out our reviews and see why clients trust GreenTree Technology.</p>
            <a 
              href="https://www.yelp.com/biz/greentree-technology-los-angeles-4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
            >
              View on Yelp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
