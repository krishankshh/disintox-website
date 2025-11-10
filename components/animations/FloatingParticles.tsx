'use client';

import { useState, useEffect } from 'react';

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    type: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        type: Math.floor(Math.random() * 3) + 1,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle particle-${particle.type}`}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
