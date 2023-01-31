import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Search.module.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchResults from "../../components/Results/SearchResults/SearchResults";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clearSearch, getAlbum, getArtist, getTrack } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

function Search() {
    const dispatch = useDispatch();
    const {input} = useParams();

    useEffect(() => {
        dispatch(clearSearch());
        dispatch(getArtist(input));
        dispatch(getTrack(input));
        dispatch(getAlbum(input)); 
    },[])

    return (
        <div id={styles.search}>
            {/* <Player /> */}
            <div id={styles.mainContainer}>
                <div id={styles.nav}>
                    <NavBar />
                </div>
                <div id={styles.searchAndResultContainer}>
                    <div id={styles.search}>
                        <SearchBar defaultInput={input}/>
                    </div>
                    <SearchResults />
                </div>
            </div>
        </div>
    );
}

export default Search;
