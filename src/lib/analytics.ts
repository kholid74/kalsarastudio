export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', { location });
  }
};
