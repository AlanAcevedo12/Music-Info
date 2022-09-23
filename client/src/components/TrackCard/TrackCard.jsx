import styles from "./TrackCard.module.css";

function TrackCard({ item }) {
    return (
        <div className={styles.TrackCard}>
            <div id={styles.mainContainer}>
                <div id={styles.dataContainer}>
                    <div id={styles.coverContainer}>
                        <div id={styles.imageContainer}>
                            <img src={item.album.cover_small} id={styles.coverImage} />
                        </div>
                        <div id={styles.coverButtonContainer}>
                            <button id={styles.coverButton}>
                                <svg focusable="false" height="1em" role="img" width="1em" viewBox="0 0 12 12" aria-hidden="true">
                                    <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M2.5.5v11l9-5.5z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id={styles.titleContainer}>
                        <span id={styles.title}>{item.title}</span>
                    </div>
                </div>
                <div id={styles.artistContainer}>
                    <a href={item.artist.link} id={styles.artist}>{item.artist.name}</a>
                </div>
                <div id={styles.albumContainer}>
                    <a href={item.album.link} id={styles.album}>{item.album.title}</a>
                </div>
                <div id={styles.durationContainer}>
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