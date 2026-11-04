import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { LagosClock } from "@/components/LagosClock";
import { OrderBook } from "@/components/OrderBook";
import styles from "./home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main className={styles.page} id="top">
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

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
          <span className={styles.brandCity}>LAGOS</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#desk">Trading desk</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.headerRight}>
          <span className={styles.clock}>
            <span className={styles.liveDot} />
            <LagosClock /> <span className={styles.zone}>WAT</span>
          </span>
          <a className={styles.headerCta} href="#contact">
            Request access <Arrow />
          </a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.copy}>
          <h1 id="home-title" className={styles.title}>
            <span>Pricing</span> <span>Naira</span>{" "}
            <span className={styles.accent}>risk.</span>
          </h1>

          <p className={styles.sub}>
            Market pricing and bespoke solutions for institutional
            counterparties.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#contact">
              Request access <Arrow />
            </a>
            <a className={styles.secondary} href="#desk">
              Trading desk
              <span className={styles.secondaryLine} />
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <OrderBook />
        </div>
      </section>

      <div className={styles.heroRail} aria-label="Desk details">
        <span className={styles.railLead}>
          <i />
          Lagos / WAT
        </span>
        <span>By appointment</span>
        <span className={styles.railEnd}>
          Institutional counterparties only
        </span>
      </div>

      <section id="desk" className={styles.statement}>
        <div className={styles.statementCopy}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            <span>Trading desk</span>
          </div>

          <h2>A considered approach to the market.</h2>
          <p>
            Derivée is a Lagos-based desk working across Naira markets. We
            engage with institutional counterparties on pricing, transactions
            and the management of market exposure.
          </p>
          <p>
            Our approach is direct, with each enquiry considered on its terms.
          </p>
        </div>

        <figure className={styles.portrait}>
          <Image
            src="/images/lekki-bridge.jpg"
            alt="Lekki-Ikoyi Link Bridge at night"
            width={800}
            height={1200}
            className={styles.portraitImage}
          />
        </figure>
      </section>

      <figure className={styles.plate}>
        <Image
          src="/images/lagos-night.jpg"
          alt="Lagos Island at night"
          fill
          sizes="100vw"
          className={styles.plateImage}
        />
        <div className={styles.plateShade} aria-hidden="true" />
      </figure>

      <section id="contact" className={styles.contact}>
        <div className={styles.sectionLabel}>
          <span>02</span>
          <span>Contact</span>
        </div>

        <div className={styles.contactBody}>
          <h2>Request access.</h2>
          <p>Institutional counterparties only. Write to the trading desk.</p>
          <a
            className={styles.email}
            href="mailto:hello@derivee.xyz?subject=Access%20request"
          >
            hello@derivee.xyz
          </a>
          <p className={styles.contactNote}>
            Lagos / WAT. By appointment.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <Image
            src="/brand/derivee-white.png"
            alt="Derivée"
            width={549}
            height={173}
            className={styles.footerLogo}
          />
          <div className={styles.footerMeta}>
            <a href="mailto:hello@derivee.xyz">hello@derivee.xyz</a>
            <span>© 2026 Derivée</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>

        <p id="risk" className={styles.risk}>
          Derivatives involve risk. Nothing on this site is an offer to trade.
          Institutional counterparties only.
        </p>

        <p className={styles.credits}>
          Photography: Omoeko Media, Olasunkanmiariyo /{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC BY-SA 4.0
          </a>
        </p>
      </footer>
    </main>
  );
}
