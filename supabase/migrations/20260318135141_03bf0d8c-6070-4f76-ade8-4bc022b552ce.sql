CREATE TABLE public.button_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path TEXT NOT NULL,
  button_label TEXT,
  destination_url TEXT,
  user_agent TEXT,
  referrer TEXT,
  clicked_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.button_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts on button_clicks"
  ON public.button_clicks
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous selects on button_clicks"
  ON public.button_clicks
  FOR SELECT
  TO anon
  USING (true);