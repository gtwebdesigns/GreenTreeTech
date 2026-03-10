import React from 'react';
import { CheckCircle2, Clock, CreditCard, ShieldCheck } from 'lucide-react';

const RemoteServices = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Remote Services</h1>
          <div className="w-60 h-1 bg-brand-green mx-left mt-4"></div>
          <p className="text-zinc-400 leading-relaxed mb-12">
            Remote computer services can save you time and money. Many computer issues can be handled with a secure connection to our technical team. We work through it with you so you can get back to what matters.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Remote Laptop & Desktop Services",
              "Software Troubleshooting",
              "Virus & Malware Removal",
              "System Optimization & Cleanup",
              "Email Configuration",
              "Cloud Storage Setup"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-zinc-300">
                <CheckCircle2 className="text-brand-green w-5 h-5 mr-3" />
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-zinc-900 p-6 rounded-xl border-l-4 border-brand-green">
            <p className="text-white font-medium italic">"No contracts or subscriptions. Just a simple one-time fee to remotely clean up your computer to help make it run better."</p>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.squarespace-cdn.com/content/64c7bfb73e46f823920af372/1750691002034-IYGRDR28PRWRW5CSJPTO/photo-1583508915901-b5f84c1dcde1.jpg?format=1500w&content-type=image%2Fjpeg" 
            alt="Remote Support Session" 
            className="rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
          <ol className="space-y-6">
            <li className="flex">
              <span className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <p className="text-zinc-400 text-sm">Contact us to schedule a remote session at a time that works for you.</p>
            </li>
            <li className="flex">
              <span className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <p className="text-zinc-400 text-sm">Download our secure remote access tool (we'll guide you through it).</p>
            </li>
            <li className="flex">
              <span className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
              <p className="text-zinc-400 text-sm">Watch as we diagnose and fix your issues in real-time.</p>
            </li>
          </ol>
        </div>
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Clock className="text-brand-green w-5 h-5 mr-3 mt-1" />
              <p className="text-zinc-400 text-sm"><span className="text-white font-semibold">Immediate Assistance:</span> No waiting for a technician to drive to your location.</p>
            </li>
            <li className="flex items-start">
              <CreditCard className="text-brand-green w-5 h-5 mr-3 mt-1" />
              <p className="text-zinc-400 text-sm"><span className="text-white font-semibold">Cost Effective:</span> Lower rates since there are no travel expenses involved.</p>
            </li>
            <li className="flex items-start">
              <ShieldCheck className="text-brand-green w-5 h-5 mr-3 mt-1" />
              <p className="text-zinc-400 text-sm"><span className="text-white font-semibold">Secure:</span> We use industry-standard encrypted connections for all sessions.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RemoteServices;
