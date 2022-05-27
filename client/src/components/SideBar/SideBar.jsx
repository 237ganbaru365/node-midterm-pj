import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1592621385612-4d7129426394?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
          alt="userImg"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ullam
          dolorem vel voluptatibus accusamus voluptatem maxime voluptate odit
          est? Omnis cum dolores.
        </p>
      </div>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>CATEGORIES</span>
        <ul className={styles.sidebarCat}>
          <li className={styles.sidebarCatItem}>Travel</li>
          <li className={styles.sidebarCatItem}>Beer</li>
          <li className={styles.sidebarCatItem}>Event</li>
          <li className={styles.sidebarCatItem}>People</li>
          <li className={styles.sidebarCatItem}>Culture</li>
          <li className={styles.sidebarCatItem}>Gear</li>
        </ul>
      </div>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>FOLLOW US</span>
        <div className={styles.sidebarSocial}>
          <i
            className={`fa-brands fa-facebook-square ${styles.sidebarSnsIcon}`}
          ></i>
          <i
            className={`fa-brands fa-instagram-square ${styles.sidebarSnsIcon}`}
          ></i>
          <i
            className={`fa-brands fa-twitter-square ${styles.sidebarSnsIcon}`}
          ></i>
        </div>
      </div>
    </aside>
  );
}
