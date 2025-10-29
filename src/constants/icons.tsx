
import React from 'react';

export const NiveliaLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
        <rect x="0" y="0" width="10" height="10" />
        <rect x="0" y="12" width="10" height="10" />
        <rect x="12" y="12" width="10" height="10" />
    </g>
    <text x="30" y="18" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="20" fontWeight="bold" fill="#111827">
      Nivelia
    </text>
  </svg>
);

export const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.472 4.285 4.56-1.246z" />
    <path d="M16.75 14.999c-.199-.1-1.18-.583-1.363-.652s-.316-.1-.452.1-.515.652-.632.782-.232.15-.431.05s-1.032-.382-1.967-1.215c-.729-.652-1.22-1.46-1.363-1.711s-.145-.219-.05-.34.186-.219.28-.316.145-.199.219-.332.036-.25-.018-.349s-.452-1.082-.619-1.48c-.156-.382-.323-.332-.452-.332h-.382c-.128 0-.34.05-.515.25-.167.199-.652.632-.652 1.549s.669 1.804.766 1.934c.098.132 1.35 2.061 3.282 2.899.46.199.816.316 1.097.405.36.118.687.1.948-.05.297-.167.892-.687 1.018-.912.128-.232.128-.431.09-.515z" />
  </svg>
);

export const CalendarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

export const TourismIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path>
  </svg>
);

export const RetailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

export const WellnessIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a9.4 9.4 0 0 0-4.62 1.25a6.2 6.2 0 0 0-4.08 6.51c.36 2.53 2.14 4.7 4.7 5.25c.38.08.76.12 1.15.12h0c.39 0 .77-.04 1.15-.12c2.56-.55 4.34-2.72 4.7-5.25a6.2 6.2 0 0 0-4.08-6.51A9.4 9.4 0 0 0 12 2Z"></path><path d="M12 15h.01"></path><path d="M12 18h.01"></path><path d="M12 21h.01"></path>
  </svg>
);

export const ScopeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

export const SnapIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.4-2.5-4.2-4.9-4.6-1.1-.2-2.2.1-3.1.7-1.4.9-2.2 2.4-2 4L8 16c0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.5-2.1L17 16"></path><path d="m7.5 7.5 3 3"></path><path d="M2.5 13.5 6 17"></path>
    </svg>
);

export const ShipIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
    </svg>
);

export const ScaleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 3v18"></path><path d="M17 8l-5-5-5 5"></path><path d="M7 16l5 5 5-5"></path>
    </svg>
);