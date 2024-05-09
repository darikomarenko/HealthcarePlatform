import style from './style.module.scss';
import logo from '../../assets/Header/Logo_hands.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img className={style.header__logo} src={logo} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="emergency">Скорая помощь</Link>
          </li>
          <li>
            <Link to="">Я - врач</Link>
          </li>
          <li>
            <Link to="">Я - пациент</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
