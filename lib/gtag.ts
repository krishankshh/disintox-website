// Google Analytics helper functions

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Check if GA is enabled
export const isGAEnabled = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX';

// Page view tracking
export const pageview = (url: string) => {
  if (!isGAEnabled) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Event tracking
type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (!isGAEnabled) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Common event helpers
export const trackPDFDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'PDF',
    label: fileName,
  });
};

export const trackVideoPlay = (videoTitle: string) => {
  event({
    action: 'play',
    category: 'Video',
    label: videoTitle,
  });
};

export const trackFormSubmit = (formName: string) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};

export const trackOutboundClick = (url: string) => {
  event({
    action: 'click',
    category: 'Outbound Link',
    label: url,
  });
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
