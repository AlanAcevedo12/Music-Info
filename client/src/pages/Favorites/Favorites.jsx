import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import TracksResults from "../../components/TracksResults/TracksResults";
import ArtistsResults from "../../components/ArtistsResults/ArtistsResults"
import styles from "./Favorites.module.css";
import AlbumsResults from "../../components/AlbumsResults/AlbumsResults";
import Player from "../../components/Player/Player";
import NavBar from "../../components/NavBar/NavBar";
import SearchResults from "../SearchResults/SearchResults";

function Favorites() {

    const user = useSelector(state => state.user);

    return (
        <div id={styles.home}>
            <Player />
            <div id={styles.mainContainer}>
                <div id={styles.nav}>
                    <NavBar />
                </div>
                <div id={styles.searchAndResultContainer}>
                    <div id={styles.search}>
                        <SearchBar />
                    </div>
                    <div>
                        <h1>Favoritos</h1>
                        <ul>
                            {
                                user.favoriteTracks?.map(
                                    (f, k) => {
                                        console.log(f)
                                        return (<li>
                                            id: {f}
                                        </li>)
                                    }
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favorites;
