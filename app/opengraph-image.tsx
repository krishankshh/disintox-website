import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Disintox® - Hospital-Grade Chlorine Dioxide (ClO2) Disinfection';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#DC2626',
              marginBottom: 24,
            }}
          >
            Disintox®
          </div>
          <div
            style={{
              fontSize: 40,
              color: '#1F2937',
              marginBottom: 16,
              maxWidth: 900,
            }}
          >
            Hospital-Grade Chlorine Dioxide (ClO2) Disinfection
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#6B7280',
              display: 'flex',
              gap: 40,
            }}
          >
            <span>99.99% Efficacy</span>
            <span>•</span>
            <span>Patented Technology</span>
            <span>•</span>
            <span>WHO Approved</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
