import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <i className={`fa-solid fa-cart-shopping ${styles.navIcon}`}></i>
        <i className={`fa-solid fa-pizza-slice ${styles.navIcon}`}></i>
        <i className={`fa-solid fa-map-location-dot ${styles.navIcon}`}></i>
      </div>
      <div className={styles.navCenter}>
        <ul className={styles.navMenu}>
          <li className={styles.navMenuItem}>HOME</li>
          <li className={styles.navMenuItem}>ABOUT</li>
          <li className={styles.navMenuItem}>CONTACT</li>
          <li className={styles.navMenuItem}>WRIGHT</li>
          <li className={styles.navMenuItem}>LOGOUT</li>
        </ul>
      </div>
      <div className={styles.navRight}>
        <img
          className={styles.navUserImage}
          src="https://images.unsplash.com/photo-1592621385612-4d7129426394?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
          alt="icon"
        />
        <i
          className={`fa-solid fa-magnifying-glass ${styles.navSearchIcon}`}
        ></i>
      </div>
    </nav>
  );
}
