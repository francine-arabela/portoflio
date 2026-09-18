export default function PondArt() {
  return (
    <svg viewBox="0 0 300 380" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="skyfoliage" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3c5c3e" />
          <stop offset="45%" stopColor="#5a7a4f" />
          <stop offset="100%" stopColor="#7fa06a" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d6b5c" />
          <stop offset="100%" stopColor="#274a41" />
        </linearGradient>
      </defs>
      <rect width="300" height="380" fill="url(#skyfoliage)" />
      <rect y="220" width="300" height="160" fill="url(#water)" />
      <g opacity="0.55" stroke="#e7efd8" strokeWidth="2" strokeLinecap="round">
        <path d="M0 235 Q150 205 300 235" fill="none" />
        <path d="M0 255 Q150 225 300 255" fill="none" />
        <path d="M120 230 L120 260" />
        <path d="M180 228 L180 262" />
      </g>
      <g fill="#dfe9d0" opacity="0.85">
        <ellipse cx="70" cy="300" rx="20" ry="7" />
        <ellipse cx="130" cy="330" rx="24" ry="8" />
        <ellipse cx="200" cy="305" rx="18" ry="6" />
        <ellipse cx="240" cy="345" rx="22" ry="7" />
        <ellipse cx="40" cy="350" rx="16" ry="6" />
      </g>
      <g fill="#f2d9e6" opacity="0.9">
        <circle cx="130" cy="326" r="4" />
        <circle cx="200" cy="302" r="3.5" />
      </g>
      <g opacity="0.6" fill="#2f4a2f">
        <circle cx="40" cy="60" r="70" />
        <circle cx="230" cy="40" r="80" />
        <circle cx="150" cy="20" r="60" />
      </g>
    </svg>
  );
}
