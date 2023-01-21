import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className={styles.label} htmlFor="username">
        Username:{" "}
      </label>
      <br />
      <input className={styles.input} type="text" id="username" required />{" "}
      <br />
      <br />
      <label className={styles.label} htmlFor="psw">
        Password:{" "}
      </label>{" "}
      <br />
      <input className={styles.input} type="password" id="psw" required />{" "}
      <br />
      <input className={styles.submit} type="submit" value="submit" />
    </form>
  );
}

export default LoginForm;
