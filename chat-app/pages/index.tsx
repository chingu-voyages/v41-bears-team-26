import type { NextPage } from "next";
import styles from "../styles/01-modules/login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Log in to BEARS26 chat application</h1>
      <label htmlFor="email">Email address</label>
      <input className={styles.email} type="email" placeholder="john@doe.com" />
      <label htmlFor="password">Password</label>
      <input
        className={styles.password}
        type="password"
        placeholder="Enter a password"
      />
      <div className={styles.remember_password}>
        <input type="checkbox" className={styles.checkbox} />
        <p> Remember password</p>
      </div>
      <input type={"button"} value="Sign Up" className={styles.sign_up} />
      <p>
        No account? <a href="#">Sign In</a>
      </p>
      Or
      <div className={styles.google_auth}>
        <FontAwesomeIcon icon={faGoogle} /> Log in with google
      </div>
    </div>
  );
};

export default Login;
