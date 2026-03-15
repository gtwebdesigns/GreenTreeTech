import React from 'react';
import { Monitor, Mail, MapPin } from 'lucide-react';
import { Page, NAV_ITEMS } from '../types';

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-[#161616] text-zinc-400 py-12 border-top border-zinc-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-brand-green rounded flex items-center justify-center mr-2">
              <Monitor className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white">GreenTree Technology</span>
          </div>
          <p className="text-sm leading-relaxed mb-4 max-w-md">
            Providing innovative IT and web solutions for business and home since 2009. 
            Specializing in remote support, website design and hosting, WiFi networking and computer consulting.
          </p>
          <div className="flex space-x-4">
            <a href="Contact.tsx" className="hover:text-brand-green transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {NAV_ITEMS.map(item => (
              <li key={item.id}>
                <button onClick={() => setPage(item.id)} className="hover:text-brand-green transition-colors">
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => setPage('privacy')} className="hover:text-brand-green transition-colors">
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Los Angeles, CA USA</li>
            <li>Contact Us for Appointments</li>
            <li>Closed Wed & Sun</li>
            <li className="text-brand-green font-medium">Independently Owned & Operated</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-zinc-600 text-center text-xs">
        <p>© {new Date().getFullYear()} GreenTree Technology & Computer Services. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
