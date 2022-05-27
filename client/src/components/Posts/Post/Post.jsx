import styles from "./Post.module.css";

export default function Post() {
  return (
    <article className={styles.post}>
      <img
        className={styles.postImg}
        src="https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770"
        alt="postImg"
      />
      <section className={styles.postInfo}>
        <div className={styles.postCats}>
          <span className={styles.postCat}>Beer</span>
          <span className={styles.postCat}>Culture</span>
        </div>
        <span className={styles.postTitle}>Lorem ipsum dolor sit amet</span>
        <hr />
        <span className={styles.postDate}>1 hour ago</span>
        <p className={styles.postDesc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
          dignissimos repellat dicta. Consequuntur reprehenderit laborum aut in
          accusantium omnis quam quasi quod rerum, fugit saepe earum assumenda
          voluptatibus maiores dignissimos! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quas dignissimos repellat dicta.
          Consequuntur reprehenderit laborum aut in accusantium omnis quam quasi
          quod rerum, fugit saepe earum assumenda voluptatibus maiores
          dignissimos!
        </p>
      </section>
    </article>
  );
}
