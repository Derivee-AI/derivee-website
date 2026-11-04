import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found - Derivée",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.grain} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Derivée home">
          <Image
            src="/brand/derivee-white.png"
            alt="Derivée"
            width={549}
            height={173}
            priority
            className={styles.logo}
          />
          <span className={styles.city}>LAGOS</span>
        </Link>
        <span className={styles.meta}>404 / Off book</span>
      </header>

      <section className={styles.body}>
        <p className={styles.eyebrow}>Page not found</p>
        <h1>
          This page is
          <br />
          <em>not in the book.</em>
        </h1>
        <p className={styles.sub}>
          The address you followed is not here. The trading desk is still at
          the root.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/">
            Back to the trading desk <Arrow />
          </Link>
          <Link className={styles.secondary} href="/#desk">
            Trading desk
            <span className={styles.secondaryLine} />
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Institutional counterparties only</span>
        <span>Lagos / WAT</span>
      </footer>
    </main>
  );
}
