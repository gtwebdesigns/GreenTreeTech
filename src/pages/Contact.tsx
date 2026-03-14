import React, {useState} from 'react';
import { MapPin, Clock, ShieldCheck } from 'lucide-react';

const Contact = () => {
 const [form, setForm] = useState({
 firstName: '',
 lastName: '',
 email: '',
 message: '',
 });
 const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
 const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
 };
  const onSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setStatus('sending');

 const res = await fetch('/api/contact', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(form),
 });
  const onSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setStatus('sending');

 const res = await fetch('/api/contact', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(form),
 });
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-zinc-400">Get in touch for a free diagnostic or service request.</p>
        <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={onSubmit}>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-zinc-400 text-sm mb-2">First Name</label>
 <input name="firstName" value={form.firstName} onChange={onChange} required className="w-full ..." />
 </div>
 <div>
 <label className="block text-zinc-400 text-sm mb-2">Last Name</label>
 <input name="lastName" value={form.lastName} onChange={onChange} required className="w-full ..." />
 </div>
 </div>

 <div>
 <label className="block text-zinc-400 text-sm mb-2">Email</label>
 <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full ..." />
 </div>

 <div>
 <label className="block text-zinc-400 text-sm mb-2">Message</label>
 <textarea name="message" value={form.message} onChange={onChange} required rows={6} className="w-full ..." />
 </div>

 <button type="submit" disabled={status==='sending'} className="...">
 {status === 'sending' ? 'Sending...' : 'Send Message'}
 </button>

 {status === 'sent' && <p className="text-green-400 text-sm">Message sent.</p>}
 {status === 'error' && <p className="text-red-400 text-sm">Failed to send. Try again.</p>}
 </form>
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
