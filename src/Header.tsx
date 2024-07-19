import {Link} from "react-router-dom";
import styles from "./Header.module.css"

export default function Header() {
  return(
    <header>
      <Link to={'/'} className={styles.headerLink} style={{ fontSize: "1.3em" }}>Tomas Robino</Link>
      <div className={styles.headerGroup}>
        <Link to={'#projects'} className={styles.headerLink}>projects</Link>
        <Link to={'#about'} className={styles.headerLink}>about</Link>
        <Link to={'https://www.linkedin.com/in/tomas-robino/'} target={"_blank"} className={styles.headerLink}>contact</Link>
      </div>
    </header>
  )
}