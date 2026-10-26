-- Supabase Schema for Anulus Joaillerie Cash-on-Delivery (COD) Orders
CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  order_id TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  city TEXT NOT NULL,
  address TEXT,
  ring_size TEXT,
  product_name TEXT NOT NULL,
  product_price_mad NUMERIC NOT NULL,
  shipping_fee_mad NUMERIC NOT NULL DEFAULT 0,
  total_mad NUMERIC NOT NULL,
  status TEXT DEFAULT 'pending_confirmation',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast order lookups by phone or order_id
CREATE INDEX IF NOT EXISTS idx_orders_phone ON orders (customer_phone);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders (status);
