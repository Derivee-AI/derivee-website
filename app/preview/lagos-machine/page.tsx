import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { LagosClock } from "@/components/LagosClock";
import { LagosScene } from "@/components/LagosScene";
import { PreviewSwitcher } from "@/components/PreviewSwitcher";
import styles from "./lagos-machine.module.css";

export const metadata: Metadata = {
  title: "Derivée - Lagos Machine",
  description: "Hero comp 03: the physical city as a trading floor.",
};

const tape = [
  "NGN RATES",
  "FX",
  "cNGN BASIS",
  "STRUCTURED",
  "LAGOS",
  "24 / 7",
];

export default function LagosMachinePage() {
  return (
    <main className={styles.page}>
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/preview" className={styles.brand} aria-label="Derivée preview home">
          <span className={styles.brandMark}>D</span>
          <span className={styles.wordmark}>DERIVÉE</span>
          <span className={styles.brandMeta}>LAGOS / NG</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="/#desk">Trading desk</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className={styles.headerRight}>
          <span className={styles.clock}>
            <span className={styles.pulse} />
            <LagosClock /> WAT
          </span>
          <a className={styles.headerCta} href="/#contact">
            Request a mark <Arrow />
          </a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="machine-title">
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <span className={styles.kickerNumber}>01</span>
            <span>The Lagos derivatives desk</span>
            <span className={styles.kickerCoord}>06°27′N / 03°23′E</span>
          </p>

          <h1 id="machine-title" className={styles.title}>
            <span>Nigeria</span>
            <span className={styles.orange}>moves.</span>
            <span>We price</span>
            <span className={styles.outline}>it.</span>
          </h1>

          <p className={styles.sub}>
            Naira rates. FX. cNGN. Structured risk.
            <br />
            Built in Lagos, for institutions that move before the crowd.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="/#contact">
              Request access <Arrow />
            </a>
            <a className={styles.secondary} href="/#desk">
              Trading desk
              <span className={styles.secondaryLine} />
            </a>
          </div>

          <div className={styles.partner}>
            <span className={styles.partnerLabel}>Settlement rail</span>
            <span className={styles.partnerMark}>cNGN</span>
            <span className={styles.partnerArrow}>→</span>
            <span className={styles.partnerDetail}>Naira, always open.</span>
          </div>
        </div>

        <div className={styles.visual}>
          <LagosScene />
          <div className={styles.visualEdge} aria-hidden="true">
            <span>DERIVÉE / LAGOS</span>
            <span>THE PHYSICAL MARKET</span>
          </div>
        </div>
      </section>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[...tape, ...tape, ...tape].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i>///</i>
            </span>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.footerDot} />
          <span>Institutional counterparties only</span>
        </div>
        <div className={styles.footerCenter}>
          <span>Principal risk</span>
          <span>Two-sided</span>
          <span>Always on</span>
        </div>
        <div className={styles.footerRight}>
          <span>© 2026 Derivée</span>
          <a href="/#risk">Risk disclosure</a>
        </div>
      </footer>

      <PreviewSwitcher />
    </main>
  );
}
