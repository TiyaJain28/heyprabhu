/** Faint mandala / rangoli SVG used as a background accent */
export function MandalaPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Concentric rings */}
      {[30, 60, 90, 120, 150, 180].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 6" />
      ))}
      {/* 12 petal outlines */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        const rad = (angle * Math.PI) / 180;
        const x = 200 + 170 * Math.cos(rad);
        const y = 200 + 170 * Math.sin(rad);
        return (
          <ellipse
            key={i}
            cx={(200 + x) / 2}
            cy={(200 + y) / 2}
            rx="18"
            ry="70"
            stroke="currentColor"
            strokeWidth="0.6"
            transform={`rotate(${angle} ${(200 + x) / 2} ${(200 + y) / 2})`}
          />
        );
      })}
      {/* Inner decorative star */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 360) / 8;
        const r = (a * Math.PI) / 180;
        return (
          <line
            key={i}
            x1="200" y1="200"
            x2={200 + 50 * Math.cos(r)}
            y2={200 + 50 * Math.sin(r)}
            stroke="currentColor"
            strokeWidth="0.8"
          />
        );
      })}
      <circle cx="200" cy="200" r="8" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="3" fill="currentColor" />
    </svg>
  );
}

/** Animated diya SVG for the hero section */
export function DiyaIllustration() {
  return (
    <svg
      viewBox="0 0 320 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[320px] mx-auto drop-shadow-xl"
      role="img"
      aria-label="Decorative diya illustration with a glowing flame"
    >
      <radialGradient id="glow" cx="50%" cy="40%" r="40%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.55" />
        <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
      </radialGradient>
      <circle className="glow-circle" cx="160" cy="130" r="58" fill="url(#glow)" />

      {/* Diya body */}
      <ellipse cx="160" cy="230" rx="90" ry="28" fill="#C17A3A" />
      <path
        d="M70 230 Q80 270 160 278 Q240 270 250 230 Q240 250 160 258 Q80 250 70 230Z"
        fill="#A0621E"
      />
      <ellipse cx="160" cy="228" rx="90" ry="16" fill="#D4924A" />
      <ellipse cx="160" cy="226" rx="84" ry="12" fill="#E8A85A" />

      {/* Ghee pool inside */}
      <ellipse cx="160" cy="224" rx="60" ry="9" fill="#F5D88A" />
      <ellipse cx="160" cy="222" rx="48" ry="6" fill="#FDE68A" opacity="0.7" />

      {/* Wick */}
      <line x1="160" y1="222" x2="160" y2="175" stroke="#5C3A1E" strokeWidth="3" strokeLinecap="round" />

      {/* Flame */}
      <g className="flame-shape">
        <path
          d="M160 170 C152 162 148 148 152 134 C156 120 160 108 160 100 C160 108 164 120 168 134 C172 148 168 162 160 170Z"
          fill="#F59E0B"
          opacity="0.9"
        />
        <path
          d="M160 165 C155 158 153 147 156 138 C158 130 160 122 160 116 C160 122 162 130 164 138 C167 147 165 158 160 165Z"
          fill="#FDE68A"
        />
        <path
          d="M160 160 C157.5 155 157 148 158.5 142 C159.5 137 160 132 160 129 C160 132 160.5 137 161.5 142 C163 148 162.5 155 160 160Z"
          fill="white"
          opacity="0.85"
        />
      </g>

      {/* Sparks */}
      {[
        { cx: 148, delay: "0s",   dur: "3s" },
        { cx: 170, delay: "1.2s", dur: "2.8s" },
        { cx: 156, delay: "0.6s", dur: "3.4s" },
        { cx: 164, delay: "1.8s", dur: "2.5s" },
      ].map((s, i) => (
        <circle
          key={i}
          className="spark-particle"
          cx={s.cx}
          cy="168"
          r="2.5"
          fill="#FDE68A"
          style={{ animationDelay: s.delay, animationDuration: s.dur }}
        />
      ))}

      {/* Decorative dots around base */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 360) / 8;
        const r = (a * Math.PI) / 180;
        const ex = 160 + 96 * Math.cos(r);
        const ey = 230 + 18 * Math.sin(r);
        return (
          <circle
            key={i}
            cx={ex}
            cy={ey}
            r="3.5"
            fill={i % 2 === 0 ? "#F59E0B" : "#7A2E0E"}
          />
        );
      })}
    </svg>
  );
}

