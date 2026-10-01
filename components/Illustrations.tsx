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
      {/* Glow halo */}
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
      {/* Diya rim highlight */}
      <ellipse cx="160" cy="228" rx="90" ry="16" fill="#D4924A" />
      <ellipse cx="160" cy="226" rx="84" ry="12" fill="#E8A85A" />

      {/* Ghee pool inside */}
      <ellipse cx="160" cy="224" rx="60" ry="9" fill="#F5D88A" />
      <ellipse cx="160" cy="222" rx="48" ry="6" fill="#FDE68A" opacity="0.7" />

      {/* Wick */}
      <line x1="160" y1="222" x2="160" y2="175" stroke="#5C3A1E" strokeWidth="3" strokeLinecap="round" />

      {/* Flame — with flicker animation */}
      <g className="flame-shape">
        {/* Outer flame */}
        <path
          d="M160 170 C152 162 148 148 152 134 C156 120 160 108 160 100 C160 108 164 120 168 134 C172 148 168 162 160 170Z"
          fill="#F59E0B"
          opacity="0.9"
        />
        {/* Inner flame */}
        <path
          d="M160 165 C155 158 153 147 156 138 C158 130 160 122 160 116 C160 122 162 130 164 138 C167 147 165 158 160 165Z"
          fill="#FDE68A"
        />
        {/* Core */}
        <path
          d="M160 160 C157.5 155 157 148 158.5 142 C159.5 137 160 132 160 129 C160 132 160.5 137 161.5 142 C163 148 162.5 155 160 160Z"
          fill="white"
          opacity="0.85"
        />
      </g>

      {/* Sparks / particles */}
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

/** Simple diya icon for product cards */
export function DiyaIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
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

/** Incense sticks icon for product cards */
export function IncenseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
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

/** Spiritual & Festive Doodle Pattern inspired by the STUTI charcoal banner reference */
export function DoodleBannerPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Repeating playful devotional doodles */}
        {/* Diya 1 */}
        <path d="M120 180 Q130 220 180 225 Q230 220 240 180 Z" />
        <ellipse cx="180" cy="180" rx="60" ry="12" />
        <path d="M180 170 Q170 140 180 120 Q190 140 180 170" fill="currentColor" fillOpacity="0.1" />

        {/* Bell 1 */}
        <path d="M380 90 L380 110 C360 120 345 150 345 180 L415 180 C415 150 400 120 380 110" />
        <ellipse cx="380" cy="180" rx="35" ry="8" />
        <circle cx="380" cy="192" r="6" />

        {/* Lotus petal cluster */}
        <path d="M560 220 C540 190 530 160 560 140 C590 160 580 190 560 220 Z" />
        <path d="M530 220 C500 200 500 170 525 155 C545 175 540 205 530 220 Z" />
        <path d="M590 220 C620 200 620 170 595 155 C575 175 580 205 590 220 Z" />

        {/* Incense sticks with smoke coils */}
        <line x1="750" y1="230" x2="720" y2="130" />
        <line x1="760" y1="230" x2="760" y2="120" />
        <line x1="770" y1="230" x2="800" y2="135" />
        <path d="M720 125 Q710 100 730 80 T720 50" />
        <path d="M760 115 Q780 95 760 75 T775 45" />

        {/* Star & sparkles */}
        <path d="M920 120 L926 138 L944 144 L926 150 L920 168 L914 150 L896 144 L914 138 Z" />
        <circle cx="980" cy="100" r="4" fill="currentColor" fillOpacity="0.2" />
        <circle cx="960" cy="200" r="3" fill="currentColor" fillOpacity="0.2" />

        {/* Kalash with mango leaves */}
        <path d="M1070 170 Q1050 200 1070 230 L1110 230 Q1130 200 1110 170 Z" />
        <ellipse cx="1090" cy="170" rx="20" ry="6" />
        <circle cx="1090" cy="155" r="12" />

        {/* Geometric aesthetic lines matching screenshot */}
        <line x1="50" y1="40" x2="280" y2="40" strokeDasharray="6 6" />
        <line x1="650" y1="280" x2="900" y2="280" strokeDasharray="6 6" />
        <circle cx="280" cy="120" r="28" strokeDasharray="3 3" />
        <rect x="440" y="60" width="40" height="40" rx="8" transform="rotate(45 460 80)" />
      </g>
    </svg>
  );
}

