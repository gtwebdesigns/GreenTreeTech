import React, { useState } from 'react';
import { CreditCard, ShieldCheck, X, Smartphone, DollarSign, CheckCircle2 } from 'lucide-react';

const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paymentOptions = [
    {
      name: 'Credit / Debit Card',
      description: 'Pay securely via Stripe or PayPal',
      icon: <CreditCard className="w-6 h-6 text-brand-green" />,
      action: () => window.open('https://your-payment-link.com', '_blank'),
      primary: true
    },
    {
      name: 'Zelle',
      description: 'Pay using our business email',
      icon: <DollarSign className="w-6 h-6 text-blue-400" />,
      details: 'CaptainJackOC@gmail.com',
      copyable: true
    },
    {
      name: 'Venmo',
      description: 'Pay via @GreenTreeTech',
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      action: () => window.open('https://venmo.com/u/GreenTreeTech', '_blank')
    }
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Make a Payment</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">Secure and easy payment options for your convenience.</p>
        <div className="w-60 h-1 bg-brand-green mx-auto mt-4"></div>
      </div>

      <div className="max-w-3xl mx-auto bg-zinc-900 p-10 md:p-16 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        
        <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10">
          <CreditCard className="text-brand-green w-10 h-10" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Secure Payment Portal</h2>
        <p className="text-zinc-400 leading-relaxed mb-10 relative z-10">
          We offer several secure ways to pay your invoice. You can use your Credit Card, Debit Card, or popular mobile apps like Zelle and Venmo. All transactions are encrypted and secure.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 relative z-10">
          {['Visa', 'Mastercard', 'Zelle', 'Venmo'].map((method) => (
            <div key={method} className="bg-zinc-800/50 p-3 rounded-xl border border-zinc-700/50 flex items-center justify-center">
              <span className="text-zinc-300 text-xs font-medium uppercase tracking-wider">{method}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full py-5 bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xl rounded-xl transition-all shadow-lg shadow-brand-green/20 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Pay Now Securely
        </button>
        
        <p className="mt-6 text-zinc-500 text-xs flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 mr-2 text-brand-green" /> Secure 256-bit SSL Encrypted Payment
        </p>
      </div>

      {/* Payment Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white">Choose Payment Method</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {paymentOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={option.action}
                  className={`w-full flex items-center p-5 rounded-2xl border transition-all text-left group ${
                    option.primary 
                      ? 'bg-brand-green/10 border-brand-green/30 hover:bg-brand-green/20' 
                      : 'bg-zinc-800/50 border-zinc-700 hover:border-zinc-500'
                  }`}
                >
                  <div className={`p-3 rounded-xl mr-4 ${option.primary ? 'bg-brand-green/20' : 'bg-zinc-700'}`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold">{option.name}</p>
                    <p className="text-zinc-400 text-sm">{option.description}</p>
                    {option.details && (
                      <p className="text-brand-green text-xs mt-1 font-mono">{option.details}</p>
                    )}
                  </div>
                  <CheckCircle2 className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ${option.primary ? 'text-brand-green' : 'text-zinc-500'}`} />
                </button>
              ))}
            </div>

            <p className="mt-8 text-zinc-500 text-xs text-center">
              Clicking a mobile app option will open the app or website. For Zelle, please use the email address shown above.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
