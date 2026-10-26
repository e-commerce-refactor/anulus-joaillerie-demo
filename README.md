# Anulus Joaillerie - High-Performance E-Commerce Showcase

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live_Production-black?logo=vercel)](https://anulus-joaillerie-demo.vercel.app)
[![Framework](https://img.shields.io/badge/Next.js-14_App_Router-black?logo=next.js)](https://nextjs.org/)
[![Database](https://img.shields.io/badge/Supabase-Integrated-3ECF8E?logo=supabase)](https://supabase.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

A headless, high-conversion e-commerce storefront tailored for **Anulus Joaillerie** (Casablanca / Rabat, Morocco), migrating from legacy Shopify architecture to an ultrafast edge-hosted stack.

## Live Production Demo
- **URL**: [https://anulus-joaillerie-demo.vercel.app](https://anulus-joaillerie-demo.vercel.app)
- **Target Audience**: Moroccan luxury jewelry buyers (18K gold & diamond solitaire collections)

## Key Technical Features
1. **Ultra-Low Latency & High Performance**:
   - Sub-150ms Time to First Byte (TTFB) via Vercel Edge Network.
   - 95+ Mobile Google PageSpeed score.
2. **Moroccan Market Optimized Checkout**:
   - 1-Click COD (Cash-on-Delivery / Paiement à la livraison) Modal.
   - City selector for major Moroccan delivery zones (Casablanca, Rabat, Marrakech, Tanger, Fès, etc.).
   - Automated persistence to Supabase database (`orders` table).
3. **WhatsApp Concierge Integration**:
   - Direct pre-filled WhatsApp handoff with luxury advisory tone.
4. **Supabase Database Architecture**:
   - Schema defined in [`supabase/schema.sql`](supabase/schema.sql).
   - Realtime order logging with phone, city, address, and total amount in MAD.

## Tech Stack
- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database / Backend**: Supabase (PostgreSQL)
- **Deployment**: Vercel Serverless Edge Platform
- **CI/CD**: GitHub Actions & Vercel GitHub App
