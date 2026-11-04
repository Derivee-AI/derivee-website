import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { LagosClock } from "@/components/LagosClock";
import { OrderBook } from "@/components/OrderBook";
import { PreviewSwitcher } from "@/components/PreviewSwitcher";
import styles from "./night-book.module.css";

export const metadata: Metadata = {
  title: "Derivée - Night Book",
  description:
    "The selected Night Book direction for Derivée. A private desk in Lagos.",
};

export default function NightBookPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/preview" className={styles.brand} aria-label="Derivée preview home">
          <Image
            src="/brand/derivee-white.png"
            alt="Derivée"
            width={549}
            height={173}
            priority
            className={styles.logo}
          />
          <span className={styles.brandCity}>LAGOS</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="/#desk">Trading desk</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className={styles.headerRight}>
          <span className={styles.clock}>
            <span className={styles.liveDot} />
            <LagosClock /> <span className={styles.zone}>WAT</span>
          </span>
          <a className={styles.headerCta} href="/#contact">
            Request access <Arrow />
          </a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="night-title">
        <div className={styles.copy}>
          <h1 id="night-title" className={styles.title}>
            <span>Pricing</span> <span>Naira</span>{" "}
            <span className={styles.accent}>risk.</span>
          </h1>

          <p className={styles.sub}>
            Market pricing and bespoke solutions for institutional
            counterparties.
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
            <span className={styles.partnerLabel}>Institutional</span>
            <span className={styles.partnerMark}>By appointment</span>
          </div>
        </div>

        <div className={styles.visual}>
          <OrderBook />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.signalDot} />
          <span>Institutional counterparties only</span>
        </div>
        <div className={styles.footerCenter} aria-hidden="true">
          <span>NGN RATES</span>
          <span>FX</span>
          <span>cNGN BASIS</span>
          <span>STRUCTURED</span>
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
