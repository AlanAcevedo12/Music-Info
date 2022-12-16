import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import TracksResults from "../../components/TracksResults/TracksResults";
import ArtistsResults from "../../components/ArtistsResults/ArtistsResults"
import styles from "./Home.module.css";
import AlbumsResults from "../../components/AlbumsResults/AlbumsResults";
import Player from "../../components/Player/Player";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect } from "react";

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
