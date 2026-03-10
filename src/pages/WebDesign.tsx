import React from 'react';
import { CheckCircle2, Globe } from 'lucide-react';

const WebDesign = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Web Design & Hosting</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">We can make a website you'll love. From startups to established businesses.</p>
        <div className="w-60 h-1 bg-brand-green mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Custom Websites for Every Industry</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Whether you are a startup, a real estate business, or a gym, we can help you generate a beautiful website you can be proud of. Our designs are responsive, fast, and optimized for search engines.
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 flex items-center">
              <CheckCircle2 className="text-brand-green mr-3" />
              <span className="text-zinc-300">Responsive Design (Mobile Friendly)</span>
            </div>
            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 flex items-center">
              <CheckCircle2 className="text-brand-green mr-3" />
              <span className="text-zinc-300">SEO Optimization</span>
            </div>
            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 flex items-center">
              <CheckCircle2 className="text-brand-green mr-3" />
              <span className="text-zinc-300">Secure Web Hosting</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500" 
            alt="Web Design 1" 
            className="rounded-xl shadow-lg"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=500" 
            alt="Web Design 2" 
            className="rounded-xl shadow-lg mt-8"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Portfolio Samples</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "GT Website Design & Hosting", image: "https://img1.wsimg.com/isteam/getty/2230807736", link: "https://gtwebdesigns.com", alt: "GT Website Design" },
            { name: "Balboa Computer Inc" , image: "https://media.istockphoto.com/id/458669341/photo/paramount-studios-main-gate.jpg?s=612x612&w=0&k=20&c=CKX_K5EYwlF4Wp4fUYAgWVtQ2qCZubfPRBAndWs3f9k=", link: "https://balboacomputer.com", alt: "Balboa Computer, Inc." },
            { name: "Rusty's Auto Repair" , image: "https://img1.wsimg.com/isteam/ip/a9f6508f-ed25-42fa-91b6-3b400824fd21/gt3rs-yellow-v3B.png", link: "https://rustyauto.godaddysites.com/", alt: "Rusty's Auto Repair" },
            { name: "RSP Holdings, Inc." , image: "https://images.adsttc.com/media/images/619d/4b60/f91c/818c/6e00/0006/large_jpg/shutterstock_728342668.jpg", link: "https://rspholdingsinc.netlify.app/", alt: "RSP Holdings, Inc." },
            { name: "Meridian Tax & Bookkeeping" }
          ].map((site, i) => (
            <div key={i} className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-colors cursor-pointer group">
              <div className="w-full h-32 bg-zinc-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {site.image ? (
                  <a href={site.link} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                    <img 
                      src={site.image} 
                      alt={site.alt || site.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                ) : (
                  <Globe className="text-brand-green/20 w-16 h-16 group-hover:scale-110 transition-transform" />
                )}
              </div>
              <h4 className="text-white font-semibold text-center">{site.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
