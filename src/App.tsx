/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';

// --- Components ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- Pages ---
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import RemoteServices from './pages/RemoteServices';
import WebDesign from './pages/WebDesign';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Privacy from './pages/Privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'remote': return <RemoteServices />;
      case 'web-design': return <WebDesign />;
      case 'contact': return <Contact />;
      case 'payment': return <Payment />;
      case 'privacy': return <Privacy />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-brand-green/30 selection:text-brand-green/80">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setCurrentPage} />
    </div>
  );
}
