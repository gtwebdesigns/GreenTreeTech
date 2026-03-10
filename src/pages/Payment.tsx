import React from 'react';
import { CreditCard, ShieldCheck } from 'lucide-react';

const Payment = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Make a Payment</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">Secure and easy payment options for your convenience.</p>
        <div className="w-60 h-1 bg-brand-green mx-auto mt-4"></div>
      </div>

      <div className="max-w-3xl mx-auto bg-zinc-900 p-10 md:p-16 rounded-3xl border border-zinc-800 shadow-2xl">
        <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CreditCard className="text-brand-green w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-6">Easy Pay Options</h2>
        <p className="text-zinc-400 leading-relaxed mb-10">
          You can pay your invoice here directly through GoDaddy secure servers. Or if you prefer to use Zelle, Venmo or PayPal, please contact us to receive a link to our business payment account.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 flex items-center justify-center">
            <span className="text-white font-semibold">Credit Cards</span>
          </div>
          <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 flex items-center justify-center">
            <span className="text-white font-semibold">Zelle / Venmo</span>
          </div>
          <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 flex items-center justify-center">
            <span className="text-white font-semibold">PayPal</span>
          </div>
          <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 flex items-center justify-center">
            <span className="text-white font-semibold">Cash</span>
          </div>
        </div>

        <button className="w-full py-5 bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xl rounded-xl transition-all shadow-lg shadow-brand-green/20">
          Pay Now Securely
        </button>
        <p className="mt-6 text-zinc-500 text-xs flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 mr-2" /> Secure 256-bit SSL Encrypted Payment
        </p>
      </div>
    </div>
  );
};

export default Payment;
