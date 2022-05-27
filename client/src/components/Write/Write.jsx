import styles from "./Write.module.css";

export default function Write() {
  return (
    <>
      <main className={styles.write}>
        <img
          className={styles.writeImg}
          src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770"
          alt="writeImg"
        />
        <form className={styles.writeForm}>
          <div className={styles.writeFormGroup}>
            <label htmlFor="fileInput">
              <i className={`fa-solid fa-plus ${styles.writeIcon}`}></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className={styles.writeInput}
              autoFocus={true}
            />
          </div>
          <div className={styles.writeFormGroup}>
            <textarea
              placeholder="Write your contents here!"
              type="text"
              className={`${styles.writeInput} ${styles.writeText}`}
            ></textarea>
          </div>
          <button className={styles.writeSubmit}>Publish</button>
        </form>
      </main>
    </>
  );
}
