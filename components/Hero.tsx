'use strict';
'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-white to-[#FDFBF7] py-16 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text block */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-100/60 border border-gold-500/30 text-xs font-semibold text-[#8C701B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              Créations Joaillières & Métaux Précieux • Casablanca
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] leading-tight font-bold">
              L'Élégance de l'Or, <br />
              <span className="text-[#D4AF37] italic font-normal">l'Éclat Éternel.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Découvrez la collection de haute bijouterie <strong>Anulus</strong>. Bagues de fiançailles, colliers de perles fines et parures de mariage façonnées avec passion et certifiées or 18 carats.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalogue"
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#0F172A] hover:bg-[#D4AF37] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all tracking-wide uppercase"
              >
                Explorer la Collection
              </a>
              <a
                href="https://wa.me/212639156883?text=Salam%20Anulus%20Joaillerie%2C%20je%20souhaite%20consulter%20votre%20catalogue%20complet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Conseiller Joaillier</span>
                <span className="text-xs text-gray-400">📲</span>
              </a>
            </div>

            {/* Micro assurances */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/70 text-center">
              <div>
                <p className="text-lg font-bold text-[#0F172A]">100%</p>
                <p className="text-xs text-gray-500 font-medium">Or 18K & Argent 925</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#0F172A]">24-48h</p>
                <p className="text-xs text-gray-500 font-medium">Livraison Partout au Maroc</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#0F172A]">0 DH</p>
                <p className="text-xs text-gray-500 font-medium">Paiement à la Réception</p>
              </div>
            </div>
          </div>

          {/* Image visual */}
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85"
                alt="Bijoux d'exception Anulus Joaillerie Casablanca"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Artisanat & Joaillerie</span>
                  <p className="font-serif text-2xl font-bold">Certificat d'Authenticité Fourni</p>
                  <p className="text-xs text-gray-200">Chaque création est gravée au poinçon officiel de l'Administration des Douanes marocaines.</p>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-[#D4AF37] font-bold text-lg">
                ★
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">4.9/5 Avis Clients</p>
                <p className="text-[11px] text-gray-500">+1 500 Clientes comblées au Maroc</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
