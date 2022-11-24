import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Search.module.css";
import Player from "../../components/Player/Player";
import NavBar from "../../components/NavBar/NavBar";
import SearchResults from "../../components/SearchResults/SearchResults";

function Search() {

  return (
    <div id={styles.search}>
      <Player />
      <div id={styles.mainContainer}>
        <div id={styles.nav}>
          <NavBar />
        </div>
        <div id={styles.searchAndResultContainer}>
          <div id={styles.search}>
            <SearchBar />
          </div>
          <SearchResults />
        </div>
      </div>
    </div>
  );
}

export default Search;
