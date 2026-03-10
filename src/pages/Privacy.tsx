import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <div className="w-60 h-1 bg-brand-green mx-auto mt-4"></div>
      </div>
      
      <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 text-zinc-400 space-y-6 leading-relaxed">
        <p>
          At GreenTree Technology, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
        </p>
        
        <h3 className="text-white font-bold text-xl">Information Collection</h3>
        <p>
          We collect information you provide directly to us when you request a service, contact us for an estimate, or make a payment. This may include your name, email address, phone number, and technical details about your computer systems.
        </p>
        
        <h3 className="text-white font-bold text-xl">Use of Information</h3>
        <p>
          We use the information we collect to provide, maintain, and improve our services, to communicate with you about your service requests, and to process payments.
        </p>
        
        <h3 className="text-white font-bold text-xl">Remote Access Security</h3>
        <p>
          During remote support sessions, we use industry-standard encrypted connections. We only access your system with your explicit permission and under your supervision. We do not store permanent access credentials unless specifically requested for ongoing maintenance.
        </p>
        
        <h3 className="text-white font-bold text-xl">Data Protection</h3>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. Your data is never sold to third parties.
        </p>
        
        <h3 className="text-white font-bold text-xl">Cookies</h3>
        <p>
          We use cookies to analyze website traffic and optimize your experience. By using our site, you consent to our use of cookies.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
