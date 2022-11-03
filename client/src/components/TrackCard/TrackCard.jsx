import styles from "./TrackCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQueue, setPlayerTrack } from "../../redux/actions/actions";

function TrackCard({ item, index }) {
    const dispatch = useDispatch();

    const currentTrack = useSelector(state => state.currentTrack);
    const tracks = useSelector(state => state.tracks);

    function addTrackToPlayer() {
        dispatch(setCurrentQueue(tracks))
        dispatch(setPlayerTrack(index));
    }

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
                                    <img src={require("../../assets/currentPlaying.gif")} />
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