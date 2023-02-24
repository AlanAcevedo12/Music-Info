import styles from "./AlbumsResults.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumById, setCurrentQueue, setPlayerTrack } from "../../../redux/actions/actions";
import { useEffect } from "react";

function AlbumsResults({ items }) {
    const dispatch = useDispatch();
    const album = useSelector(state => state.album);

    async function getAlbum(item) {
        await dispatch(getAlbumById(item.id));
        dispatch(setPlayerTrack(0));
        // console.log(album);
    }

    console.log(items)

    // useEffect(() => {
    //     if (album.tracks) {
    //         dispatch(setCurrentQueue(album.tracks.data))
    //         console.log("Album loaded")
    //     }
    // }, [album])
    
    return (
        <div id={styles.SearchResults}>
            <div id={styles.titleContainer}>
                <h1 id={styles.title}>{items.length + " "}álbumes</h1>
            </div>
            <div id={styles.itemsContainer}>
                {
                    items.map(
                        (item, k) => {
                            return <AlbumCard item={item} key={k} getAlbum={getAlbum}/>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default AlbumsResults;