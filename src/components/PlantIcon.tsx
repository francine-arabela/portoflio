export default function PlantIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="#1c1c1c" strokeWidth="1.3" aria-hidden="true">
      <path d="M24 30V14" strokeLinecap="round" />
      <path d="M24 22c0-6 6-9 10-8-1 6-4 9-10 8Z" />
      <path d="M24 18c0-6-6-9-10-8 1 6 4 9 10 8Z" />
      <circle cx="24" cy="10" r="1.4" fill="#1c1c1c" stroke="none" />
      <path d="M14 30h20l-2 10H16Z" />
      <path d="M14 30h20" />
    </svg>
  );
}
