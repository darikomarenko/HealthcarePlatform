import style from './style.module.scss';
import logo from '../../assets/Header/Logo_hands.png';

export default function Header() {
  return (
    <header className={style.header}>
      <a href="#">
        <img className={style.header__logo} src={logo} alt="Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="">Скорая помощь</a>
          </li>
          <li>
            <a href="">Я - врач</a>
          </li>
          <li>
            <a href="">Я - пациент</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
