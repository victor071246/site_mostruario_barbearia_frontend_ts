import styles from './HomePage.module.css';
import cutting_hair_video from '../assets/barbeiro_1.mp4';
import mesh from '../assets/malha_pontilhada.png';

const AGENDAMENTO_URL = 'https://meusite.com.br';

export function HomePage() {
  return (
    <div className={styles.main_page}>
      <div className={styles.wrap}>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src={cutting_hair_video} type="video/mp4"></source>
        </video>
        <img src={mesh} className={styles.mesh}></img>
        <button
          className={styles.appointment_button}
          onClick={() => window.open(AGENDAMENTO_URL, '_blank')}
        >
          Agende seu horário!
        </button>
      </div>
    </div>
  );
}
