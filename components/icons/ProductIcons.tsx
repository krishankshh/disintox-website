export const ProductIcons = {
  NonCorrosive: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Red prohibition circle */}
      <circle cx="60" cy="60" r="55" fill="white" stroke="#dc2626" strokeWidth="4"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="#dc2626" strokeWidth="3"/>

      {/* Microscope icon */}
      <g transform="translate(45, 35)">
        {/* Eyepiece */}
        <rect x="10" y="0" width="8" height="15" fill="#374151" rx="2"/>
        {/* Body tube */}
        <path d="M 14 15 L 14 30" stroke="#374151" strokeWidth="4"/>
        {/* Stage */}
        <rect x="5" y="28" width="18" height="4" fill="#374151"/>
        {/* Base */}
        <ellipse cx="14" cy="40" rx="12" ry="4" fill="#374151"/>
        {/* Droplets */}
        <circle cx="18" cy="45" r="2" fill="#dc2626" opacity="0.7"/>
        <circle cx="24" cy="48" r="1.5" fill="#dc2626" opacity="0.7"/>
      </g>

      {/* Red diagonal prohibition line */}
      <line x1="25" y1="25" x2="95" y2="95" stroke="#dc2626" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  ),

  NonCarcinogenic: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Red prohibition circle */}
      <circle cx="60" cy="60" r="55" fill="white" stroke="#dc2626" strokeWidth="4"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="#dc2626" strokeWidth="3"/>

      {/* Person silhouette */}
      <g transform="translate(48, 35)">
        {/* Head */}
        <circle cx="12" cy="8" r="7" fill="#1f2937"/>
        {/* Body */}
        <path d="M 12 16 L 12 35 M 5 22 L 12 20 L 19 22 M 12 35 L 7 48 M 12 35 L 17 48"
              stroke="#1f2937" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        {/* DNA/molecules overlay */}
        <circle cx="8" cy="25" r="2" fill="#dc2626" opacity="0.6"/>
        <circle cx="16" cy="28" r="2" fill="#dc2626" opacity="0.6"/>
        <circle cx="12" cy="32" r="2" fill="#dc2626" opacity="0.6"/>
      </g>

      {/* Red diagonal prohibition line */}
      <line x1="25" y1="25" x2="95" y2="95" stroke="#dc2626" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  ),

  NonToxic: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Green circular badge */}
      <circle cx="60" cy="60" r="55" fill="#22c55e"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="#16a34a" strokeWidth="2"/>
      <circle cx="60" cy="60" r="46" fill="none" stroke="#16a34a" strokeWidth="1" strokeDasharray="2 3"/>

      {/* Flask/beaker in center */}
      <g transform="translate(48, 38)">
        {/* Flask body */}
        <path d="M 8 5 L 8 12 L 4 25 Q 3 28 5 30 L 19 30 Q 21 28 20 25 L 16 12 L 16 5 Z"
              fill="white" stroke="white" strokeWidth="1.5"/>
        {/* Flask neck */}
        <rect x="10" y="0" width="4" height="6" fill="white"/>
        {/* Liquid inside */}
        <path d="M 6 20 Q 5 23 7 25 L 17 25 Q 19 23 18 20 Z" fill="#16a34a" opacity="0.3"/>
      </g>

      {/* "NON TOXIC" text curved */}
      <path id="topCurve" d="M 20,60 A 40,40 0 0,1 100,60" fill="none"/>
      <text fill="white" fontSize="10" fontWeight="bold">
        <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
          NON TOXIC
        </textPath>
      </text>

      <path id="bottomCurve" d="M 20,60 A 40,40 0 0,0 100,60" fill="none"/>
      <text fill="white" fontSize="10" fontWeight="bold">
        <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
          NON TOXIC
        </textPath>
      </text>

      {/* Sparkles */}
      <g fill="white">
        <path d="M 30 35 L 32 40 L 30 45 L 28 40 Z"/>
        <path d="M 90 40 L 92 45 L 90 50 L 88 45 Z"/>
        <path d="M 35 75 L 37 80 L 35 85 L 33 80 Z"/>
      </g>
    </svg>
  ),

  NoResidue: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Red prohibition circle */}
      <circle cx="60" cy="60" r="55" fill="white" stroke="#dc2626" strokeWidth="4"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="#dc2626" strokeWidth="3"/>

      {/* Bottle/flask */}
      <g transform="translate(48, 30)">
        {/* Bottle neck */}
        <rect x="8" y="0" width="8" height="10" fill="#374151" rx="1"/>
        {/* Bottle cap */}
        <rect x="6" y="-3" width="12" height="4" fill="#374151" rx="1"/>
        {/* Bottle body */}
        <path d="M 4 10 L 4 38 Q 4 42 8 42 L 16 42 Q 20 42 20 38 L 20 10 Z"
              fill="#374151" opacity="0.8"/>
        {/* Liquid inside */}
        <rect x="6" y="20" width="12" height="18" fill="#4b5563" opacity="0.6"/>
        {/* Drops */}
        <ellipse cx="12" cy="48" rx="3" ry="4" fill="#374151" opacity="0.7"/>
        <circle cx="10" cy="54" r="2" fill="#374151" opacity="0.6"/>
        <circle cx="15" cy="56" r="1.5" fill="#374151" opacity="0.6"/>
      </g>

      {/* Red diagonal prohibition line */}
      <line x1="25" y1="25" x2="95" y2="95" stroke="#dc2626" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  ),

  NoResistance: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Red prohibition circle */}
      <circle cx="60" cy="60" r="55" fill="white" stroke="#dc2626" strokeWidth="4"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="#dc2626" strokeWidth="3"/>

      {/* Bacteria and gears */}
      <g>
        {/* Central gear */}
        <circle cx="60" cy="60" r="10" fill="#374151"/>
        {/* Gear teeth */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 60 + Math.cos(rad) * 12;
          const y = 60 + Math.sin(rad) * 12;
          return <circle key={i} cx={x} cy={y} r="3" fill="#374151"/>;
        })}

        {/* Side gear */}
        <circle cx="78" cy="50" r="8" fill="#374151" opacity="0.8"/>
        {[0, 90, 180, 270].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 78 + Math.cos(rad) * 10;
          const y = 50 + Math.sin(rad) * 10;
          return <circle key={`g2-${i}`} cx={x} cy={y} r="2.5" fill="#374151" opacity="0.8"/>;
        })}

        {/* Bacteria/microbe circles */}
        <circle cx="42" cy="48" r="6" fill="#374151" opacity="0.6"/>
        <circle cx="50" cy="75" r="5" fill="#374151" opacity="0.6"/>
        <circle cx="70" cy="72" r="4" fill="#374151" opacity="0.6"/>
      </g>

      {/* Red diagonal prohibition line */}
      <line x1="25" y1="25" x2="95" y2="95" stroke="#dc2626" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  ),

  SoilLoadReduction: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Light blue circle background */}
      <circle cx="60" cy="60" r="55" fill="#dbeafe"/>
      <circle cx="60" cy="60" r="52" stroke="#0ea5e9" strokeWidth="3" fill="none"/>

      {/* Hand holding plant */}
      <g transform="translate(35, 45)">
        {/* Hand/palm */}
        <ellipse cx="25" cy="25" rx="18" ry="12" fill="#60a5fa" opacity="0.6"/>
        <path d="M 10 22 Q 15 18 20 20 Q 25 15 30 18 Q 35 16 40 20 L 40 28 Q 35 32 30 30 Q 25 33 20 30 Q 15 32 10 28 Z"
              fill="#60a5fa"/>

        {/* Plant stem */}
        <line x1="25" y1="10" x2="25" y2="25" stroke="#15803d" strokeWidth="2.5"/>

        {/* Leaves */}
        <path d="M 25 15 Q 20 12 18 15 Q 20 18 25 16 Z" fill="#16a34a"/>
        <path d="M 25 15 Q 30 12 32 15 Q 30 18 25 16 Z" fill="#22c55e"/>
        <path d="M 25 10 Q 22 7 20 8 Q 21 11 25 10 Z" fill="#15803d"/>
        <path d="M 25 10 Q 28 7 30 8 Q 29 11 25 10 Z" fill="#16a34a"/>
      </g>
    </svg>
  ),

  LowConcentration: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Circular background */}
      <circle cx="60" cy="60" r="55" fill="#f0f9ff"/>

      {/* Laboratory beakers/flasks */}
      <g>
        {/* Left beaker (smaller - 100 PPM) */}
        <g transform="translate(25, 45)">
          <path d="M 8 0 L 8 15 L 5 25 Q 4 28 7 28 L 13 28 Q 16 28 15 25 L 12 15 L 12 0 Z"
                fill="#93c5fd" stroke="#3b82f6" strokeWidth="1.5"/>
          <rect x="8" y="18" width="4" height="10" fill="#60a5fa" opacity="0.6"/>
          <text x="10" y="38" fontSize="7" fill="#3b82f6" textAnchor="middle" fontWeight="bold">100</text>
        </g>

        {/* Middle beaker */}
        <g transform="translate(45, 40)">
          <path d="M 6 0 L 6 18 L 3 30 Q 2 34 6 34 L 14 34 Q 18 34 17 30 L 14 18 L 14 0 Z"
                fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1.5"/>
          <rect x="7" y="20" width="6" height="14" fill="#93c5fd" opacity="0.5"/>
        </g>

        {/* Right beaker (larger - 1000+ PPM) */}
        <g transform="translate(68, 35)">
          <path d="M 8 0 L 8 20 L 4 35 Q 3 40 8 40 L 18 40 Q 23 40 22 35 L 18 20 L 18 0 Z"
                fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
          <rect x="9" y="22" width="8" height="18" fill="#bfdbfe" opacity="0.4"/>
          <text x="13" y="50" fontSize="6" fill="#60a5fa" textAnchor="middle" fontWeight="bold">1000+</text>
        </g>
      </g>

      {/* Arrow pointing down at smaller beaker */}
      <path d="M 35 20 L 35 28 M 32 25 L 35 28 L 38 25" stroke="#22c55e" strokeWidth="2" fill="none"/>
    </svg>
  ),

  SmallPathogen: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Light gray/blue background circle */}
      <circle cx="60" cy="60" r="55" fill="#f1f5f9"/>

      {/* Virus/pathogen particles in red/orange */}
      <g>
        {/* Central large virus */}
        <circle cx="60" cy="60" r="12" fill="#dc2626" opacity="0.7"/>
        {/* Spikes around central virus */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 60 + Math.cos(rad) * 12;
          const y1 = 60 + Math.sin(rad) * 12;
          const x2 = 60 + Math.cos(rad) * 18;
          const y2 = 60 + Math.sin(rad) * 18;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#dc2626" strokeWidth="2"/>;
        })}

        {/* Surrounding smaller viruses */}
        <g opacity="0.6">
          <circle cx="35" cy="40" r="8" fill="#ef4444"/>
          {[0, 90, 180, 270].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 35 + Math.cos(rad) * 8;
            const y1 = 40 + Math.sin(rad) * 8;
            const x2 = 35 + Math.cos(rad) * 12;
            const y2 = 40 + Math.sin(rad) * 12;
            return <line key={`v2-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ef4444" strokeWidth="1.5"/>;
          })}
        </g>

        <g opacity="0.5">
          <circle cx="85" cy="50" r="7" fill="#f87171"/>
          {[45, 135, 225, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 85 + Math.cos(rad) * 7;
            const y1 = 50 + Math.sin(rad) * 7;
            const x2 = 85 + Math.cos(rad) * 11;
            const y2 = 50 + Math.sin(rad) * 11;
            return <line key={`v3-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f87171" strokeWidth="1.5"/>;
          })}
        </g>

        <circle cx="45" cy="80" r="6" fill="#fca5a5" opacity="0.5"/>
        <circle cx="75" cy="75" r="7" fill="#f87171" opacity="0.5"/>
        <circle cx="50" cy="35" r="5" fill="#fca5a5" opacity="0.4"/>
      </g>

      {/* Size label */}
      <text x="60" y="100" fontSize="8" fill="#64748b" textAnchor="middle" fontWeight="bold">0.124 nm</text>
    </svg>
  ),

  ShortContactTime: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Stopwatch circular body */}
      <circle cx="60" cy="65" r="35" fill="white" stroke="#374151" strokeWidth="3"/>
      <circle cx="60" cy="65" r="32" fill="none" stroke="#d1d5db" strokeWidth="1"/>

      {/* Stopwatch button on top */}
      <rect x="57" y="28" width="6" height="5" fill="#374151" rx="1"/>
      <circle cx="60" cy="30" r="3" fill="#6b7280"/>

      {/* Hand holding (bottom curves) */}
      <ellipse cx="40" cy="90" rx="15" ry="10" fill="#fde68a" opacity="0.6"/>
      <ellipse cx="80" cy="90" rx="15" ry="10" fill="#fde68a" opacity="0.6"/>

      {/* Clock face numbers */}
      <g fill="#9ca3af" fontSize="8" fontWeight="bold" textAnchor="middle">
        <text x="60" y="40">12</text>
        <text x="85" y="68">3</text>
        <text x="60" y="93">6</text>
        <text x="35" y="68">9</text>
      </g>

      {/* Clock hands */}
      <line x1="60" y1="65" x2="60" y2="45" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
      <line x1="60" y1="65" x2="75" y2="65" stroke="#374151" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="60" cy="65" r="3" fill="#374151"/>

      {/* Center dot */}
      <circle cx="60" cy="65" r="2" fill="#dc2626"/>
    </svg>
  ),

  EasyToUse: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Green speech bubble */}
      <rect x="25" y="35" width="70" height="45" rx="6" fill="#22c55e" stroke="#16a34a" strokeWidth="3"/>

      {/* Speech bubble pointer */}
      <path d="M 60 80 L 55 90 L 65 80 Z" fill="#22c55e" stroke="#16a34a" strokeWidth="2"/>

      {/* "EASY" text */}
      <text x="60" y="57" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">EASY</text>

      {/* "TO USE" text */}
      <text x="60" y="72" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">TO USE</text>

      {/* Hand gesture above (finger pointing) */}
      <g transform="translate(48, 10)">
        {/* Palm */}
        <ellipse cx="12" cy="18" rx="8" ry="6" fill="#fde68a" opacity="0.8"/>
        {/* Pointing finger */}
        <rect x="10" y="5" width="4" height="14" fill="#fbbf24" rx="2"/>
        <ellipse cx="12" cy="4" rx="3" ry="4" fill="#fbbf24"/>
      </g>
    </svg>
  ),

  NoStain: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Circular background with fabric photo effect */}
      <circle cx="60" cy="60" r="55" fill="#f9fafb"/>
      <circle cx="60" cy="60" r="52" fill="white" opacity="0.8"/>

      {/* Fabric/cloth texture representation */}
      <g>
        {/* Cloth folds */}
        <path d="M 35 45 Q 45 40 55 45 T 75 45 T 90 50"
              stroke="#e5e7eb" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M 35 55 Q 45 50 55 55 T 75 55 T 90 60"
              stroke="#e5e7eb" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M 35 65 Q 45 60 55 65 T 75 65 T 90 70"
              stroke="#e5e7eb" strokeWidth="2" fill="none" opacity="0.6"/>
      </g>

      {/* White fabric shape */}
      <ellipse cx="60" cy="60" rx="30" ry="25" fill="white" stroke="#d1d5db" strokeWidth="2"/>

      {/* Red prohibition symbol */}
      <circle cx="60" cy="60" r="35" stroke="#dc2626" strokeWidth="4" fill="none"/>
      <line x1="35" y1="35" x2="85" y2="85" stroke="#dc2626" strokeWidth="5" strokeLinecap="round"/>

      {/* Small prohibition circle on fabric */}
      <g transform="translate(50, 45)">
        <circle cx="0" cy="0" r="8" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.7"/>
        <line x1="-6" y1="-6" x2="6" y2="6" stroke="#ef4444" strokeWidth="2" opacity="0.7"/>
      </g>
    </svg>
  ),

  BroadSpectrum: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Dark navy blue circle background */}
      <circle cx="60" cy="60" r="55" fill="#1e3a8a"/>
      <circle cx="60" cy="60" r="52" fill="#1e40af"/>

      {/* Concentric target circles */}
      <circle cx="60" cy="60" r="40" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.4"/>
      <circle cx="60" cy="60" r="30" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.5"/>
      <circle cx="60" cy="60" r="20" stroke="#93c5fd" strokeWidth="2" fill="none" opacity="0.6"/>

      {/* Crosshair lines */}
      <line x1="20" y1="60" x2="100" y2="60" stroke="#dbeafe" strokeWidth="2"/>
      <line x1="60" y1="20" x2="60" y2="100" stroke="#dbeafe" strokeWidth="2"/>

      {/* Pill/capsule in center */}
      <g transform="translate(48, 52)">
        {/* Capsule shape */}
        <ellipse cx="12" cy="8" rx="10" ry="7" fill="#ef4444"/>
        <rect x="2" y="8" width="20" height="8" fill="#ef4444"/>
        <ellipse cx="12" cy="16" rx="10" ry="7" fill="#f97316"/>

        {/* Capsule separator line */}
        <line x1="2" y1="12" x2="22" y2="12" stroke="#1e40af" strokeWidth="1"/>
      </g>

      {/* Corner markers */}
      <g stroke="#60a5fa" strokeWidth="2" fill="none">
        <path d="M 25 35 L 25 25 L 35 25"/>
        <path d="M 85 25 L 95 25 L 95 35"/>
        <path d="M 95 85 L 95 95 L 85 95"/>
        <path d="M 35 95 L 25 95 L 25 85"/>
      </g>
    </svg>
  ),

  NoStorage: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Circular background */}
      <circle cx="60" cy="60" r="55" fill="#f1f5f9"/>

      {/* Warehouse/storage building */}
      <g transform="translate(30, 35)">
        {/* Building structure */}
        <rect x="5" y="15" width="50" height="35" fill="#64748b" opacity="0.4"/>

        {/* Roof */}
        <path d="M 0 15 L 30 5 L 60 15 Z" fill="#475569" opacity="0.5"/>

        {/* Shelves/racks */}
        <line x1="10" y1="25" x2="50" y2="25" stroke="#334155" strokeWidth="2"/>
        <line x1="10" y1="35" x2="50" y2="35" stroke="#334155" strokeWidth="2"/>
        <line x1="10" y1="45" x2="50" y2="45" stroke="#334155" strokeWidth="2"/>

        {/* Vertical dividers */}
        <line x1="20" y1="15" x2="20" y2="50" stroke="#334155" strokeWidth="1.5"/>
        <line x1="30" y1="15" x2="30" y2="50" stroke="#334155" strokeWidth="1.5"/>
        <line x1="40" y1="15" x2="40" y2="50" stroke="#334155" strokeWidth="1.5"/>

        {/* Boxes on shelves */}
        <rect x="12" y="20" width="6" height="4" fill="#1e293b" opacity="0.6"/>
        <rect x="32" y="20" width="6" height="4" fill="#1e293b" opacity="0.6"/>
        <rect x="22" y="30" width="6" height="4" fill="#1e293b" opacity="0.6"/>
      </g>

      {/* Large red X over warehouse */}
      <line x1="30" y1="30" x2="90" y2="90" stroke="#dc2626" strokeWidth="7" strokeLinecap="round"/>
      <line x1="90" y1="30" x2="30" y2="90" stroke="#dc2626" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  ),

  Versatility: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Blue circular background */}
      <circle cx="60" cy="60" r="55" fill="#0ea5e9" opacity="0.2"/>
      <circle cx="60" cy="60" r="52" stroke="#0ea5e9" strokeWidth="2"/>

      {/* Central golden droplet */}
      <g transform="translate(52, 45)">
        <path d="M 8 0 Q 2 8 2 15 Q 2 22 8 25 Q 14 22 14 15 Q 14 8 8 0 Z"
              fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
        <ellipse cx="8" cy="16" rx="4" ry="5" fill="#fde68a" opacity="0.5"/>
      </g>

      {/* Surrounding molecule/atom icons */}
      <g>
        {/* Top molecules */}
        {[30, 50, 70, 90].map((x, i) => (
          <g key={`top-${i}`} opacity="0.6">
            <circle cx={x} cy="25" r="4" fill="#0ea5e9"/>
            <circle cx={x-3} cy="30" r="2.5" fill="#38bdf8"/>
            <circle cx={x+3} cy="30" r="2.5" fill="#38bdf8"/>
          </g>
        ))}

        {/* Side molecules */}
        <g opacity="0.6">
          <circle cx="20" cy="50" r="4" fill="#0ea5e9"/>
          <circle cx="17" cy="55" r="2.5" fill="#38bdf8"/>
          <circle cx="23" cy="55" r="2.5" fill="#38bdf8"/>
        </g>

        <g opacity="0.6">
          <circle cx="100" cy="55" r="4" fill="#0ea5e9"/>
          <circle cx="97" cy="60" r="2.5" fill="#38bdf8"/>
          <circle cx="103" cy="60" r="2.5" fill="#38bdf8"/>
        </g>

        {/* Bottom molecules */}
        {[35, 55, 75, 85].map((x, i) => (
          <g key={`bottom-${i}`} opacity="0.5">
            <circle cx={x} cy="88" r="3.5" fill="#0ea5e9"/>
            <circle cx={x-2.5} cy="93" r="2" fill="#38bdf8"/>
            <circle cx={x+2.5} cy="93" r="2" fill="#38bdf8"/>
          </g>
        ))}
      </g>

      {/* Connection lines */}
      <g stroke="#0ea5e9" strokeWidth="1" opacity="0.3">
        <line x1="60" y1="60" x2="40" y2="25"/>
        <line x1="60" y1="60" x2="70" y2="25"/>
        <line x1="60" y1="60" x2="20" y2="50"/>
        <line x1="60" y1="60" x2="100" y2="55"/>
      </g>
    </svg>
  ),

  CostEffective: () => (
    <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none">
      {/* Dark circular background */}
      <circle cx="60" cy="60" r="55" fill="#0f172a"/>
      <circle cx="60" cy="60" r="52" fill="#1e293b"/>

      {/* Glowing rupee symbol in center */}
      <g>
        {/* Glow effect */}
        <circle cx="60" cy="60" r="20" fill="#0ea5e9" opacity="0.3"/>
        <circle cx="60" cy="60" r="15" fill="#22d3ee" opacity="0.4"/>

        {/* Rupee symbol */}
        <text x="60" y="72" fontSize="28" fill="#06b6d4" fontWeight="bold" textAnchor="middle">₹</text>
      </g>

      {/* Hands protecting/holding from sides */}
      <g>
        {/* Left hand */}
        <path d="M 20 55 Q 25 50 30 52 L 32 58 Q 35 62 32 65 L 28 68 Q 23 70 20 65 Z"
              fill="#fbbf24" opacity="0.7"/>
        <ellipse cx="26" cy="60" rx="8" ry="10" fill="#f59e0b" opacity="0.6"/>

        {/* Right hand */}
        <path d="M 100 55 Q 95 50 90 52 L 88 58 Q 85 62 88 65 L 92 68 Q 97 70 100 65 Z"
              fill="#fbbf24" opacity="0.7"/>
        <ellipse cx="94" cy="60" rx="8" ry="10" fill="#f59e0b" opacity="0.6"/>
      </g>

      {/* Light rays/sparkles around rupee */}
      <g stroke="#22d3ee" strokeWidth="2" opacity="0.5">
        <line x1="60" y1="35" x2="60" y2="30"/>
        <line x1="75" y1="42" x2="78" y2="38"/>
        <line x1="82" y1="60" x2="87" y2="60"/>
        <line x1="75" y1="78" x2="78" y2="82"/>
        <line x1="45" y1="42" x2="42" y2="38"/>
        <line x1="38" y1="60" x2="33" y2="60"/>
        <line x1="45" y1="78" x2="42" y2="82"/>
      </g>
    </svg>
  ),
};
