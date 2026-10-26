'use strict';
'use client';

import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenCodModal: (product: Product) => void;
}

export default function ProductCard({ product, onOpenCodModal }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/212639156883?text=${encodeURIComponent(
    `Salam Anulus, je souhaite commander la pièce "${product.name}" au prix de ${product.priceMad} DH.`
  )}`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      {/* Visual */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#0F172A] text-white text-[10px] tracking-wider uppercase font-bold px-2.5 py-1 rounded">
            {product.badge}
          </span>
        )}

        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded border border-gray-200">
          {product.material}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider">{product.category}</span>
          <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors leading-snug pt-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing */}
        <div className="pt-2 border-t border-gray-100 flex items-baseline justify-between">
          <div>
            <span className="text-xl font-bold text-[#0F172A]">
              {product.priceMad.toLocaleString('fr-FR')} <span className="text-sm font-semibold text-[#D4AF37]">DH</span>
            </span>
            {product.originalPriceMad && (
              <span className="ml-2 text-xs text-gray-400 line-through">
                {product.originalPriceMad} DH
              </span>
            )}
          </div>
          <span className="text-[11px] text-[#059669] font-medium">Paiement à la livraison</span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          <button
            onClick={() => onOpenCodModal(product)}
            className="w-full py-2.5 px-4 bg-[#0F172A] hover:bg-[#D4AF37] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>Commander en 1 Clic (COD)</span>
            <span>⚡</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Commander par WhatsApp</span>
            <span>💬</span>
          </a>
        </div>
      </div>
    </div>
  );
}
