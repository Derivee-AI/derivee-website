import styles from "./LagosScene.module.css";

export function LagosScene() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 900 1100"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="lagSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#111111" />
            <stop offset="0.55" stopColor="#16120e" />
            <stop offset="1" stopColor="#0c0c0b" />
          </linearGradient>
          <radialGradient id="lagSun" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#ff5a1f" stopOpacity="0.95" />
            <stop offset="0.42" stopColor="#ff5a1f" stopOpacity="0.55" />
            <stop offset="1" stopColor="#ff5a1f" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lagWater" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2f5d50" stopOpacity="0.18" />
            <stop offset="1" stopColor="#0c0c0b" stopOpacity="0" />
          </linearGradient>
          <pattern id="halftone" width="7" height="7" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.7" fill="#f4f1ea" opacity="0.18" />
          </pattern>
          <pattern id="scan" width="1" height="5" patternUnits="userSpaceOnUse">
            <rect width="1" height="1.2" fill="#f4f1ea" opacity="0.035" />
          </pattern>
        </defs>

        <rect width="900" height="1100" fill="url(#lagSky)" />
        <circle cx="600" cy="350" r="310" fill="url(#lagSun)" />
        <circle cx="600" cy="350" r="156" fill="#ff5a1f" opacity="0.74" />
        <circle cx="600" cy="350" r="156" stroke="#f4f1ea" strokeOpacity="0.15" />

        <g stroke="#f4f1ea" strokeOpacity="0.09">
          <path d="M0 655h900" />
          <path d="M0 685h900" />
          <path d="M0 716h900" />
          <path d="M0 749h900" />
          <path d="M0 784h900" />
          <path d="M0 821h900" />
          <path d="M0 861h900" />
          <path d="M0 904h900" />
          <path d="M0 950h900" />
        </g>

        <g opacity="0.72">
          <path d="M-40 711c132-52 252-70 391-65 171 6 326 39 589 102" stroke="#2f5d50" strokeWidth="28" opacity="0.16" />
          <path d="M-20 737c152-45 300-53 462-44 177 10 309 36 478 78" stroke="#2f5d50" strokeWidth="14" opacity="0.15" />
          <path d="M-30 795c147-38 295-45 443-31 197 18 354 57 517 111" stroke="#ff5a1f" strokeWidth="1" opacity="0.22" />
          <path d="M-80 842c155-31 332-33 512-7 162 23 311 66 508 137" stroke="#f4f1ea" strokeWidth="1" opacity="0.12" />
        </g>

        <g>
          <path d="M-30 636c195-14 360-14 518-1 164 13 296 36 446 71" stroke="#f4f1ea" strokeOpacity="0.42" strokeWidth="2" />
          <path d="M-30 648c195-14 360-14 518-1 164 13 296 36 446 71" stroke="#ff5a1f" strokeOpacity="0.82" strokeWidth="1" />
          <path d="M-30 686c195-14 360-14 518-1 164 13 296 36 446 71" stroke="#f4f1ea" strokeOpacity="0.14" strokeWidth="1" />
        </g>

        <g stroke="#ff5a1f" strokeWidth="1.1" opacity="0.9">
          <path d="M112 646V250M112 250l-15 28M112 250l15 28M112 290h-11M112 330h-11M112 370h-11" />
          <path d="M112 252C-6 306-22 468-10 648" />
          <path d="M112 252c150 42 276 170 328 389" />
          <path d="M112 266c-96 52-108 209-98 373" opacity="0.4" />
          <path d="M112 266c125 43 235 157 280 368" opacity="0.4" />
        </g>

        <g stroke="#f4f1ea" strokeWidth="0.7" opacity="0.32">
          <path d="M112 252 0 640M112 252l28 388M112 266l-68 368M112 266l48 368M112 280L20 634M112 280l68 352" />
          <path d="M112 252c54 26 91 78 116 140" opacity="0.5" />
          <path d="M112 252c35 51 49 111 49 164" opacity="0.5" />
        </g>

        <g>
          <path d="M707 640V412M777 640V412M707 412l35-34 35 34M777 430h-70M707 484h70M707 545h70" stroke="#f4f1ea" strokeOpacity="0.48" strokeWidth="1.1" />
          <path d="M742 378V286M742 286h-42M742 300h-42M742 314h-42" stroke="#ff5a1f" strokeWidth="1.2" />
          <path d="M700 286v-28h84v70" stroke="#f4f1ea" strokeOpacity="0.22" strokeWidth="1" />
        </g>

        <g fill="#f4f1ea" opacity="0.55">
          <circle cx="163" cy="622" r="1.6" />
          <circle cx="247" cy="624" r="1.2" />
          <circle cx="382" cy="630" r="1.4" />
          <circle cx="488" cy="638" r="1.1" />
          <circle cx="604" cy="650" r="1.5" />
          <circle cx="852" cy="666" r="1.2" />
          <circle cx="700" cy="598" r="1.3" />
          <circle cx="798" cy="612" r="1.2" />
        </g>

        <g fill="#ff5a1f">
          <circle cx="340" cy="628" r="2.4" />
          <circle cx="340" cy="628" r="8" opacity="0.12" />
          <circle cx="558" cy="646" r="2.4" />
          <circle cx="558" cy="646" r="8" opacity="0.12" />
          <circle cx="702" cy="580" r="2.4" />
          <circle cx="702" cy="580" r="8" opacity="0.12" />
          <circle cx="860" cy="612" r="2.4" />
          <circle cx="860" cy="612" r="8" opacity="0.12" />
        </g>

        <g stroke="#f4f1ea" strokeOpacity="0.18" strokeWidth="0.8" fill="none">
          <path d="M0 716h900M0 749h900M0 784h900M0 821h900M0 861h900M0 904h900M0 950h900" />
          <path d="M80 950v150M220 950v150M360 950v150M500 950v150M640 950v150M780 950v150" />
        </g>

        <rect width="900" height="1100" fill="url(#halftone)" />
        <rect width="900" height="1100" fill="url(#scan)" />
        <rect width="900" height="1100" fill="url(#lagWater)" />
      </svg>

      <div className={styles.scanline} />
      <div className={styles.coords}>
        <span>06°27′N</span>
        <span>03°23′E</span>
      </div>
      <div className={styles.caption}>
        <span className={styles.dot} />
        <span>THIRD MAINLAND / 24:00 WAT</span>
      </div>
      <div className={styles.bigNumber}>01</div>
    </div>
  );
}
