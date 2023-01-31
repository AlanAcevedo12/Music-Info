import styles from "./TrackCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, setCurrentQueue, setPlayerTrack } from "../../../redux/actions/actions";
import { useEffect, useState } from "react";

function TrackCard({ item, index }) {
    const dispatch = useDispatch();

    const currentTrack = useSelector(state => state.currentTrack);
    const tracks = useSelector(state => state.tracks);
    const user = useSelector(state => state.user);

    const [isFav, setIsFav] = useState(user?.favoriteTracks.includes(item.id));

    function addTrackToPlayer() {
        dispatch(setCurrentQueue(tracks))
        dispatch(setPlayerTrack(index));
    }

    function addToFavorite() {
        const data = { trackId: item.id, userId: user.id };
        console.log(data);
        dispatch(addFavorite(data))
        setIsFav(true);
    }

    function deleteFavorite() {
        const data = { trackId: item.id, userId: user.id };
        console.log(data);
        dispatch(removeFavorite(data))
        setIsFav(false);
    }

    useEffect(() => {
        console.log("actualiza")
    }, [user])

    // console.log(currentTrack.id);

    return (
        <div className={styles.TrackCard}>
            <div id={styles.mainContainer}>
                <div id={styles.dataContainer}>
                    <div id={styles.coverContainer}>
                        <div id={styles.imageContainer}>
                            <img src={item.album.cover_small} id={styles.coverImage} />
                        </div>
                        <div id={styles.coverButtonContainer}>
                            <button id={styles.coverButton} onClick={addTrackToPlayer}>
                                <svg focusable="false" height="1em" role="img" width="1em" viewBox="0 0 12 12" aria-hidden="true">
                                    <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M2.5.5v11l9-5.5z"></path>
                                </svg>
                            </button>
                        </div>
                        {
                            currentTrack.id === item.id &&
                            <div id={styles.currentContainer} disabled="disabled">
                                <button id={styles.coverButtonDisabled}>
                                    <img src={require("../../../assets/currentPlaying.gif")} />
                                </button>
                            </div>
                        }
                        {
                            (currentTrack.id === item.id && currentTrack.isPlaying === false) &&
                            <div id={styles.currentContainer}>
                                <button id={styles.coverButtonDisabled} disabled="disabled">
                                    <svg class="svg-icon svg-icon-pause" focusable="false" height="1em" role="img" width="1em"
                                        viewBox="0 0 12 12" aria-hidden="true">
                                        <path d="M2.495 0h2.01C4.778 0 5 .224 5 .5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 0 1 2 11.5V.5a.5.5 0 0 1 .495-.5ZM7 .5a.5.5 0 0 1 .495-.5h2.01c.273 0 .495.224.495.5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 0 1 7 11.5V.5Z"></path></svg>
                                </button>
                            </div>
                        }
                    </div>
                    <div id={styles.titleContainer}>
                        <span id={currentTrack.id === item.id ? styles.titleSelected : styles.title}>{item.title}</span>
                    </div>
                </div>
                {
                    user ?
                        <div id={styles.favButtonContainer}>
                            {
                                isFav ?
                                    <button onClick={deleteFavorite} id={styles.addFavButton}>
                                        <svg viewBox="0 0 16 16" focusable="false" id={styles.remFavSvg}>
                                            <path d="M8 3.266C2.837-2.68-2.564 4.578 1.328 8.516 5.22 12.451 8 15 8 15s2.78-2.548 6.672-6.485C18.564 4.501 13.162-2.679 8 3.265z"></path>
                                        </svg>
                                    </button> :
                                    <button onClick={addToFavorite} id={styles.addFavButton}>
                                        <svg viewBox="0 0 16 16" focusable="false" id={styles.favSvg}>
                                            <path d="m8 4.79-.755-.869c-1.17-1.348-2.252-1.832-3.093-1.9-.836-.067-1.59.263-2.164.858C.802 4.108.528 6.283 2.04 7.812a245.96 245.96 0 0 0 4.775 4.7c.482.46.882.837 1.186 1.122.304-.285.704-.663 1.186-1.123a238.026 238.026 0 0 0 4.771-4.695 3.545 3.545 0 0 0 .057-4.963c-.572-.589-1.324-.915-2.161-.843-.843.072-1.926.562-3.098 1.911L8 4.791zm6.672 3.725C10.78 12.452 8 15 8 15s-2.78-2.548-6.672-6.485c-3.717-3.76 1.043-10.549 5.976-5.972.232.215.464.455.696.723.232-.267.464-.508.696-.723C13.63-2.04 18.39 4.68 14.672 8.515z"></path>
                                            <path d="m8 4.79-.755-.869c-1.17-1.348-2.252-1.832-3.093-1.9-.836-.067-1.59.263-2.164.858C.802 4.108.528 6.283 2.04 7.812a245.96 245.96 0 0 0 4.775 4.7c.482.46.882.837 1.186 1.122.304-.285.704-.663 1.186-1.123a238.026 238.026 0 0 0 4.771-4.695 3.545 3.545 0 0 0 .057-4.963c-.572-.589-1.324-.915-2.161-.843-.843.072-1.926.562-3.098 1.911L8 4.791zm6.672 3.725C10.78 12.452 8 15 8 15s-2.78-2.548-6.672-6.485c-3.717-3.76 1.043-10.549 5.976-5.972.232.215.464.455.696.723.232-.267.464-.508.696-.723C13.63-2.04 18.39 4.68 14.672 8.515z">
                                            </path>
                                        </svg>
                                    </button>

                            }
                        </div> : null
                }
                <div id={styles.artistContainer}>
                    <a href={item.artist.link} id={currentTrack.id === item.id ? styles.artistSelected : styles.artist}>{item.artist.name}</a>
                </div>
                <div id={styles.albumContainer}>
                    <a href={item.album.link} id={currentTrack.id === item.id ? styles.albumSelected : styles.album}>{item.album.title}</a>
                </div>
                <div id={currentTrack.id === item.id ? styles.durationContainerSelected : styles.durationContainer}>
                    <span>{secondsToString(item.duration)}</span>
                </div>
            </div>
        </div>
    )
}

export default TrackCard;

function secondsToString(seconds) {
    let minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    let second = seconds % 60;
    second = (second < 10) ? '0' + second : second;
    return minute + ':' + second;
}


//<h4>{item.id + " - " + item.title + " - " + item.artist.name}</h4>

/*
            {name === "Artistas" &&
                <div className="ResultsCard">
                    <h4>{item.id+" - "+item.name+" - "+new Intl.NumberFormat().format(item.nb_fan)}</h4>
                </div>
            }
            {name === "Albumes" &&
                <div className="ResultsCard">
                    <h4>{item.id+" - "+item.title+" - "+item.artist.name}</h4>
                </div>
            }
            */