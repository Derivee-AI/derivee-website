import Image from "next/image";
import styles from "./OrderBook.module.css";

const levels = [
  { price: "1,557.00", offer: 12 },
  { price: "1,556.50", offer: 18 },
  { price: "1,556.00", offer: 43 },
  { price: "1,555.50", offer: 29 },
  { price: "1,555.00", offer: 68 },
  { price: "1,554.50", offer: 37 },
  { price: "1,552.50", bid: 44 },
  { price: "1,552.00", bid: 76 },
  { price: "1,551.50", bid: 34 },
  { price: "1,551.00", bid: 59 },
  { price: "1,550.50", bid: 25 },
  { price: "1,550.00", bid: 31 },
];

const half = levels.length / 2;

export function OrderBook() {
  return (
    <div
      className={styles.wrap}
      role="img"
      aria-label="Illustrative USD/NGN order book. Bid sizes are on the left, offer sizes on the right. Not a live quote."
    >
      <Image
        src="/brand/derivee-mark-white.png"
        alt=""
        width={168}
        height={169}
        className={styles.watermark}
        aria-hidden="true"
      />

      <div className={styles.top}>
        <div>
          <p className={styles.kicker}>The book</p>
          <p className={styles.instrument}>USD / NGN</p>
        </div>
        <span className={styles.badge}>
          <i />
          Illustrative
        </span>
      </div>

      <div className={styles.instrumentBar}>
        <span className={styles.activeInstrument}>SPOT</span>
        <span>1M</span>
        <span>3M</span>
        <span>1Y</span>
        <span className={styles.tenor}>Two-way</span>
      </div>

      <div className={styles.columns}>
        <span>Bid size / $m</span>
        <span>Price</span>
        <span>Offer size / $m</span>
      </div>

      <div className={styles.ladder}>
        {levels.map((level, index) => {
          const isBestOffer = index === half - 1;
          const isBestBid = index === half;
          const isTopOffer = index === 0;
          return (
            <div key={level.price} className={styles.row}>
              <div className={styles.bidCell}>
                {level.bid ? (
                  <span
                    className={styles.bidBar}
                    style={{ width: `${level.bid}%` }}
                  />
                ) : null}
              </div>
              <span
                className={[
                  styles.price,
                  isBestBid || isBestOffer ? styles.best : "",
                  isTopOffer ? styles.topPrice : "",
                ].join(" ")}
              >
                {level.price}
              </span>
              <div className={styles.offerCell}>
                {level.offer ? (
                  <span
                    className={styles.offerBar}
                    style={{ width: `${level.offer}%` }}
                  />
                ) : null}
              </div>
              {isBestOffer ? <span className={styles.spread} /> : null}
            </div>
          );
        })}
      </div>

      <div className={styles.bookFoot}>
        <span>
          <b>Bid</b> left
        </span>
        <span className={styles.mid}>
          <i />
          MID 1,553.50
        </span>
        <span>
          <b>Offer</b> right
        </span>
      </div>

      <div className={styles.disclaimer}>
        Illustrative depth, not a quote. Bids and offers are shown for layout
        only.
      </div>
    </div>
  );
}
