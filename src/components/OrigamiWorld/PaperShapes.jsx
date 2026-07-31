import React from 'react';

/*
 * Cartoon-illustration SVG shapes for the war-themed animated background.
 * Uses smooth curves, rich fills, and layered detail for a hand-drawn feel.
 * data-mover elements are animated by the motion engine in OrigamiWorld.jsx.
 */

/* ═══════════════════════ SKY ELEMENTS ═══════════════════════ */

export function PaperSun(props) {
  return (
    <svg viewBox="0 0 120 120" {...props}>
      <defs>
        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF7AE" />
          <stop offset="60%" stopColor="#FFD93D" />
          <stop offset="100%" stopColor="#F4A623" />
        </radialGradient>
      </defs>
      <g data-mover="spin" style={{ transformOrigin: '60px 60px' }}>
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30);
          return (
            <ellipse
              key={i}
              cx="60" cy="20" rx="5" ry="16"
              fill="#FFD93D"
              opacity={0.7}
              transform={`rotate(${a} 60 60)`}
            />
          );
        })}
        <circle cx="60" cy="60" r="28" fill="url(#sunGrad)" />
        <circle cx="52" cy="52" r="6" fill="rgba(255,255,255,0.3)" />
      </g>
    </svg>
  );
}

export function PaperMoon(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <defs>
        <radialGradient id="moonGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="100%" stopColor="#E0C97A" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="38" fill="url(#moonGrad)" />
      {/* Craters */}
      <circle cx="38" cy="40" r="6" fill="rgba(0,0,0,0.08)" />
      <circle cx="58" cy="55" r="4" fill="rgba(0,0,0,0.06)" />
      <circle cx="45" cy="62" r="3" fill="rgba(0,0,0,0.07)" />
      {/* Glow */}
      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,249,196,0.3)" strokeWidth="4" />
    </svg>
  );
}

