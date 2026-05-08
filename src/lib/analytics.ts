/**
 * Analytics + Retargeting Configuration · momumentalmoments.co
 *
 * Set these env variables in Vercel project settings:
 *   NEXT_PUBLIC_GA4_ID = G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID = 1234567890123456
 *   NEXT_PUBLIC_TIKTOK_PIXEL_ID = (optional)
 */

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
export const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "";

export const HAS_GA4 = Boolean(GA4_ID);
export const HAS_META = Boolean(META_PIXEL_ID);
export const HAS_TIKTOK = Boolean(TIKTOK_PIXEL_ID);

type WindowWithPixels = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  ttq?: { track: (...args: unknown[]) => void };
};

/**
 * Track a custom event across all configured platforms.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as WindowWithPixels;

  if (HAS_GA4 && w.gtag) {
    w.gtag("event", name, params ?? {});
  }
  if (HAS_META && w.fbq) {
    w.fbq("trackCustom", name, params ?? {});
  }
  if (HAS_TIKTOK && w.ttq) {
    w.ttq.track(name, params ?? {});
  }
}
