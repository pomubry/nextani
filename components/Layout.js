import footerLinks from '../lib/footerLinks';
import navLinks from '../lib/navLinks';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <span className={styles.aLogo}>A</span>
          <span className={styles.lLogo}>L</span>
        </div>
        {navLinks.map((arr) => (
          <ul className={styles.extLink}>
            {arr.map((item) => {
              let cName =
                item.name === 'Sign Up'
                  ? `${styles.link} ${styles.signup}`
                  : styles.link;
              return (
                <li className={cName}>
                  <a href={item.link} target="_blank" rel="noopener">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        ))}
      </nav>
      {children}
      <footer className={styles.footer}>
        <div className={styles.disclaimer}>
          <h2 className={styles.discHeader}>Disclaimer:</h2>
          <br />
          <p>
            This website is not the official Anilist.co. This is a small project
            made for learning purposes only. However, all data are fetched from
            Anilist's API.
          </p>
        </div>
        <div className={styles.footerLinks}>
          {footerLinks.map((arr) => (
            <ul className={styles.footerUl}>
              {arr.map((item) => (
                <li>
                  <a href={item.link} target="_blank" rel="noopener">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Layout;
