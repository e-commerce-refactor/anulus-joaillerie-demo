import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anulus Joaillerie Casablanca — Bijoux Or 18K & Argent Garanti',
  description: 'Maison de haute bijouterie à Casablanca. Bagues, colliers, bracelets et créations or 18k. Livraison partout au Maroc avec paiement à la réception.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