/** Simple diya icon */
export function DiyaIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="32" cy="46" rx="22" ry="7" fill="#C17A3A" />
      <ellipse cx="32" cy="44" rx="22" ry="5" fill="#D4924A" />
      <ellipse cx="32" cy="43" rx="17" ry="3.5" fill="#F5D88A" />
      <line x1="32" y1="43" x2="32" y2="32" stroke="#5C3A1E" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 30 C29 27 28 23 30 19 C31 16 32 13 32 11 C32 13 33 16 34 19 C36 23 35 27 32 30Z" fill="#F59E0B" />
      <path d="M32 28 C30 25 29.5 22 31 18.5 C31.5 17 32 15 32 13.5 C32 15 32.5 17 33 18.5 C34.5 22 34 25 32 28Z" fill="#FDE68A" />
      <circle cx="32" cy="14" r="1.5" fill="white" opacity="0.9" />
    </svg>
  );
}

/** Incense sticks icon */
export function IncenseIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="50" width="28" height="6" rx="3" fill="#C17A3A" />
      <rect x="24" y="46" width="16" height="6" rx="2" fill="#D4924A" />
      <line x1="28" y1="46" x2="24" y2="12" stroke="#5C3A1E" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="46" x2="32" y2="10" stroke="#5C3A1E" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="46" x2="40" y2="12" stroke="#5C3A1E" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 12 Q22 8 24 5 Q26 2 24 0" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M32 10 Q30 6 32 3 Q34 0 32 -2" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M40 12 Q38 8 40 5 Q42 2 40 0" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <circle cx="24" cy="12" r="2.5" fill="#F59E0B" opacity="0.9" />
      <circle cx="32" cy="10" r="2.5" fill="#FBBF24" opacity="0.9" />
      <circle cx="40" cy="12" r="2.5" fill="#F59E0B" opacity="0.9" />
    </svg>
  );
}

/** Spiritual & Festive Doodle Pattern */
export function DoodleBannerPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M120 180 Q130 220 180 225 Q230 220 240 180 Z" />
        <ellipse cx="180" cy="180" rx="60" ry="12" />
        <path d="M180 170 Q170 140 180 120 Q190 140 180 170" fill="currentColor" fillOpacity="0.1" />

        <path d="M380 90 L380 110 C360 120 345 150 345 180 L415 180 C415 150 400 120 380 110" />
        <ellipse cx="380" cy="180" rx="35" ry="8" />
        <circle cx="380" cy="192" r="6" />

        <path d="M560 220 C540 190 530 160 560 140 C590 160 580 190 560 220 Z" />
        <path d="M530 220 C500 200 500 170 525 155 C545 175 540 205 530 220 Z" />
        <path d="M590 220 C620 200 620 170 595 155 C575 175 580 205 590 220 Z" />

        <line x1="750" y1="230" x2="720" y2="130" />
        <line x1="760" y1="230" x2="760" y2="120" />
        <line x1="770" y1="230" x2="800" y2="135" />
        <path d="M720 125 Q710 100 730 80 T720 50" />
        <path d="M760 115 Q780 95 760 75 T775 45" />

        <path d="M920 120 L926 138 L944 144 L926 150 L920 168 L914 150 L896 144 L914 138 Z" />
        <circle cx="980" cy="100" r="4" fill="currentColor" fillOpacity="0.2" />
        <circle cx="960" cy="200" r="3" fill="currentColor" fillOpacity="0.2" />

        <path d="M1070 170 Q1050 200 1070 230 L1110 230 Q1130 200 1110 170 Z" />
        <ellipse cx="1090" cy="170" rx="20" ry="6" />
        <circle cx="1090" cy="155" r="12" />

        <line x1="50" y1="40" x2="280" y2="40" strokeDasharray="6 6" />
        <line x1="650" y1="280" x2="900" y2="280" strokeDasharray="6 6" />
        <circle cx="280" cy="120" r="28" strokeDasharray="3 3" />
        <rect x="440" y="60" width="40" height="40" rx="8" transform="rotate(45 460 80)" />
      </g>
    </svg>
  );
}

