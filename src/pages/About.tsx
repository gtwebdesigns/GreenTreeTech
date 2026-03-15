import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
        <div className="w-60 h-1 bg-brand-green mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Our Story & Expertise</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            With over 25 years of experience in the IT consulting industry, our team has the expertise and knowledge to help small businesses succeed in today's digital landscape. We work with Apple and Windows products, as well as WiFi, switches, networks and mobile devices.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-6">
            We have also been designing websites since 2009. We understand that every business is unique, which is why we provide tailored solutions to meet the specific needs of our clients. Our solutions are designed to help small businesses optimize their technology solutions and achieve their goals.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
              <span className="text-zinc-500 text-xs uppercase tracking-wider">Years Experience</span>
              <span className="text-brand-green font-bold text-3xl block mb-1">25+</span>
            </div>
            <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
              <span className="text-zinc-500 text-xs uppercase tracking-wider">I/T & Web Design Since</span>
              <span className="text-brand-green font-bold text-3xl block mb-1">2009</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
            alt="Team" 
            className="rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green rounded-2xl -z-10"></div>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-10 md:p-16 border border-zinc-800">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-brand-green w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
            <p className="text-zinc-400 text-sm">We believe in honest diagnostics and practical solutions that fit your actual needs.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-brand-green w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
            <p className="text-zinc-400 text-sm">Staying ahead of the digital landscape to provide the most efficient tools for your business.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-brand-green w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Accessibility</h3>
            <p className="text-zinc-400 text-sm">High-quality IT consulting should be affordable for every small business and home user.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
