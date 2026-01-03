import styles from './TopHeader.module.css';
import { FaCog } from 'react-icons/fa';
import logo from '../../assets/logo_pk.png';

export function TopHeader() {
  return (
    <header className={styles.top_header}>
      <div className={styles.logo}>
        <img src={logo}></img>
      </div>
      <div className="top-actions">
        <button className={styles.config_button}>
          <FaCog></FaCog>
        </button>
      </div>
    </header>
  );
}
