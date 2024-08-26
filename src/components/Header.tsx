import Logo from "../assets/logo-todolist.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logotipo do To do List" />
    </header>
  );
}
