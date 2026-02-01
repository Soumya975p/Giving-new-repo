'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className={styles.footerSection}>
        <div className={styles.footerContainer}>

          {/* LEFT COLUMN: Brand & Info */}
          <div className={styles.footerLeftColumn}>
            <div className={styles.footerLogo}>
              <img src="/assets/logo_name.svg" alt="Giving Together Foundation" className={styles.footerLogoImage} />
            </div>

            <p className={styles.footerDescription}>
              Giving Together Foundation (GTF) is an
              independent, India-led nonprofit committed to
              building the infrastructure for everyday generosity.
            </p>

            {/* India Map Image */}
            <img
              src="/assets/map.png"
              alt="Based in India Map"
              className={styles.footerMapImage}
            />
            <p className={styles.footerLocationText}>Based in India, working nationwide</p>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className={styles.footerRightColumn}>

            {/* ROW 1: Get Involved Form */}
            <div className={styles.getInvolvedRow}>
              <p className={styles.getInvolvedLabel}>GET INVOLVED</p>

              {/* DESKTOP VERSION (3 Lines) */}
              <div className={`${styles.getInvolvedForm} ${styles.footerFormDesktop}`}>
                <div className={styles.formLine}>
                  Hi, I'm <input type="text" placeholder="Merlyn Fernandes" className={styles.inlineInput} />, I'm from <input type="text" placeholder="Giving Together Foundation" className={styles.inlineInput} />.
                </div>
                <div className={styles.formLine}>
                  I'd love to be a part of Giving Together Foundation's initiatives.
                </div>
                <div className={styles.formLine}>
                  I'm available on <input type="email" placeholder="m.fernandes@email.com" className={styles.inlineInput} /> if you need to reach out to me for updates & details.
                </div>
              </div>

              {/* MOBILE VERSION (5 Lines) */}
              <div className={`${styles.getInvolvedForm} ${styles.footerFormMobile}`}>
                <div className={styles.formLine}>
                  Hi, I'm <input type="text" placeholder="your name" className={`${styles.inlineInput} ${styles.inputName}`} /> ,
                </div>
                <div className={styles.formLine}>
                  I'm from <input type="text" placeholder="name of your organisation" className={`${styles.inlineInput} ${styles.inputOrg}`} /> .
                </div>
                <div className={styles.formLine}>
                  I'd love to be a part of Giving Together Foundation's
                </div>
                <div className={styles.formLine}>
                  initiatives. I'm available on <input type="email" placeholder="your email address" className={`${styles.inlineInput} ${styles.inputEmail}`} />
                </div>
                <div className={styles.formLine}>
                  if you need to reach out to me for updates & details.
                </div>
              </div>

              <button className={styles.subscribeBtn}>
                Subscribe <span className={styles.btnArrow}>→</span>
              </button>
            </div>

            {/* ROW 2: Navigation Grid */}
            <div className={styles.footerLinksGrid}>
              {/* Col 1: Home */}
              <div className={styles.footerGridCol}>
                <p className={styles.footerColTitle}>HOME</p>
                <ul className={styles.footerLinkList}>
                  <li><a href="#">Who is this for?</a></li>
                  <li><a href="#">Tools and toolkits</a></li>
                </ul>
              </div>

              {/* Col 2: Reports */}
              <div className={styles.footerGridCol}>
                <p className={styles.footerColTitle}>REPORTS & RESOURCES</p>
                <ul className={styles.footerLinkList}>
                  <li><a href="#">UDARTA:EG Field Guide</a></li>
                  <li className={styles.indentedItem}><a href="#">Fundraising</a></li>
                  <li className={styles.indentedItem}><a href="#">Volunteer Engagement</a></li>
                  <li className={styles.arrowItem}><a href="#">UDARTA:EG Report ↗</a></li>
                  <li><a href="#">Donor Motivation</a></li>
                </ul>
              </div>

              {/* Col 3: Email */}
              <div className={styles.footerGridCol}>
                <p className={styles.footerColTitle}>EMAIL CONTACT</p>
                <a href="mailto:partnerships@givingtogetherfoundation.org" className={styles.contactLink}>
                  partnerships@givingtogetherfoundation.org
                </a>

                {/* Address placed below email in same visual column area usually, or separate */}
                <div className={styles.addressBlock}>
                  <p className={styles.footerColTitle} style={{ marginTop: '40px' }}>ADDRESS</p>
                  <p className={styles.addressText}>
                    A-89, Ground Floor, Shastri Nagar, North West<br />
                    Delhi, Delhi 110052, India
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Background Pattern */}
        <img
          src="/assets/footer_background.svg"
          alt=""
          className={styles.footerBackgroundPattern}
        />
      </footer>
    </>
  );
}
