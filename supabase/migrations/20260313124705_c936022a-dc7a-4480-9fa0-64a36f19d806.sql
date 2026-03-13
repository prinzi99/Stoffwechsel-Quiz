
-- Create table for bonus area logins
CREATE TABLE public.bonus_logins (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    logged_in_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    user_agent TEXT,
    referrer TEXT
);

-- Create table for bonus area page views
CREATE TABLE public.bonus_page_views (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    page_path TEXT NOT NULL,
    page_title TEXT,
    viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    user_agent TEXT,
    referrer TEXT
);

-- Enable RLS
ALTER TABLE public.bonus_logins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bonus_page_views ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (tracking from public visitors)
CREATE POLICY "Anyone can insert bonus logins"
ON public.bonus_logins FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Anyone can insert page views"
ON public.bonus_page_views FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow reads for analytics
CREATE POLICY "Anyone can read bonus logins"
ON public.bonus_logins FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Anyone can read page views"
ON public.bonus_page_views FOR SELECT
TO anon, authenticated
USING (true);

-- Indexes
CREATE INDEX idx_bonus_logins_logged_in_at ON public.bonus_logins (logged_in_at DESC);
CREATE INDEX idx_bonus_page_views_viewed_at ON public.bonus_page_views (viewed_at DESC);
CREATE INDEX idx_bonus_page_views_page_path ON public.bonus_page_views (page_path);
