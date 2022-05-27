import SideBar from "../SideBar/SideBar";
import styles from "./Single.module.css";
import SinglePost from "./SinglePost.jsx/SinglePost";

export default function Single() {
  return (
    <>
      <div className={styles.wrapper}>
        <main className={styles.single}>
          <SinglePost />
        </main>
        <SideBar />
      </div>
    </>
  );
}
