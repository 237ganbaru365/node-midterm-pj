import styles from "./Posts.module.css";
import Post from "./Post/Post";
export default function Posts() {
  return (
    <article className={styles.posts}>
      <Post />
      <Post />
      <Post />
      <Post />
    </article>
  );
}
