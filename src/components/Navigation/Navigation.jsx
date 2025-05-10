import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/contacts" className={styles.link}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
