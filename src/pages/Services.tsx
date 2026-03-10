import React from 'react';
import { Laptop, Cpu, HardDrive, Globe, ShieldCheck, Monitor } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">Comprehensive IT solutions for your home and business.</p>
        <div className="w-60 h-1 bg-brand-green mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Laptop className="w-8 h-8" />,
            title: "Remote Computer Support",
            desc: "Fast, secure assistance for software issues, virus removal, and optimization without an on-site visit."
          },
          {
            icon: <Cpu className="w-8 h-8" />,
            title: "Hardware Consulting",
            desc: "Helping you find the right computer (Mac or PC) to serve your specific needs and budget."
          },
          {
            icon: <HardDrive className="w-8 h-8" />,
            title: "Backup & Storage",
            desc: "Preparing reliable backups and long-term file storage solutions, both local and cloud-based."
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Web Hosting & Design",
            desc: "Complete website creation and hosting services tailored for startups and established businesses."
          },
          {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "On-Site Cleaning",
            desc: "Physical computer cleaning services to keep your hardware running cool and lasting longer."
          },
          {
            icon: <Monitor className="w-8 h-8" />,
            title: "Network Setup",
            desc: "Configuring WiFi, switches, and mobile devices for optimal connectivity and security."
          }
        ].map((s, i) => (
          <div key={i} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-brand-green transition-all group">
            <div className="text-brand-green mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-brand-green rounded-3xl p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
        <p className="text-zinc-100 mb-8 max-w-xl mx-auto">We understand that every situation is unique. Contact us for a free diagnostic and estimate.</p>
        <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-zinc-900 transition-colors">
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default Services;
