import style from './style.module.scss';
import logo from '../../assets/Homepage/Combined Shape.svg';

export default function Homepage() {
  return (
    <main className={style.main}>
      <div className={style.intro__section}>
        <div className={style.intro__left_part}>
          <h1 className={style.intro__title}>Health Link</h1>
          <p className={style.intro__description}>
            Представляем HealthLink: революционную платформу, созданную для налаживания связи между
            врачами и пациентами, предлагающую виртуальные медицинские консультации и необходимые
            медицинские услуги удаленно.
          </p>
          <ul className={style.about__button}>
            <li>
              <a href="#" className={style.premium__btn}>
                О нас
              </a>
            </li>
          </ul>
        </div>

        <div className={style.intro__right_part}></div>
      </div>
      <div className={style.mission__section}>
        <div className={style.mission__left_part}></div>

        <div className={style.mission__right_part}>
          <h4 className={style.mission__title}>Наша миссия</h4>
          <p className={style.mission__description}>
            Наша миссия – обеспечить равный доступ к здравоохранению для всех, независимо от
            географического или финансового положения.
          </p>
          <div className={style.mission__something}>
            <div className={style.mission__something_part}>
              <img src={logo} alt="something" />
              <p className={style.missio__something_text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor.
              </p>
            </div>

            <div className={style.mission__something_part}>
              <img src={logo} alt="something" />
              <p className={style.missio__something_text}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.premium__section_background}>
        <div className={style.premium__section}>
          <h4 className={style.premium__title}>Go Health Link Premium</h4>
          <p className={style.premium__title}>
            Copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus
          </p>
          <h4 className={style.premium__price}>Rs. 2000 / Month</h4>

          <ul>
            <li className={style.premium__btn}>
              <a href="#">Buy Now</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
