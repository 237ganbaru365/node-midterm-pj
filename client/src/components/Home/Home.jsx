import Header from "../Layout/Header";
import Posts from "../Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.home}>
          <Posts />
        </main>
        <SideBar />
      </div>
    </>
  );
}
