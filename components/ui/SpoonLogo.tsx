import { useId } from 'react';

interface SpoonLogoProps {
  size?: number;
  className?: string;
}

export function SpoonLogo({ size = 32, className = '' }: SpoonLogoProps) {
  const uid = useId().replace(/:/g, '');
  const metalId = `metal-${uid}`;
  const pbId = `pb-${uid}`;
  const pbHlId = `pbhl-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PeanutButterJS spoon logo"
    >
      <defs>
        <linearGradient id={metalId} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#E0E4EC" />
          <stop offset="50%" stopColor="#C4CAD6" />
          <stop offset="100%" stopColor="#8A92A0" />
        </linearGradient>
        <linearGradient id={pbId} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#FFD466" />
          <stop offset="55%" stopColor="#F0A020" />
          <stop offset="100%" stopColor="#C06808" />
        </linearGradient>
        <radialGradient id={pbHlId} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFEC96" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F0A020" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Spoon tilted ~30° clockwise, rotated around mid-spoon */}
      <g transform="rotate(30, 20, 25)">
        {/* Handle */}
        <rect x="18" y="22" width="4" height="15" rx="2" fill={`url(#${metalId})`} />

        {/* Bowl outer rim */}
        <ellipse cx="20" cy="15" rx="7.5" ry="6.5" fill={`url(#${metalId})`} />

        {/* Bowl concave surface */}
        <ellipse cx="20" cy="15" rx="5.8" ry="5" fill="#7A8394" />

        {/* Peanut butter mound */}
        <ellipse cx="20" cy="14.5" rx="5.2" ry="4.4" fill={`url(#${pbId})`} />

        {/* Peanut butter radial highlight */}
        <ellipse cx="20" cy="14.5" rx="5.2" ry="4.4" fill={`url(#${pbHlId})`} />

        {/* Swirl stroke */}
        <path
          d="M16.8 14.8 Q18.8 11.2 22.4 13.6 Q21 17.2 17.8 15.8"
          stroke="#D4860A"
          strokeWidth="0.7"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
      </g>
    </svg>
  );
}
