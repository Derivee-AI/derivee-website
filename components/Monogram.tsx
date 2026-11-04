export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      role="img"
      aria-label="Derivée partial derivative mark"
    >
      <path
        d="M25.8 5.3c3.7 0 6.2 1.1 7.7 2.1M23.1 12.9c-2.8.4-5.4 1.6-7.7 3.5-4.4 3.6-7.1 8.3-7.1 12.4 0 3.4 2.1 5.7 5.4 5.7 5 0 9.8-4.1 12.4-10.4 1.9-4.6 2.8-9.6 2.7-13.6M20.5 4.9c2.4 4.2 3.4 8.3 3.3 12.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="31.4" cy="8.2" r="1.2" fill="currentColor" />
    </svg>
  );
}
