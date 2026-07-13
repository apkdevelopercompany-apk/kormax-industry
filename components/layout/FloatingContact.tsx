import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/lib/data';

export default function FloatingContact() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`;
  const phoneUrl = `tel:${companyInfo.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '13px',
        right: '16px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          border: 'none',
        }}
      >
        <MessageCircle style={{ width: '24px', height: '24px', color: 'white' }} />
      </a>

      {/* Call Button */}
      <a
        href={phoneUrl}
        aria-label="Call Support"
        style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#2563eb',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          border: 'none',
        }}
      >
        <Phone style={{ width: '22px', height: '22px', color: 'white' }} />
      </a>
    </div>
  );
}
