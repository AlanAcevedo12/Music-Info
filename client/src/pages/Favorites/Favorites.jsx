import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Favorites.module.css";
import Player from "../../components/Player/Player";
import NavBar from "../../components/NavBar/NavBar";
import SearchResults from "../../components/Results/SearchResults/SearchResults";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clearSearch, getAlbumsById, getTracksById } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function Search() {
    const dispatch = useDispatch();
    const { input } = useParams();

    const tracks = useSelector(state => state.user.favoriteTracks);
    const albums = useSelector(state => state.user.favoriteAlbums);

    useEffect(() => {
        dispatch(clearSearch());
    }, [])

    useEffect(() => {
        if (tracks.length) dispatch(getTracksById(tracks));
    }, [tracks])

    useEffect(() => {
        if (albums?.length) dispatch(getAlbumsById(albums));
    }, [albums])

    return (
        <div id={styles.search}>
            {/* <Player /> */}
            <div id={styles.mainContainer}>
                <div id={styles.nav}>
                    <NavBar />
                </div>
                <div id={styles.searchAndResultContainer}>
                    <div id={styles.search}>
                        <SearchBar defaultInput={input} />
                    </div>
                    {
                        tracks.length ?
                            <SearchResults />
                            :
                            <h1>Aún no has agregado canciones favoritas</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;
