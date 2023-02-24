import styles from "./SearchResults.module.css";
import TracksResults from "../TracksResults/TracksResults";
import ArtistsResults from "../ArtistsResults/ArtistsResults"
import { useState } from "react";
import { useSelector } from "react-redux";
import AlbumsResults from "../AlbumsResults/AlbumsResults";

// import loadingGif from "../../assets/loading.gif"

function SearchResults() {
  const searchResultsArtist = useSelector(state => state.artists);
  const searchResultsTrack = useSelector(state => state.tracks);
  const searchResultsAlbum = useSelector(state => state.albums);

  const [searchNav, setSearchNav] = useState("Tracks");

  function onNavHandler(e) {
    setSearchNav(e.target.name)
  }

  console.log(searchResultsAlbum)

  return (
    <div>
      <div id={styles.resultsNav}>
        <div id={styles.navContainer}>
          {/* <div className={styles.NavButtonContainer}>
            <button className={searchNav === "All" ? styles.NavButtonSelected : styles.NavButton} name="All" onClick={onNavHandler}>Todos</button>
          </div> */}
          <div className={styles.NavButtonContainer}>
            <button className={searchNav === "Tracks" ? styles.NavButtonSelected : styles.NavButton} name="Tracks" onClick={onNavHandler}>Canciones</button>
          </div>
          <div className={styles.NavButtonContainer}>
            <button className={searchNav === "Artists" ? styles.NavButtonSelected : styles.NavButton} name="Artists" onClick={onNavHandler}>Artistas</button>
          </div>
          <div className={styles.NavButtonContainer}>
            <button className={searchNav === "Albums" ? styles.NavButtonSelected : styles.NavButton} name="Albums" onClick={onNavHandler}>Álbumes</button>
          </div>
        </div>
      </div>

      {/* {searchNav === "All" && (
        <>
          <SearchResults name="Canciones" items={searchResultsTrack} />
          <SearchResults name="Artistas" items={searchResultsArtist} />
          <SearchResults name="Albumes" items={searchResultsAlbum} />
        </>
      )} */}
      {searchNav === "Tracks" && <TracksResults name="Canciones" items={searchResultsTrack} />}
      {searchNav === "Artists" && <ArtistsResults name="Artistas" items={searchResultsArtist} />}
      {searchNav === "Albums" && <AlbumsResults name="Albumes" items={searchResultsAlbum} />}

      {/* <audio controls="controls">
        <source src="https://cdns-preview-7.dzcdn.net/stream/c-7e6044037d3d471df9fa9e6a6cd05bec-3.mp3" type="audio/mpeg" />
      </audio> */}
    </div>
  )
}

export default SearchResults;