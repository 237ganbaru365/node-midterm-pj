import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <span className={styles.headerTitleSm}>React & Node</span>
        <span className={styles.headerTitleLg}>Blog</span>
      </div>
      <img
        className={styles.headerImg}
        src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780"
        alt="headerImg"
      />
    </header>
  );
}
