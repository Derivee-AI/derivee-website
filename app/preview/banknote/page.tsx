import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { BanknoteRosette } from "@/components/BanknoteRosette";
import { LagosClock } from "@/components/LagosClock";
import { Monogram } from "@/components/Monogram";
import { PreviewSwitcher } from "@/components/PreviewSwitcher";
import styles from "./banknote.module.css";

export const metadata: Metadata = {
  title: "Derivée - Banknote",
  description: "Hero comp 02: a merchant bank for the Naira century.",
};

export default function BanknotePage() {
  return (
    <main className={styles.page}>
      <div className={styles.paperGrain} aria-hidden="true" />
      <div className={styles.frame} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/preview" className={styles.brand} aria-label="Derivée preview home">
          <span className={styles.brandMark}>
            <Monogram className={styles.mark} />
          </span>
          <span className={styles.wordmark}>DERIVÉE</span>
          <span className={styles.est}>EST. LAGOS 2026</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="/#desk">Trading desk</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className={styles.headerRight}>
          <span className={styles.clock}>
            <LagosClock /> WAT
          </span>
          <a className={styles.headerCta} href="/#contact">
            Request a mark <Arrow />
          </a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="banknote-title">
        <div className={styles.metaTop}>
          <span>THE NAIRA CENTURY</span>
          <span>SERIES 2026 / 01</span>
          <span>LAGOS · NIGERIA</span>
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowMark}>∂</span>
A derivatives desk for Nigerian risk
          </p>

          <h1 id="banknote-title" className={styles.title}>
            <span>The Naira,</span>
            <span className={styles.italic}>priced properly.</span>
          </h1>

          <p className={styles.sub}>
            A market-making desk for Nigerian rates, currency, and onchain naira.
            Built where the risk lives. Settled where the market is going.
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
            <span className={styles.partnerLabel}>Settlement partner</span>
            <span className={styles.partnerMark}>cNGN</span>
            <span className={styles.partnerDetail}>Naira, onchain.</span>
          </div>
        </div>

        <div className={styles.rosetteWrap}>
          <BanknoteRosette />
          <span className={styles.rosetteCaption}>SECURITY PRINT / LIQUIDITY FIELD</span>
        </div>

        <aside className={styles.thread} aria-hidden="true">
          <span>DERIVÉE · NAIRA · SETTLED · ONCHAIN · DERIVÉE · NAIRA · SETTLED · ONCHAIN ·</span>
        </aside>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerMeta}>
          <span className={styles.serial}>DV-0612-2026</span>
          <span>Institutional counterparties only</span>
        </div>
        <div className={styles.footerTape} aria-hidden="true">
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
