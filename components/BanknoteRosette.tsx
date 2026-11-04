import styles from "./BanknoteRosette.module.css";

const rings = Array.from({ length: 26 }, (_, index) => index);

export function BanknoteRosette() {
  return (
    <svg
      className={styles.rosette}
      viewBox="0 0 620 620"
      fill="none"
      aria-hidden="true"
    >
      <g className={styles.slow}>
        {rings.map((ring) => {
          const inset = ring * 5.4;
          return (
            <ellipse
              key={`a-${ring}`}
              cx="310"
              cy="310"
              rx={270 - inset}
              ry={92 + inset * 0.55}
              transform={`rotate(${ring * 6.92} 310 310)`}
              stroke="currentColor"
              strokeWidth="0.55"
              opacity={0.32}
            />
          );
        })}
      </g>

      <g className={styles.fast}>
        {rings.map((ring) => {
          const inset = ring * 4.2;
          return (
            <ellipse
              key={`b-${ring}`}
              cx="310"
              cy="310"
              rx={212 - inset * 0.72}
              ry={250 - inset * 0.55}
              transform={`rotate(${ring * -5.13} 310 310)`}
              stroke="currentColor"
              strokeWidth="0.45"
              opacity={0.26}
            />
          );
        })}
      </g>

      <g opacity="0.45">
        {Array.from({ length: 16 }, (_, index) => (
          <circle
            key={`c-${index}`}
            cx="310"
            cy="310"
            r={42 + index * 12.5}
            stroke="currentColor"
            strokeWidth="0.4"
            strokeDasharray={index % 3 === 0 ? "1 7" : "none"}
            opacity={0.5}
          />
        ))}
      </g>

      <g className={styles.petals} opacity="0.4">
        {Array.from({ length: 24 }, (_, index) => (
          <path
            key={`p-${index}`}
            d="M310 74c46 48 68 106 68 166 0 30-11 53-27 70 33-8 64-30 87-63 25-36 36-79 31-119-35-7-74-13-111-28-17-9-32-17-48-26Z"
            transform={`rotate(${index * 15} 310 310)`}
            stroke="currentColor"
            strokeWidth="0.5"
          />
        ))}
      </g>

      <circle cx="310" cy="310" r="34" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
      <circle cx="310" cy="310" r="25" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <path
        d="M323 289c7 0 12 2 15 4m-19 14c-5 1-10 3-15 7-9 7-14 16-14 24 0 7 4 11 11 11 10 0 19-8 24-21 4-9 5-19 5-26m-8-1c4 8 6 16 6 23"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
