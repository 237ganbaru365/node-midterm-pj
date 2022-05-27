import styles from "./SinglePost.module.css";

export default function SinglePost() {
  return (
    <article className={styles.singlePost}>
      <img
        src="https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770"
        alt="singlePostImg"
        className={styles.singlePostImg}
      />
      <section className={styles.singlePostTitle}>
        <h1>Lorem ipsum dolor sit amet</h1>
        <div className={styles.singlePostEdit}>
          <i
            className={`fa-solid fa-pen-to-square ${styles.singlePostIcon}`}
          ></i>
          <i className={`fa-solid fa-trash ${styles.singlePostIcon}`}></i>
        </div>
      </section>
      <section className={styles.singlePostInfo}>
        <span className={styles.singlePostAuthor}>
          Author: <b>Fumina</b>
        </span>
        <span className={styles.singlePostDate}>
          Date: <b>1 hour ago</b>
        </span>
      </section>
      <section className={styles.singlePostDesc}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          ea odio necessitatibus dignissimos optio magnam officia iusto, esse
          nobis tempora commodi corporis accusamus ad quasi tenetur quis
          officiis quod tempore? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Praesentium ea odio necessitatibus dignissimos optio
          magnam officia iusto, esse nobis tempora commodi corporis accusamus ad
          quasi tenetur quis officiis quod tempore? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Praesentium ea odio necessitatibus
          dignissimos optio magnam officia iusto, esse nobis tempora commodi
          corporis accusamus ad quasi tenetur quis officiis quod tempore? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ea
          odio necessitatibus dignissimos optio magnam officia iusto, esse nobis
          tempora commodi corporis accusamus ad quasi tenetur quis officiis quod
          tempore? consectetur adipisicing elit. Praesentium ea odio
          necessitatibus dignissimos optio magnam officia iusto, esse nobis
          tempora commodi corporis accusamus ad quasi tenetur quis officiis quod
          tempore? consectetur adipisicing elit. Praesentium ea odio
          necessitatibus dignissimos optio magnam officia iusto, esse nobis
          tempora commodi corporis accusamus ad quasi tenetur quis officiis quod
          tempore?
        </p>
      </section>
    </article>
  );
}
