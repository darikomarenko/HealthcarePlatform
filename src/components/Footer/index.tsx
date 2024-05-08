import style from './style.module.scss';
import logo from '../../assets/Footer/Logo_footer.svg';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <img className={style.footer__logo} src={logo} alt="logo_footer" />
      <div className={style.footer__line}></div>
      <div className={style.footer__section}>
        <nav className={style.footer__list}>
          <a href="!#">На главную</a>
          <a href="!#">О нас</a>
          <a href="!#">Связаться с нами</a>
        </nav>
        <div className={style.footer__media}>
          <a href="!#">
            <i className={style.footer__icon}></i>
          </a>
          <a href="!#">
            <i className={style.footer__icon}></i>
          </a>
          <a href="!#">
            <i className={style.footer__icon}></i>
          </a>
          <a href="!#">
            <i className={style.footer__icon}></i>
          </a>
          <a href="!#">
            <i className={style.footer__icon}></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
