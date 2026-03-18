import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const trackBonusLogin = async () => {
  try {
    await supabase.from("bonus_logins").insert({
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    });
  } catch (e) {
    console.error("Tracking login failed", e);
  }
};

export const trackButtonClick = async (pagePath: string, buttonLabel: string, destinationUrl: string) => {
  try {
    await supabase.from("button_clicks" as any).insert({
      page_path: pagePath,
      button_label: buttonLabel,
      destination_url: destinationUrl,
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    });
  } catch (e) {
    console.error("Tracking button click failed", e);
  }
};

export const useBonusPageView = (pagePath: string, pageTitle: string) => {
  useEffect(() => {
    const track = async () => {
      try {
        await supabase.from("bonus_page_views").insert({
          page_path: pagePath,
          page_title: pageTitle,
          user_agent: navigator.userAgent,
          referrer: document.referrer || null,
        });
      } catch (e) {
        console.error("Tracking page view failed", e);
      }
    };
    track();
  }, [pagePath, pageTitle]);
