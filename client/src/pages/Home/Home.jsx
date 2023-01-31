import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";

function Home() {

  return (
    <div id={styles.home}>
      <div id={styles.mainContainer}>
        <div id={styles.nav}>
          <NavBar />
        </div>
        <div id={styles.searchAndResultContainer}>
          <div id={styles.search}>
            <SearchBar />
          </div>
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
