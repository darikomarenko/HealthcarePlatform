import style from './style.module.scss';
import image from '../../assets/Login/icon1-registration.png';
import { Link } from 'react-router-dom';

export default function DoctorLogin() {
  return (
    <section>
      <div className={style.registration__form}>
        <h1 className={style.registration__form_title}>Patient Login</h1>
        <p className={style.registration__form_description}>
          Use your personal account to make an appointment with a doctor and follow the established
          recommendations.
        </p>

        <form className={style.registration__form} id="patientLoginForm">
          <label htmlFor="email">Email:</label>
          <input type="email" id="loginEmail" name="email" required />
          <div className={style.error__message} id="loginEmail-error"></div>

          <div className={style.password__field}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="loginPassword" name="password" required />
            <span id="showPassword" className={style.eye__icon}>
              <i className={style.eye__icon}></i>
            </span>
          </div>

          <div className={style.error__message} id="loginPassword-error"></div>
          <p className={style.password__info}>
            <a href="#">Forgot Password ?</a>
          </p>
          <div id="notificationDiv">
            Please, click on the link below to proceed registration, your account does not exist
            yet.
          </div>
          <button className={style.form__button} id="loginBtn" type="submit">
            Login
          </button>

          <p className={style.login__info}>
            Do not have an account. <Link to="patientRegister">Register as a patient</Link>
          </p>
        </form>
      </div>

      <div className={style.quote__section}>
        <img src={image} alt="Physical therapy exercise" />
        <div className={style.blockquote}>
          <p className={style.quote__description}>
            It is no measure of health to be well adjusted to a profoundly sick society.
          </p>
          <p className={style.quote__footer}>-- Jiddu Krishnamurti</p>
        </div>
      </div>
    </section>
  );
}
