import style from './style.module.scss';
import HealthLink from '../../assets/DoctorDashboard/Health Link.svg';
import logoutIcon from '../../assets/DoctorDashboard/logout.png';
import chatIcon from '../../assets/DoctorDashboard/chatIcon.svg';
import queueIcon from '../../assets/DoctorDashboard/queueIcon.svg';
import dashboard from '../../assets/DoctorDashboard/dashboard.png';
import { Link } from 'react-router-dom';

export default function DoctorDashboard() {
  return (
    <div className={style.wrapper}>
      <aside className={style.sidebar}>
        <div className={style.sidebar__logo}>
          <Link to="/">
            <img src={HealthLink} alt="" className={style.sidebar__logo_title} />
          </Link>
        </div>
        <div className={style.sidebar__menu}>
          <div className={style.sidebar__menu_item}>
            <div className={style.sidebar__menu_item_title}>Функции</div>
            <div className={style.sidebar__menu_option}>
              <img src={chatIcon} alt="" className={style.sidebar__menu_option_icon} />
              <a href="#" className={style.sidebar__greytext}>
                Чат с поддержкой
              </a>
            </div>
            <div className={style.sidebar__menu_option}>
              <img src={queueIcon} alt="" className={style.sidebar__menu_option_icon} />
              <a href="docdashboard.html" className={style.sidebar__greytext}>
                Пациенты в очереди
              </a>
            </div>
          </div>
          <div className={style.sidebar__menu_item}>
            <div className={style.sidebar__menu_item_title}>Дополнительно</div>
            <div className={style.sidebar__menu_option}>
              <img src={dashboard} alt="" className={style.sidebar__menu_option_icon} />
              <a href="homepage.html" className={style.sidebar__greytext}>
                На главную
              </a>
            </div>
            <div className={style.sidebar__menu_option}>
              <img src={logoutIcon} alt="" className={style.sidebar__menu_option_icon} />
              <a className={style.sidebar__greytext} id="docDashboardLogout">
                Выйти
              </a>
            </div>
          </div>
        </div>
      </aside>
      <main className={style.main_section}>
        <div className={style.greeting_text}>Добрый день!</div>
        <div className={style.table_title}>Ваш список пациентов:</div>
        <table id="doctorDashbordTable">
          <tr className={style.table_head}>
            <th style={{ width: 20 }}>№</th>
            <th style={{ width: 30 }}>Имя доктора</th>
            <th style={{ width: 40 }}>Имя пациента</th>
            <th style={{ width: 40 }}>Дата и время</th>
          </tr>
          <tbody id="appointment-table"></tbody>
        </table>
      </main>
      <div id="loading"></div>
    </div>
  );
}