export function PaperCloud(props) {
  return (
    <svg viewBox="0 0 140 60" {...props}>
      <ellipse cx="70" cy="38" rx="50" ry="20" fill="currentColor" opacity="0.9" />
      <ellipse cx="45" cy="32" rx="28" ry="18" fill="currentColor" />
      <ellipse cx="95" cy="34" rx="24" ry="16" fill="currentColor" />
      <ellipse cx="65" cy="26" rx="22" ry="14" fill="currentColor" />
      {/* Highlight */}
      <ellipse cx="55" cy="28" rx="16" ry="8" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}

export function PaperBat(props) {
  return (
    <svg viewBox="0 0 100 50" {...props}>
      {/* Left wing */}
      <g data-mover="wing" data-side="left" style={{ transformOrigin: '46px 26px' }}>
        <path d="M46,26 Q30,8 6,12 Q14,18 12,24 Q20,20 24,26 Q28,22 34,28 Q38,24 46,28 Z"
          fill="#2D2D2D" />
        <path d="M46,26 Q38,20 30,22 Q36,24 46,28 Z" fill="rgba(255,255,255,0.05)" />
      </g>
      {/* Right wing */}
      <g data-mover="wing" data-side="right" style={{ transformOrigin: '54px 26px' }}>
        <path d="M54,26 Q70,8 94,12 Q86,18 88,24 Q80,20 76,26 Q72,22 66,28 Q62,24 54,28 Z"
          fill="#2D2D2D" />
        <path d="M54,26 Q62,20 70,22 Q64,24 54,28 Z" fill="rgba(255,255,255,0.05)" />
      </g>
      {/* Body */}
      <ellipse cx="50" cy="28" rx="7" ry="10" fill="#1A1A1A" />
      {/* Head */}
      <circle cx="50" cy="20" r="5" fill="#1A1A1A" />
      {/* Ears */}
      <path d="M45,16 L43,10 L47,15 Z" fill="#2D2D2D" />
      <path d="M55,16 L57,10 L53,15 Z" fill="#2D2D2D" />
      {/* Eyes */}
      <circle cx="48" cy="19" r="1.5" fill="#FFD700" />
      <circle cx="52" cy="19" r="1.5" fill="#FFD700" />
    </svg>
  );
}

export function PaperDragon(props) {
  return (
    <svg viewBox="0 0 200 110" {...props}>
      {/* Left wing */}
      <g data-mover="wing" data-side="left" style={{ transformOrigin: '85px 55px' }}>
        <path d="M85,50 Q55,20 25,18 Q30,30 22,40 Q40,34 50,42 Q56,36 65,44 Q72,38 85,50 Z"
          fill="#8B0000" opacity="0.9" />
        <path d="M85,50 Q70,38 55,42 Q68,44 85,52 Z" fill="rgba(255,100,100,0.15)" />
      </g>
      {/* Right wing */}
      <g data-mover="wing" data-side="right" style={{ transformOrigin: '95px 55px' }}>
        <path d="M95,50 Q125,20 155,18 Q150,30 158,40 Q140,34 130,42 Q124,36 115,44 Q108,38 95,50 Z"
          fill="#8B0000" opacity="0.9" />
        <path d="M95,50 Q110,38 125,42 Q112,44 95,52 Z" fill="rgba(255,100,100,0.15)" />
      </g>
      {/* Body */}
      <ellipse cx="90" cy="58" rx="18" ry="14" fill="#6B0000" />
      <ellipse cx="90" cy="56" rx="16" ry="11" fill="#8B0000" />
      {/* Belly */}
      <ellipse cx="90" cy="62" rx="10" ry="8" fill="#CD5C5C" opacity="0.5" />
      {/* Neck */}
      <path d="M105,52 Q118,44 128,42 Q126,48 120,54 Q112,52 105,56 Z" fill="#8B0000" />
      {/* Head */}
      <ellipse cx="132" cy="40" rx="10" ry="7" fill="#8B0000" />
      <ellipse cx="132" cy="38" rx="8" ry="5" fill="#9B1111" />
      {/* Eye */}
      <circle cx="135" cy="38" r="2.5" fill="#FFD700" />
      <circle cx="135.5" cy="38" r="1" fill="#000" />
      {/* Snout fire */}
      <path d="M142,40 Q148,38 152,36 Q149,40 152,44 Q148,42 142,40 Z" fill="#FF6600" opacity="0.8" />
      {/* Horns */}
      <path d="M128,34 L126,28 L130,33 Z" fill="#4A0000" />
      <path d="M134,33 L136,27 L136,33 Z" fill="#4A0000" />
      {/* Tail */}
      <path d="M72,58 Q58,62 48,58 Q44,62 38,58 L42,55 Q48,60 56,56 Q62,60 72,56 Z" fill="#8B0000" />
      {/* Tail spike */}
      <path d="M38,58 L32,54 L36,60 Z" fill="#6B0000" />
      {/* Spikes on back */}
      <path d="M82,46 L80,40 L84,45 Z" fill="#6B0000" />
      <path d="M88,44 L87,38 L90,44 Z" fill="#6B0000" />
      <path d="M94,44 L94,38 L96,44 Z" fill="#6B0000" />
    </svg>
  );
}

export function PaperFireball(props) {
  return (
    <svg viewBox="0 0 70 70" {...props}>
      <defs>
        <radialGradient id="fireGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF176" />
          <stop offset="40%" stopColor="#FF9800" />
          <stop offset="100%" stopColor="#E65100" />
        </radialGradient>
      </defs>
      <g data-mover="spin" style={{ transformOrigin: '35px 35px' }}>
        {/* Outer flames */}
        <path d="M35,5 Q42,15 38,22 Q44,18 48,10 Q46,22 42,26" fill="#FF6D00" opacity="0.7" />
        <path d="M55,18 Q58,26 54,32 Q60,28 64,22 Q60,32 56,34" fill="#FF6D00" opacity="0.6" />
        <path d="M35,65 Q28,55 32,48 Q26,52 22,60 Q24,48 28,44" fill="#FF6D00" opacity="0.5" />
        <path d="M12,38 Q18,32 24,34 Q18,28 14,22 Q20,30 24,32" fill="#FF6D00" opacity="0.5" />
        {/* Core */}
        <circle cx="35" cy="35" r="16" fill="url(#fireGrad)" />
        {/* Inner glow */}
        <circle cx="32" cy="32" r="6" fill="rgba(255,255,255,0.3)" />
      </g>
    </svg>
  );
}

export function PaperArrow(props) {
  return (
    <svg viewBox="0 0 110 24" {...props}>
      {/* Shaft */}
      <rect x="16" y="10" width="68" height="4" rx="1" fill="#8B6914" />
      {/* Shaft grain */}
      <rect x="20" y="11" width="60" height="1.5" rx="0.5" fill="rgba(255,255,255,0.1)" />
      {/* Arrowhead */}
      <path d="M84,6 L104,12 L84,18 L88,12 Z" fill="#808080" />
      <path d="M84,6 L104,12 L88,12 Z" fill="#A0A0A0" />
      {/* Fletching */}
      <path d="M16,4 Q22,8 16,10 Q12,8 16,4 Z" fill="#CD5C5C" />
      <path d="M16,14 Q22,16 16,20 Q12,16 16,14 Z" fill="#CD5C5C" />
      <path d="M10,6 Q16,9 10,11 Q7,9 10,6 Z" fill="#8B0000" opacity="0.8" />
      <path d="M10,13 Q16,15 10,18 Q7,15 10,13 Z" fill="#8B0000" opacity="0.8" />
    </svg>
  );
}

/* ═══════════════════════ GROUND ELEMENTS ═══════════════════════ */

export function PaperWarrior(props) {
  return (
    <svg viewBox="0 0 60 120" {...props}>
      {/* Shadow */}
      <ellipse cx="30" cy="116" rx="16" ry="3" fill="rgba(0,0,0,0.2)" />
      {/* Legs */}
      <rect x="20" y="72" width="8" height="36" rx="3" fill="#5D4E37" />
      <rect x="32" y="72" width="8" height="36" rx="3" fill="#4A3F2E" />
      {/* Boots */}
      <path d="M18,104 Q18,112 24,112 L30,112 Q30,106 28,104 Z" fill="#3D2B1F" />
      <path d="M30,104 Q30,112 36,112 L42,112 Q42,106 40,104 Z" fill="#2F2015" />
      {/* Body/armor */}
      <path d="M16,38 Q16,30 30,28 Q44,30 44,38 L46,74 Q30,78 14,74 Z" fill="#B8860B" />
      <path d="M20,38 Q20,34 30,32 Q40,34 40,38 L42,70 Q30,74 18,70 Z" fill="#DAA520" />
      {/* Armor detail */}
      <path d="M24,42 L36,42 L36,56 L24,56 Z" fill="rgba(255,255,255,0.1)" rx="2" />
      <line x1="30" y1="38" x2="30" y2="70" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
      {/* Belt */}
      <rect x="16" y="62" width="28" height="5" rx="1" fill="#5D4E37" />
      <rect x="27" y="61" width="6" height="7" rx="1" fill="#DAA520" />
      {/* Arms */}
      <path d="M14,38 Q8,42 6,54 Q8,56 12,54 Q14,44 16,40 Z" fill="#DAA520" />
      <path d="M46,38 Q52,42 54,54 Q52,56 48,54 Q46,44 44,40 Z" fill="#B8860B" />
      {/* Hands (skin) */}
      <circle cx="7" cy="56" r="4" fill="#D4A574" />
      <circle cx="53" cy="56" r="4" fill="#C49464" />
      {/* Shield */}
      <ellipse cx="6" cy="52" rx="8" ry="12" fill="#8B0000" />
      <ellipse cx="6" cy="52" rx="6" ry="9" fill="#A52A2A" />
      <circle cx="6" cy="52" r="3" fill="#DAA520" />
      {/* Spear */}
      <rect x="52" y="10" width="2.5" height="70" rx="1" fill="#6B4226" />
      <path d="M51,10 L53.25,2 L55.5,10 Z" fill="#808080" />
      {/* Neck */}
      <rect x="26" y="22" width="8" height="8" rx="2" fill="#D4A574" />
      {/* Head */}
      <circle cx="30" cy="16" r="10" fill="#D4A574" />
      {/* Helmet */}
      <path d="M20,16 Q20,6 30,4 Q40,6 40,16 Z" fill="#B8860B" />
      <path d="M22,14 Q22,8 30,6 Q38,8 38,14 Z" fill="#DAA520" />
      {/* Helmet crest */}
      <path d="M28,4 Q30,-1 32,4 Q30,2 28,4 Z" fill="#8B0000" />
      {/* Face details */}
      <circle cx="27" cy="16" r="1.5" fill="#4A3728" />
      <circle cx="33" cy="16" r="1.5" fill="#4A3728" />
      <path d="M27,21 Q30,23 33,21" fill="none" stroke="#4A3728" strokeWidth="0.8" />
    </svg>
  );
}

export function PaperWarriorSitting(props) {
  return (
    <svg viewBox="0 0 70 90" {...props}>
      {/* Shadow */}
      <ellipse cx="35" cy="87" rx="20" ry="3" fill="rgba(0,0,0,0.2)" />
      {/* Legs (sitting cross-legged) */}
      <path d="M18,68 Q22,78 34,80 Q28,82 20,78 Q16,74 18,68 Z" fill="#5D4E37" />
      <path d="M52,68 Q48,78 36,80 Q42,82 50,78 Q54,74 52,68 Z" fill="#4A3F2E" />
      {/* Boots */}
      <ellipse cx="22" cy="80" rx="5" ry="3" fill="#3D2B1F" />
      <ellipse cx="48" cy="80" rx="5" ry="3" fill="#2F2015" />
      {/* Body/armor */}
      <path d="M22,32 Q22,26 35,24 Q48,26 48,32 L50,68 Q35,72 20,68 Z" fill="#B8860B" />
      <path d="M26,34 Q26,30 35,28 Q44,30 44,34 L46,64 Q35,68 24,64 Z" fill="#DAA520" />
      {/* Belt */}
      <rect x="22" y="56" width="26" height="4" rx="1" fill="#5D4E37" />
      {/* Arms resting on knees */}
      <path d="M20,36 Q14,44 16,58 Q18,60 22,56 Q20,44 22,38 Z" fill="#DAA520" />
      <path d="M50,36 Q56,44 54,58 Q52,60 48,56 Q50,44 48,38 Z" fill="#B8860B" />
      {/* Hands */}
      <circle cx="18" cy="60" r="3.5" fill="#D4A574" />
      <circle cx="52" cy="60" r="3.5" fill="#C49464" />
      {/* Neck */}
      <rect x="31" y="18" width="8" height="7" rx="2" fill="#D4A574" />
      {/* Head */}
      <circle cx="35" cy="13" r="9" fill="#D4A574" />
      {/* Helmet */}
      <path d="M26,13 Q26,4 35,2 Q44,4 44,13 Z" fill="#B8860B" />
      <path d="M28,11 Q28,6 35,4 Q42,6 42,11 Z" fill="#DAA520" />
      {/* Face */}
      <circle cx="32" cy="13" r="1.3" fill="#4A3728" />
      <circle cx="38" cy="13" r="1.3" fill="#4A3728" />
      <path d="M32,17 Q35,19 38,17" fill="none" stroke="#4A3728" strokeWidth="0.7" />
    </svg>
  );
}

export function PaperWarriorFighting(props) {
  return (
    <svg viewBox="0 0 90 120" {...props}>
      {/* Shadow */}
      <ellipse cx="42" cy="116" rx="18" ry="3" fill="rgba(0,0,0,0.2)" />
      {/* Legs in stride */}
      <path d="M28,76 Q26,90 22,108 Q24,110 28,108 Q32,92 34,76 Z" fill="#5D4E37" />
      <path d="M42,76 Q46,90 52,108 Q50,110 46,108 Q42,92 40,76 Z" fill="#4A3F2E" />
      {/* Boots */}
      <path d="M20,106 Q20,112 26,112 L30,112 Q30,108 28,106 Z" fill="#3D2B1F" />
      <path d="M44,106 Q44,112 50,112 L54,112 Q54,108 52,106 Z" fill="#2F2015" />
      {/* Body leaned forward */}
      <path d="M24,34 Q24,28 38,26 Q52,28 52,34 L54,76 Q38,80 22,76 Z" fill="#8B0000" />
      <path d="M28,36 Q28,32 38,30 Q48,32 48,36 L50,72 Q38,76 26,72 Z" fill="#A52A2A" />
      {/* Armor detail */}
      <path d="M32,40 L44,40 L44,54 L32,54 Z" fill="rgba(255,255,255,0.08)" />
      {/* Belt */}
      <rect x="24" y="64" width="28" height="5" rx="1" fill="#5D4E37" />
      {/* Sword arm raised */}
      <path d="M52,34 Q60,28 66,20 Q68,22 62,30 Q56,38 52,38 Z" fill="#A52A2A" />
      {/* Sword */}
      <rect x="64" y="2" width="3" height="22" rx="1" fill="#C0C0C0" />
      <rect x="64" y="0" width="3" height="3" rx="0.5" fill="#E0E0E0" />
      <rect x="60" y="24" width="11" height="3" rx="1" fill="#DAA520" />
      <rect x="63.5" y="27" width="4" height="8" rx="1" fill="#6B4226" />
      {/* Shield arm */}
      <path d="M24,34 Q16,38 12,48 Q14,50 18,48 Q22,40 24,36 Z" fill="#A52A2A" />
      {/* Shield */}
      <ellipse cx="12" cy="50" rx="10" ry="14" fill="#DAA520" />
      <ellipse cx="12" cy="50" rx="7" ry="10" fill="#B8860B" />
      <circle cx="12" cy="50" r="4" fill="#DAA520" />
      {/* Neck */}
      <rect x="34" y="20" width="8" height="7" rx="2" fill="#D4A574" />
      {/* Head */}
      <circle cx="38" cy="14" r="9" fill="#D4A574" />
      {/* Helmet */}
      <path d="M29,14 Q29,5 38,3 Q47,5 47,14 Z" fill="#8B0000" />
      <path d="M31,12 Q31,7 38,5 Q45,7 45,12 Z" fill="#A52A2A" />
      {/* Helmet crest */}
      <path d="M35,3 Q38,-2 41,3 L38,1 Z" fill="#FFD700" />
      {/* Face */}
      <circle cx="35" cy="14" r="1.5" fill="#4A3728" />
      <circle cx="41" cy="14" r="1.5" fill="#4A3728" />
      {/* Battle expression */}
      <path d="M35,19 L41,19" stroke="#4A3728" strokeWidth="1" />
    </svg>
  );
}

export function PaperTent(props) {
  return (
    <svg viewBox="0 0 140 100" {...props}>
      {/* Shadow */}
      <ellipse cx="70" cy="96" rx="55" ry="4" fill="rgba(0,0,0,0.15)" />
      {/* Main tent body */}
      <path d="M70,8 L130,92 L10,92 Z" fill="#8B0000" />
      <path d="M70,8 L70,92 L10,92 Z" fill="#6B0000" />
      {/* Tent stripes */}
      <path d="M70,8 L90,52 L80,52 Z" fill="rgba(255,255,255,0.06)" />
      <path d="M70,8 L50,52 L60,52 Z" fill="rgba(255,255,255,0.04)" />
      {/* Tent opening */}
      <path d="M55,92 Q62,55 70,45 Q78,55 85,92 Z" fill="#4A0000" />
      <path d="M58,92 Q65,60 70,50 Q70,60 70,92 Z" fill="#3A0000" />
      {/* Flag on top */}
      <path d="M70,8 L70,0 L86,4 L70,8 Z" fill="#FFD700" />
      <path d="M70,4 L86,4 L78,6 L70,6 Z" fill="#B8860B" />
      {/* Rope details */}
      <line x1="70" y1="8" x2="135" y2="92" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
      <line x1="70" y1="8" x2="5" y2="92" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
    </svg>
  );
}

export function PaperBonfire(props) {
  return (
    <svg viewBox="0 0 90 100" {...props}>
      {/* Glow on ground */}
      <ellipse cx="45" cy="90" rx="30" ry="6" fill="rgba(255,140,0,0.2)" />
      {/* Logs */}
      <path d="M15,78 Q20,74 55,72 Q60,74 58,78 Q54,80 18,82 Q14,80 15,78 Z" fill="#5D3A1A" />
      <path d="M35,80 Q38,76 70,74 Q74,76 72,80 Q68,82 38,84 Q34,82 35,80 Z" fill="#4A2E14" />
      <path d="M25,82 Q28,78 62,76 Q66,78 64,82 Q60,84 28,86 Q24,84 25,82 Z" fill="#6B4226" />
      {/* Embers */}
      <circle cx="35" cy="72" r="1.5" fill="#FF6600" opacity="0.8" />
      <circle cx="50" cy="70" r="1" fill="#FFD700" opacity="0.7" />
      <circle cx="42" cy="68" r="1.2" fill="#FF8C00" opacity="0.6" />
      {/* Flames */}
      <g data-mover="sway" style={{ transformOrigin: '45px 80px' }}>
        {/* Outer flames */}
        <path d="M45,20 Q52,32 50,44 Q55,36 58,26 Q56,40 52,48 Q48,42 45,20 Z" fill="#FF6D00" opacity="0.8" />
        <path d="M45,20 Q38,32 40,44 Q35,36 32,26 Q34,40 38,48 Q42,42 45,20 Z" fill="#FF8F00" opacity="0.7" />
        <path d="M30,40 Q34,50 36,58 Q32,52 28,44 Q30,52 34,60 Q36,54 30,40 Z" fill="#FF6D00" opacity="0.6" />
        <path d="M60,40 Q56,50 54,58 Q58,52 62,44 Q60,52 56,60 Q54,54 60,40 Z" fill="#FF6D00" opacity="0.6" />
        {/* Middle flame */}
        <path d="M45,14 Q50,28 48,40 Q46,30 45,14 Z" fill="#FFAB00" opacity="0.9" />
        <path d="M45,14 Q40,28 42,40 Q44,30 45,14 Z" fill="#FFD600" opacity="0.8" />
        {/* Inner core */}
        <ellipse cx="45" cy="52" rx="10" ry="14" fill="#FF8F00" />
        <ellipse cx="45" cy="50" rx="7" ry="10" fill="#FFAB00" />
        <ellipse cx="45" cy="48" rx="4" ry="6" fill="#FFF176" opacity="0.8" />
      </g>
    </svg>
  );
}

export function PaperTree(props) {
  return (
    <svg viewBox="0 0 80 150" {...props}>
      {/* Trunk */}
      <path d="M34,90 Q32,100 30,140 Q34,144 40,144 Q46,144 50,140 Q48,100 46,90 Z" fill="#5D3A1A" />
      <path d="M36,92 Q35,100 34,136 Q38,138 40,138 L40,92 Z" fill="rgba(255,255,255,0.05)" />
      {/* Foliage layers */}
      <ellipse cx="40" cy="70" rx="30" ry="24" fill="currentColor" />
      <ellipse cx="35" cy="55" rx="22" ry="18" fill="currentColor" />
      <ellipse cx="45" cy="60" rx="20" ry="16" fill="currentColor" />
      <ellipse cx="40" cy="42" rx="16" ry="14" fill="currentColor" />
      <ellipse cx="40" cy="30" rx="10" ry="10" fill="currentColor" />
      {/* Highlights */}
      <ellipse cx="34" cy="48" rx="8" ry="6" fill="rgba(255,255,255,0.08)" />
      <ellipse cx="42" cy="34" rx="5" ry="4" fill="rgba(255,255,255,0.06)" />
    </svg>
  );
}

export function PaperCannon(props) {
  return (
    <svg viewBox="0 0 120 80" {...props}>
      {/* Shadow */}
      <ellipse cx="60" cy="76" rx="40" ry="3" fill="rgba(0,0,0,0.2)" />
      {/* Wheels */}
      <circle cx="30" cy="66" r="12" fill="#5D3A1A" />
      <circle cx="30" cy="66" r="9" fill="#6B4226" />
      <circle cx="30" cy="66" r="3" fill="#3D2B1F" />
      <circle cx="90" cy="66" r="12" fill="#5D3A1A" />
      <circle cx="90" cy="66" r="9" fill="#6B4226" />
      <circle cx="90" cy="66" r="3" fill="#3D2B1F" />
      {/* Wheel spokes */}
      <line x1="30" y1="54" x2="30" y2="78" stroke="#3D2B1F" strokeWidth="1.5" />
      <line x1="18" y1="66" x2="42" y2="66" stroke="#3D2B1F" strokeWidth="1.5" />
      <line x1="90" y1="54" x2="90" y2="78" stroke="#3D2B1F" strokeWidth="1.5" />
      <line x1="78" y1="66" x2="102" y2="66" stroke="#3D2B1F" strokeWidth="1.5" />
      {/* Carriage */}
      <rect x="24" y="48" width="72" height="14" rx="3" fill="#5D3A1A" />
      <rect x="26" y="50" width="68" height="10" rx="2" fill="#6B4226" />
      {/* Barrel */}
      <path d="M50,44 Q50,34 60,30 Q70,34 70,44 Z" fill="#404040" />
      <rect x="48" y="16" width="24" height="20" rx="10" fill="#505050" />
      <rect x="50" y="10" width="20" height="8" rx="8" fill="#606060" />
      {/* Barrel opening */}
      <ellipse cx="60" cy="10" rx="8" ry="4" fill="#303030" />
      <ellipse cx="60" cy="10" rx="5" ry="2.5" fill="#1A1A1A" />
      {/* Fuse */}
      <path d="M68,30 Q72,26 74,22" fill="none" stroke="#8B6914" strokeWidth="1" />
      {/* Metal bands */}
      <rect x="49" y="20" width="22" height="2" rx="1" fill="#707070" />
      <rect x="49" y="28" width="22" height="2" rx="1" fill="#707070" />
    </svg>
  );
}

export function PaperSword(props) {
  return (
    <svg viewBox="0 0 20 100" {...props}>
      {/* Blade */}
      <path d="M8,4 L12,4 L13,62 L7,62 Z" fill="#C0C0C0" />
      <path d="M8,4 L10,4 L10,62 L7,62 Z" fill="#E0E0E0" />
      <path d="M8,4 L10,0 L12,4 Z" fill="#E8E8E8" />
      {/* Edge highlight */}
      <path d="M9,8 L9,58" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
      {/* Guard */}
      <rect x="2" y="62" width="16" height="4" rx="2" fill="#DAA520" />
      <rect x="3" y="63" width="14" height="2" rx="1" fill="#B8860B" />
      {/* Handle */}
      <rect x="7" y="66" width="6" height="20" rx="2" fill="#6B4226" />
      {/* Handle wrap */}
      <path d="M7,70 L13,72 M7,74 L13,76 M7,78 L13,80" stroke="#8B6914" strokeWidth="0.8" fill="none" />
      {/* Pommel */}
      <circle cx="10" cy="88" r="3" fill="#DAA520" />
      <circle cx="10" cy="88" r="1.5" fill="#B8860B" />
    </svg>
  );
}