/** Product-specific illustration for the high-energy e-commerce look */
export function ProductIllustration({
  name,
  group,
  className = "",
}: {
  name: string;
  group: string;
  className?: string;
}) {
  const isIncense = group === "Incense Sticks";
  const isGoldCup = name.toLowerCase().includes("gold cup");
  const isLavender = name.toLowerCase().includes("lavender");
  const isMogra = name.toLowerCase().includes("mogra");
  const isRose = name.toLowerCase().includes("rose");

  if (isIncense) {
    const tipColor = isRose ? "#F43F5E" : isLavender ? "#A855F7" : "#F59E0B";
    const stickColor = isRose ? "#E11D48" : isLavender ? "#7E22CE" : "#B45309";
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        {/* Festive circle glow */}
        <circle cx="80" cy="80" r="62" fill={isRose ? "#FFE4E6" : isLavender ? "#F3E8FF" : "#FEF3C7"} />
        {/* Incense holder */}
        <rect x="42" y="118" width="76" height="14" rx="7" fill="#78350F" />
        <rect x="52" y="112" width="56" height="10" rx="5" fill="#D97706" />
        {/* Sticks */}
        <line x1="65" y1="112" x2="52" y2="42" stroke={stickColor} strokeWidth="3.5" strokeLinecap="round" />
        <line x1="80" y1="112" x2="80" y2="35" stroke={stickColor} strokeWidth="3.5" strokeLinecap="round" />
        <line x1="95" y1="112" x2="108" y2="42" stroke={stickColor} strokeWidth="3.5" strokeLinecap="round" />
        {/* Glowing tips */}
        <circle cx="52" cy="42" r="4.5" fill={tipColor} className="animate-pulse" />
        <circle cx="80" cy="35" r="4.5" fill={tipColor} className="animate-pulse" />
        <circle cx="108" cy="42" r="4.5" fill={tipColor} className="animate-pulse" />
        {/* Swirling fragrant smoke */}
        <path d="M52 38 Q42 22 55 12 T50 2" stroke={tipColor} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M80 30 Q70 16 85 8 T78 0" stroke={tipColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
        <path d="M108 38 Q120 22 108 12 T115 2" stroke={tipColor} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        {/* Sparkles */}
        <circle cx="34" cy="50" r="2" fill={tipColor} />
        <circle cx="126" cy="65" r="2.5" fill={tipColor} />
      </svg>
    );
  }

  /* Desi Ghee products: Gold Cup, Mogra Diya, Lavender Diya, etc. */
  if (isGoldCup) {
    return (
      <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
        <circle cx="80" cy="80" r="62" fill="#FEF3C7" />
        {/* Golden Cup Diya */}
        <ellipse cx="80" cy="110" rx="46" ry="16" fill="#B45309" />
        <path d="M34 110 Q42 134 80 138 Q118 134 126 110 Z" fill="#D97706" />
        <ellipse cx="80" cy="108" rx="46" ry="12" fill="#F59E0B" />
        <ellipse cx="80" cy="106" rx="40" ry="9" fill="#FDE047" />
        <ellipse cx="80" cy="105" rx="32" ry="6" fill="#FEF08A" />
        {/* Wick */}
        <line x1="80" y1="104" x2="80" y2="76" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />
        {/* Flame */}
        <path
          d="M80 75 C72 68 70 56 74 44 C78 33 80 25 80 20 C80 25 82 33 86 44 C90 56 88 68 80 75 Z"
          fill="#F59E0B"
          className="flame-shape"
        />
        <path
          d="M80 72 C75 66 74 58 77 48 C79 40 80 34 80 28 C80 34 81 40 83 48 C86 58 85 66 80 72 Z"
          fill="#FEF08A"
        />
        {/* Gold shines */}
        <path d="M48 116 Q80 128 112 116" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      </svg>
    );
  }

  /* Mogra or Lavender Terracotta Diya */
  const flowerColor = isLavender ? "#9333EA" : "#F59E0B";
  const petalBg = isLavender ? "#FAF5FF" : "#FEF3C7";

  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="62" fill={petalBg} />
      {/* Terracotta Earthen Diya */}
      <ellipse cx="80" cy="112" rx="48" ry="18" fill="#9A3412" />
      <path d="M32 112 Q40 138 80 142 Q120 138 128 112 Z" fill="#C2410C" />
      <ellipse cx="80" cy="110" rx="46" ry="12" fill="#EA580C" />
      <ellipse cx="80" cy="108" rx="38" ry="8" fill="#FDBA74" />
      <ellipse cx="80" cy="106" rx="28" ry="5" fill="#FEF08A" />
      {/* Floral petal rim accents */}
      {[-30, -15, 0, 15, 30].map((deg) => (
        <circle
          key={deg}
          cx={80 + 38 * Math.sin((deg * Math.PI) / 180)}
          cy={110 + 10 * Math.cos((deg * Math.PI) / 180)}
          r="3"
          fill={flowerColor}
        />
      ))}
      {/* Wick */}
      <line x1="80" y1="106" x2="80" y2="76" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" />
      {/* Flame */}
      <path
        d="M80 75 C72 68 70 56 74 44 C78 33 80 25 80 20 C80 25 82 33 86 44 C90 56 88 68 80 75 Z"
        fill="#F59E0B"
        className="flame-shape"
      />
      <path
        d="M80 72 C75 66 74 58 77 48 C79 40 80 34 80 28 C80 34 81 40 83 48 C86 58 85 66 80 72 Z"
        fill="#FEF08A"
      />
    </svg>
  );
}
