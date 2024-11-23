import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>
              Головна
            </Link>
          </li>
          <li>
            <Link to="/albums" className={styles.navLink}>
              Альбоми
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>
              Про проект
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