/** 
 * Distinct, beautiful product illustration for each of the 9 products
 * Ensures every single card has its own custom, recognizable artwork.
 */
export function ProductIllustration({
  id,
  name,
  group,
  className = "",
}: {
  id?: number;
  name: string;
  group: string;
  className?: string;
}) {
  // ── 1. Desi Ghee T-Light – Gold Cup – Gifting Pack (Celebratory Gift Box with Gold Diya)
  if (id === 1 || name.toLowerCase().includes("gifting pack")) {
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="#FEF3C7" />
        {/* Festive Gift Box body */}
        <rect x="36" y="80" width="88" height="52" rx="8" fill="#B45309" />
        <rect x="34" y="74" width="92" height="14" rx="5" fill="#D97706" />
        {/* Golden Ribbon around box */}
        <rect x="74" y="74" width="12" height="58" fill="#FBBF24" />
        <rect x="36" y="100" width="88" height="10" fill="#FBBF24" />
        {/* Golden Bow on top */}
        <path d="M80 74 C70 56 50 64 68 74 Z" fill="#F59E0B" />
        <path d="M80 74 C90 56 110 64 92 74 Z" fill="#F59E0B" />
        <circle cx="80" cy="74" r="5" fill="#D97706" />

        {/* Diya glowing in front / on side */}
        <ellipse cx="112" cy="118" rx="22" ry="8" fill="#D97706" />
        <ellipse cx="112" cy="116" rx="18" ry="5" fill="#FEF08A" />
        <line x1="112" y1="115" x2="112" y2="102" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
        <path d="M112 101 C107 96 106 88 109 80 C112 73 112 68 112 65 C112 68 114 73 115 80 C118 88 117 96 112 101 Z" fill="#F59E0B" />
        <path d="M112 99 C109 95 108 90 110 83 C111 78 112 73 112 70 C112 73 113 78 114 83 C116 90 115 95 112 99 Z" fill="#FEF08A" />

        {/* Sparkles */}
        <path d="M46 56 L49 64 L57 67 L49 70 L46 78 L43 70 L35 67 L43 64 Z" fill="#F59E0B" opacity="0.9" />
        <circle cx="128" cy="62" r="3" fill="#FBBF24" />
      </svg>
    );
  }

  // ── 2. Desi Ghee T-Lights – Gold Cup (25 pcs) (Tiered cluster of 3 Gold Cups)
  if (id === 2 || (name.toLowerCase().includes("gold cup") && name.includes("25"))) {
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="#FFFBEB" />

        {/* Back-left Gold Cup */}
        <ellipse cx="56" cy="100" rx="26" ry="9" fill="#B45309" />
        <path d="M30 100 Q36 116 56 118 Q76 116 82 100 Z" fill="#D97706" />
        <ellipse cx="56" cy="98" rx="22" ry="6" fill="#FDE047" />
        <line x1="56" y1="97" x2="56" y2="78" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
        <path d="M56 77 C52 72 50 64 53 58 C55 52 56 46 56 42 C56 46 57 52 59 58 C62 64 60 72 56 77 Z" fill="#F59E0B" />
        <path d="M56 75 C54 71 53 66 54 61 C55 56 56 50 56 46 C56 50 57 56 58 61 C59 66 58 71 56 75 Z" fill="#FEF08A" />

        {/* Back-right Gold Cup */}
        <ellipse cx="104" cy="100" rx="26" ry="9" fill="#B45309" />
        <path d="M78 100 Q84 116 104 118 Q124 116 130 100 Z" fill="#D97706" />
        <ellipse cx="104" cy="98" rx="22" ry="6" fill="#FDE047" />
        <line x1="104" y1="97" x2="104" y2="78" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
        <path d="M104 77 C100 72 98 64 101 58 C103 52 104 46 104 42 C104 46 105 52 107 58 C110 64 108 72 104 77 Z" fill="#F59E0B" />
        <path d="M104 75 C102 71 101 66 102 61 C103 56 104 50 104 46 C104 50 105 56 106 61 C107 66 106 71 104 75 Z" fill="#FEF08A" />

        {/* Center Main Gold Cup */}
        <ellipse cx="80" cy="116" rx="34" ry="12" fill="#92400E" />
        <path d="M46 116 Q52 136 80 140 Q108 136 114 116 Z" fill="#D97706" />
        <ellipse cx="80" cy="114" rx="32" ry="8" fill="#F59E0B" />
        <ellipse cx="80" cy="112" rx="26" ry="6" fill="#FEF08A" />
        <line x1="80" y1="111" x2="80" y2="88" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />
        {/* Main flame */}
        <path d="M80 87 C74 80 72 70 75 60 C78 50 80 40 80 34 C80 40 82 50 85 60 C88 70 86 80 80 87 Z" fill="#F59E0B" />
        <path d="M80 84 C76 78 75 70 77 62 C79 54 80 46 80 40 C80 46 81 54 83 62 C85 70 84 78 80 84 Z" fill="#FEF08A" />
      </svg>
    );
  }

  // ── 3. Desi Ghee T-Lights – Gold Cup (50 pcs) (Festive brass thali/tray with multiple diyas)
  if (id === 3 || (name.toLowerCase().includes("gold cup") && name.includes("50"))) {
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="#FEF3C7" />
        {/* Grand Brass Pooja Thali Base */}
        <ellipse cx="80" cy="118" rx="56" ry="18" fill="#B45309" />
        <ellipse cx="80" cy="116" rx="52" ry="15" fill="#F59E0B" />
        <ellipse cx="80" cy="114" rx="46" ry="12" fill="#D97706" />

        {/* 5 Shimmering gold tealights arranged on thali */}
        {/* Left */}
        <ellipse cx="44" cy="112" rx="14" ry="5" fill="#FEF08A" />
        <path d="M44 108 C42 103 41 96 44 90 C46 96 45 103 44 108 Z" fill="#F59E0B" />

        {/* Center-Left */}
        <ellipse cx="62" cy="118" rx="16" ry="6" fill="#FEF08A" />
        <path d="M62 113 C59 106 58 97 62 90 C65 97 64 106 62 113 Z" fill="#F59E0B" />

        {/* Center Main Diya */}
        <ellipse cx="80" cy="120" rx="18" ry="7" fill="#FEF08A" />
        <line x1="80" y1="119" x2="80" y2="98" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
        <path d="M80 97 C74 88 72 76 76 64 C79 54 80 44 80 38 C80 44 81 54 84 64 C88 76 86 88 80 97 Z" fill="#F59E0B" />
        <path d="M80 94 C76 86 75 77 78 67 C80 58 80 50 80 44 C80 50 80 58 82 67 C85 77 84 86 80 94 Z" fill="#FEF08A" />

        {/* Center-Right */}
        <ellipse cx="98" cy="118" rx="16" ry="6" fill="#FEF08A" />
        <path d="M98 113 C95 106 94 97 98 90 C101 97 100 106 98 113 Z" fill="#F59E0B" />

        {/* Right */}
        <ellipse cx="116" cy="112" rx="14" ry="5" fill="#FEF08A" />
        <path d="M116 108 C114 103 113 96 116 90 C118 96 117 103 116 108 Z" fill="#F59E0B" />

        {/* Grand Sparkles */}
        <path d="M38 58 L41 65 L48 67 L41 69 L38 76 L35 69 L28 67 L35 65 Z" fill="#F59E0B" />
        <path d="M122 52 L124 58 L130 60 L124 62 L122 68 L120 62 L114 60 L120 58 Z" fill="#F59E0B" />
      </svg>
    );
  }

  // ── 4. Desi Ghee T-Light – Gold Cup – Sample Pack (Single elegant minimalist gold cup)
  if (id === 4 || name.toLowerCase().includes("sample pack")) {
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="#FFFDF5" />
        {/* Coaster pedestal */}
        <ellipse cx="80" cy="126" rx="42" ry="12" fill="#E2E8F0" />
        <ellipse cx="80" cy="123" rx="40" ry="10" fill="#F8FAFC" />

        {/* Single Pure Gold Cup */}
        <ellipse cx="80" cy="112" rx="36" ry="12" fill="#B45309" />
        <path d="M44 112 Q50 134 80 138 Q110 134 116 112 Z" fill="#D97706" />
        <ellipse cx="80" cy="110" rx="34" ry="9" fill="#F59E0B" />
        <ellipse cx="80" cy="108" rx="28" ry="6" fill="#FEF08A" />

        {/* Wick */}
        <line x1="80" y1="107" x2="80" y2="82" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />

        {/* Tall clear flame */}
        <path d="M80 81 C73 73 70 61 74 48 C78 36 80 26 80 20 C80 26 82 36 86 48 C90 61 87 73 80 81 Z" fill="#F59E0B" />
        <path d="M80 78 C75 71 73 61 76 50 C78 40 80 32 80 25 C80 32 82 40 84 50 C87 61 85 71 80 78 Z" fill="#FEF08A" />

        {/* Dainty Sample ribbon tag */}
        <rect x="28" y="44" width="36" height="16" rx="8" fill="#F59E0B" />
        <text x="46" y="55" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">1 pc</text>
      </svg>
    );
  }

  // ── 5. Desi Ghee Terracotta Diya – Mogra (Clay Diya surrounded by White & Yellow Mogra / Jasmine)
  if (id === 5 || name.toLowerCase().includes("mogra")) {
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="#FBFBF4" />

        {/* Mogra Jasmine floral wreath below diya */}
        {/* Left leaf & jasmine flower */}
        <ellipse cx="36" cy="120" rx="10" ry="5" fill="#15803D" transform="rotate(-30 36 120)" />
        <circle cx="44" cy="114" r="7" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="44" cy="114" r="3" fill="#FDE047" />

        {/* Right leaf & jasmine flower */}
        <ellipse cx="124" cy="120" rx="10" ry="5" fill="#15803D" transform="rotate(30 124 120)" />
        <circle cx="116" cy="114" r="7" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="116" cy="114" r="3" fill="#FDE047" />

        {/* Front center jasmine bud */}
        <circle cx="80" cy="136" r="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="80" cy="136" r="2.5" fill="#FDE047" />

        {/* Terracotta Earthen Diya Body */}
        <ellipse cx="80" cy="114" rx="44" ry="16" fill="#831843" />
        <path d="M36 114 Q42 136 80 140 Q118 136 124 114 Z" fill="#9A3412" />
        <ellipse cx="80" cy="112" rx="42" ry="11" fill="#C2410C" />
        <ellipse cx="80" cy="110" rx="34" ry="8" fill="#FDBA74" />
        <ellipse cx="80" cy="108" rx="26" ry="5" fill="#FEF08A" />

        {/* Decorative white dots on diya rim */}
        {[-30, -15, 0, 15, 30].map((deg) => (
          <circle
            key={deg}
            cx={80 + 36 * Math.sin((deg * Math.PI) / 180)}
            cy={112 + 8 * Math.cos((deg * Math.PI) / 180)}
            r="2.5"
            fill="#FFFFFF"
          />
        ))}

        {/* Wick */}
        <line x1="80" y1="108" x2="80" y2="82" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />

        {/* Warm Golden Mogra Scented Flame */}
        <path d="M80 81 C73 73 70 61 74 48 C78 36 80 26 80 20 C80 26 82 36 86 48 C90 61 87 73 80 81 Z" fill="#EA580C" />
        <path d="M80 78 C75 71 73 61 76 50 C78 40 80 32 80 25 C80 32 82 40 84 50 C87 61 85 71 80 78 Z" fill="#FDE047" />
      </svg>
    );
  }

  // ── 6. Desi Ghee Terracotta Diya – Lavender (Terracotta Diya with Lavender sprigs & purple motif)
  if (id === 6 || (name.toLowerCase().includes("terracotta") && name.toLowerCase().includes("lavender"))) {
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="#FAF5FF" />

        {/* Left Lavender Sprig */}
        <path d="M42 128 Q36 90 28 65" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="27" cy="65" rx="4" ry="7" fill="#9333EA" transform="rotate(-15 27 65)" />
        <ellipse cx="31" cy="74" rx="4" ry="7" fill="#A855F7" transform="rotate(15 31 74)" />
        <ellipse cx="30" cy="84" rx="4" ry="7" fill="#7E22CE" transform="rotate(-10 30 84)" />

        {/* Right Lavender Sprig */}
        <path d="M118 128 Q124 90 132 65" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="133" cy="65" rx="4" ry="7" fill="#9333EA" transform="rotate(15 133 65)" />
        <ellipse cx="129" cy="74" rx="4" ry="7" fill="#A855F7" transform="rotate(-15 129 74)" />
        <ellipse cx="130" cy="84" rx="4" ry="7" fill="#7E22CE" transform="rotate(10 130 84)" />

        {/* Terracotta Diya Body */}
        <ellipse cx="80" cy="116" rx="44" ry="16" fill="#701A75" />
        <path d="M36 116 Q42 138 80 142 Q118 138 124 116 Z" fill="#9A3412" />
        <ellipse cx="80" cy="114" rx="42" ry="11" fill="#C2410C" />
        <ellipse cx="80" cy="112" rx="34" ry="8" fill="#E9D5FF" />
        <ellipse cx="80" cy="110" rx="26" ry="5" fill="#FEF08A" />

        {/* Purple Gemstone / petal rim dots */}
        {[-30, -15, 0, 15, 30].map((deg) => (
          <circle
            key={deg}
            cx={80 + 36 * Math.sin((deg * Math.PI) / 180)}
            cy={114 + 8 * Math.cos((deg * Math.PI) / 180)}
            r="2.5"
            fill="#9333EA"
          />
        ))}

        {/* Wick */}
        <line x1="80" y1="110" x2="80" y2="84" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />

        {/* Glowing Flame */}
        <path d="M80 83 C73 75 70 63 74 50 C78 38 80 28 80 22 C80 28 82 38 86 50 C90 63 87 75 80 83 Z" fill="#C026D3" />
        <path d="M80 80 C75 73 73 63 76 52 C78 42 80 34 80 27 C80 34 82 42 84 52 C87 63 85 73 80 80 Z" fill="#FEF08A" />
      </svg>
    );
  }

  // ── 7. Hey Prabhu Special Incense Sticks (Ornate brass lotus burner with rich golden aroma ribbons)
  if (id === 7 || name.toLowerCase().includes("special incense")) {
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="#FEF3C7" />

        {/* Ornate Brass Lotus Incense Burner */}
        <ellipse cx="80" cy="128" rx="46" ry="12" fill="#78350F" />
        <path d="M42 124 C46 114 54 110 80 110 C106 110 114 114 118 124 Z" fill="#B45309" />
        {/* Lotus petals carved on burner */}
        <path d="M60 120 C64 112 72 110 80 120 C88 110 96 112 100 120" stroke="#FBBF24" strokeWidth="2" fill="none" />
        <ellipse cx="80" cy="112" rx="28" ry="6" fill="#F59E0B" />

        {/* 4 Fan-arranged Incense Sticks */}
        <line x1="68" y1="110" x2="48" y2="42" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <line x1="76" y1="110" x2="68" y2="34" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <line x1="84" y1="110" x2="92" y2="34" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <line x1="92" y1="110" x2="112" y2="42" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />

        {/* Glowing embers on tips */}
        <circle cx="48" cy="42" r="3.5" fill="#EF4444" className="animate-pulse" />
        <circle cx="68" cy="34" r="4" fill="#F59E0B" className="animate-pulse" />
        <circle cx="92" cy="34" r="4" fill="#F59E0B" className="animate-pulse" />
        <circle cx="112" cy="42" r="3.5" fill="#EF4444" className="animate-pulse" />

        {/* Swirling Fragrant Golden Smoke Ribbons */}
        <path d="M68 30 Q55 16 75 8 T70 0" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <path d="M92 30 Q105 16 85 8 T90 0" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

        {/* Divine Sparkles */}
        <path d="M34 50 L37 56 L43 58 L37 60 L34 66 L31 60 L25 58 L31 56 Z" fill="#D97706" />
        <path d="M126 54 L128 59 L133 60 L128 62 L126 67 L124 62 L119 60 L124 59 Z" fill="#D97706" />
      </svg>
    );
  }

  // ── 8. Lavender Incense Sticks (Incense Sticks with Blooming Lavender Botanical Sprigs)
  if (id === 8 || (name.toLowerCase().includes("lavender") && name.toLowerCase().includes("incense"))) {
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="#F5F3FF" />

        {/* Botanical Lavender Stalk beside holder */}
        <path d="M110 130 Q120 95 125 60" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="125" cy="58" rx="4" ry="6" fill="#7C3AED" />
        <ellipse cx="122" cy="68" rx="3.5" ry="6" fill="#8B5CF6" />
        <ellipse cx="126" cy="78" rx="3.5" ry="6" fill="#6D28D9" />
        <ellipse cx="121" cy="88" rx="3.5" ry="6" fill="#7C3AED" />

        {/* Modern Ceramic Holder */}
        <rect x="38" y="118" width="68" height="14" rx="7" fill="#C4B5FD" />
        <rect x="46" y="112" width="52" height="10" rx="5" fill="#7C3AED" />

        {/* Purple-hued Incense Sticks */}
        <line x1="56" y1="112" x2="48" y2="38" stroke="#4C1D95" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="72" y1="112" x2="70" y2="30" stroke="#5B21B6" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="88" y1="112" x2="94" y2="38" stroke="#4C1D95" strokeWidth="3.5" strokeLinecap="round" />

        {/* Glowing Embers */}
        <circle cx="48" cy="38" r="4" fill="#C084FC" className="animate-pulse" />
        <circle cx="70" cy="30" r="4.5" fill="#E879F9" className="animate-pulse" />
        <circle cx="94" cy="38" r="4" fill="#C084FC" className="animate-pulse" />

        {/* Lilac Soothing Aroma Smoke */}
        <path d="M48 34 Q38 18 52 10 T46 0" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
        <path d="M70 26 Q58 14 74 6 T66 -2" stroke="#9333EA" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
        <path d="M94 34 Q106 18 92 10 T100 0" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      </svg>
    );
  }

  // ── 9. Rose Incense Sticks (Incense Sticks with Blooming Pink-Red Rose & Petals)
  if (id === 9 || name.toLowerCase().includes("rose")) {
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="#FFF1F2" />

        {/* Blooming Rose Blossom on the left */}
        <ellipse cx="44" cy="116" rx="8" ry="4" fill="#15803D" transform="rotate(-20 44 116)" />
        {/* Outer rose petals */}
        <circle cx="44" cy="108" r="14" fill="#E11D48" />
        <circle cx="40" cy="106" r="10" fill="#F43F5E" />
        <circle cx="47" cy="107" r="9" fill="#FB7185" />
        <circle cx="44" cy="106" r="5" fill="#FECDD3" />
        {/* Rose petal fallen */}
        <path d="M28 128 C26 122 34 120 36 126 C38 132 30 134 28 128 Z" fill="#FB7185" />

        {/* Holder */}
        <rect x="64" y="120" width="56" height="12" rx="6" fill="#F43F5E" />
        <rect x="72" y="114" width="40" height="10" rx="5" fill="#BE123C" />

        {/* Rose Incense Sticks */}
        <line x1="82" y1="114" x2="80" y2="34" stroke="#881337" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="94" y1="114" x2="102" y2="40" stroke="#881337" strokeWidth="3.5" strokeLinecap="round" />

        {/* Glowing Tips */}
        <circle cx="80" cy="34" r="4.5" fill="#FB7185" className="animate-pulse" />
        <circle cx="102" cy="40" r="4" fill="#F43F5E" className="animate-pulse" />

        {/* Floral Fragrant Smoke Swirls */}
        <path d="M80 30 Q68 16 84 8 T76 0" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
        <path d="M102 36 Q114 20 100 12 T108 2" stroke="#FB7185" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      </svg>
    );
  }

  // Fallback generic diya illustration
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="62" fill="#FEF3C7" />
      <ellipse cx="80" cy="112" rx="46" ry="16" fill="#B45309" />
      <path d="M34 112 Q42 136 80 140 Q118 136 126 112 Z" fill="#D97706" />
      <ellipse cx="80" cy="110" rx="44" ry="11" fill="#F59E0B" />
      <ellipse cx="80" cy="108" rx="34" ry="8" fill="#FEF08A" />
      <line x1="80" y1="107" x2="80" y2="80" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 79 C73 71 70 59 74 46 C78 34 80 24 80 18 C80 24 82 34 86 46 C90 59 87 71 80 79 Z" fill="#F59E0B" />
      <path d="M80 76 C75 69 73 59 76 48 C78 38 80 30 80 23 C80 30 82 38 84 48 C87 59 85 69 80 76 Z" fill="#FEF08A" />
    </svg>
  );
}
