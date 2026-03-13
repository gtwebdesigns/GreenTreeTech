import React from 'react';
import { motion } from 'motion/react';
import { 
  Monitor, 
  Globe, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { Page } from '../types';

const Hero = ({ setPage }: { setPage: (p: Page) => void }) => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-900">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://wallpapers.com/images/hd/data-background-cqr88g856v43unv1.jpg" 
        alt="Data Background" 
        className="w-full h-full object-cover opacity-40"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Innovative IT & <span className="text-brand-green">Web Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Maximize efficiency with our tailored IT consulting services. 
          Computer and networking services for business and home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setPage('services')}
            className="w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-brand-green/90 text-white font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center"
          >
            Our Services <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          <button 
            onClick={() => setPage('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all border border-white/20"
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Home = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="space-y-20 pb-20">
      <Hero setPage={setPage} />
      
      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-brand-green/50 transition-colors group">
            <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
              <ShieldCheck className="text-brand-green group-hover:text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Remote Support</h3>
            <p className="text-zinc-400 leading-relaxed">
              Save time and money with our remote computer services. Many issues can be handled instantly via a secure connection.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-brand-green/50 transition-colors group">
            <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
              <Globe className="text-brand-green group-hover:text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Web Design</h3>
            <p className="text-zinc-400 leading-relaxed">
              We create beautiful, functional websites for startups, real estate, gyms, and more. Proudly serving since 2009.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-brand-green/50 transition-colors group">
            <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
              <Clock className="text-brand-green group-hover:text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Consulting</h3>
            <p className="text-zinc-400 leading-relaxed">
              Expert advice on backups, file storage, and hardware recommendations tailored to your specific needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
              alt="Workspace" 
              className="rounded-2xl shadow-2xl border border-zinc-800"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose GreenTree Technology?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle2 className="text-brand-green mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Over 25 Years Experience</h4>
                  <p className="text-zinc-400 text-sm">Deep expertise in IT consulting and digital landscapes since 2009.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-brand-green mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Tailored Solutions</h4>
                  <p className="text-zinc-400 text-sm">Every business is unique. We provide specific solutions to meet your goals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-brand-green mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Affordable Pricing</h4>
                  <p className="text-zinc-400 text-sm">High-quality services without breaking the bank. Options for every budget.</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setPage('about')}
              className="mt-10 px-6 py-3 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-bold rounded-lg transition-all"
            >
              Learn More About Us TODAY!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
