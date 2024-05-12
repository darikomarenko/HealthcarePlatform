import style from './style.module.scss';
import { Link } from 'react-router-dom';
import image from '../../assets/Login/icon1-registration.png';

export default function PatientRegister() {
  return (
    <section>
      <div className={style.registration__form}>
        <h1 className={style.registration__form_title}>Patient Register</h1>
        <p className={style.registration__form_description}>
          Here you can register and get opportunity to use your personal account, it's ease fore
          searching and creation an appointments with doctor.
        </p>

        <form id="patientRegistrationForm">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />
          <div className={style.error__message} id="fullName-error"></div>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <div className={style.error__message} id="email-error"></div>

          <div className={style.password__field}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <span id="showPassword" className={style.eye__icon}>
              <i className={style.eye__icon}></i>
            </span>
          </div>
          <div className={style.error__message} id="password-error"></div>

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
          <div className={style.error__message} id="confirmPassword-error"></div>

          <button className={style.form__button} id="registerBtn" type="submit">
            Register Patient
          </button>
        </form>
        <div id="replyDiv"></div>
        <p className={style.login__info}>
          Already have an account. <Link to="patientRegister">Login as a patient</Link>
        </p>
      </div>

      <div className={style.qoute__section}>
        <img src={image} alt="Physical therapy exercise" />
        <div className={style.blockquote}>
          <p className={style.quote__description}>
            It is no measure of health to be well adjusted to a profoundly sick society.
          </p>
        </div>
      </div>
    </section>
  );
}
