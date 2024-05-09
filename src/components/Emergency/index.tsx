import style from './style.module.scss';
import image from '../../assets/Emergency/Public health-rafiki 1.png';

export default function Emergency() {
  return (
    <main>
      <section className={style.main}>
        <div className={style.emergency__page}>
          <div className={style.emergency__page_text}>
            <h1>Emergency Contact</h1>
            <p className={style.emergency__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <p className={style.emergency__contact}>
              Call ambulance: xxxxxxxxxxxx <br />
              Suwaseriya: 1990
            </p>
          </div>
          <div className={style.emergency__page_img}>
            <img src={image} alt="Public-health" />
          </div>
        </div>
      </section>
    </main>
  );
}
