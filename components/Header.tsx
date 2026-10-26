'use strict';
'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all shadow-sm">
      {/* Top bar announcement */}
      <div className="bg-[#0F172A] text-white py-2 px-4 text-xs tracking-wider text-center flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
        <span>🇲🇦 LIVRAISON EXPRESS 24H CASABLANCA & 48H PARTOUT AU MAROC • PAIEMENT À LA LIVRAISON</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex flex-col">
          <a href="#" className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-bold text-[#0F172A] hover:text-[#D4AF37] transition-colors">
            ANULUS
          </a>
          <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-medium">
            Joaillerie Casablanca
          </span>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#catalogue" className="hover:text-[#D4AF37] transition-colors">Bagues & Solitaires</a>
          <a href="#catalogue" className="hover:text-[#D4AF37] transition-colors">Colliers & Pendentifs</a>
          <a href="#catalogue" className="hover:text-[#D4AF37] transition-colors">Bracelets & Joncs</a>
          <a href="#catalogue" className="hover:text-[#D4AF37] transition-colors">Coffrets Mariage</a>
        </nav>

        {/* Direct WhatsApp Call to Action */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/212639156883?text=Salam%20Anulus%20Joaillerie%2C%20je%20souhaite%20me%20renseigner%20sur%20vos%20bijoux"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm hover:shadow"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp</span> Direct
          </a>
        </div>
      </div>
    </header>
  );
}
