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
              <p className={styles.getInvolvedLabel}>Get Involved</p>

              {/* DESKTOP VERSION (3 Lines) */}
              <div className={`${styles.getInvolvedForm} ${styles.footerFormDesktop}`}>
                <div className={styles.formLine}>
                  Hi, I’m <input type="text" placeholder="first name" size={10} className={`${styles.inlineInput} ${styles.inputFirstName}`} />{' '}
                  <input type="text" placeholder="last name" size={9} className={`${styles.inlineInput} ${styles.inputLastName}`} />, I’m from <input type="text" placeholder="name of your organisation" size={25} className={styles.inlineInput} />.
                </div>
                <div className={styles.formLine}>
                  I’d love to be a part of Giving Together Foundation’s initiatives.
                </div>
                <div className={styles.formLine}>
                  My email address is <input type="email" placeholder="your email address" size={18} className={styles.inlineInput} />  if you need to reach out to me for updates & details.
                </div>
              </div>

              {/* MOBILE VERSION (5 Lines) */}
              <div className={`${styles.getInvolvedForm} ${styles.footerFormMobile}`}>
                <div className={styles.formLine}>
                  Hi, I’m <input type="text" placeholder="first name" size={10} className={`${styles.inlineInput} ${styles.inputFirstName}`} />{' '}
                  <input type="text" placeholder="last name" size={9} className={`${styles.inlineInput} ${styles.inputLastName}`} />,
                </div>
                <div className={styles.formLine}>
                  I’m from <input type="text" placeholder="name of your organisation" size={25} className={`${styles.inlineInput} ${styles.inputOrg}`} />.
                </div>
                <div className={styles.formLine}>
                  I’d love to be a part of Giving Together Foundation’s
                </div>
                <div className={styles.formLine}>
                  initiatives. My email address is <input type="email" placeholder="your email address" size={18} className={`${styles.inlineInput} ${styles.inputEmail}`} />
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
                  <li><a href="#" className={styles.homeLink}>Who is this for?</a></li>
                  <li><a href="#" className={styles.homeLink}>Tools and toolkits</a></li>
                </ul>
              </div>

              {/* Col 2: Reports */}
              <div className={styles.footerGridCol}>
                <p className={styles.footerColTitle}>REPORTS & RESOURCES</p>
                <ul className={styles.footerLinkList}>
                  <li><a href="#">UDARTA:EG Field Guide</a></li>
                  <li className={styles.indentedItem}><a href="http://localhost:3000/" className={styles.subItemLink}>Fundraising</a></li>
                  <li className={styles.indentedItem}><a href="#" className={styles.subItemLink}>Volunteer Engagement</a></li>
                  <li className={styles.arrowItem}>
                    <a href="https://www.givingtuesday.org/india/udarta-eg/report/" target='_blank'>
                      UDARTA:EG Report
                      <img src="/assets/footer_arrow.svg" alt="" className={styles.externalArrowIcon} />
                    </a>
                  </li>
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
