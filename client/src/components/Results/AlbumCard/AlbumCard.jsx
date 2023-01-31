import { Link } from "react-router-dom";
import styles from "./AlbumCard.module.css"

function AlbumCard({ item, getAlbum }) {

    return (
        <div id={styles.albumContainer}>
            <div id={styles.albumImage}>
                <div id={styles.imageConatiner}>
                    <div id={styles.filter}></div>
                    <img src={item.cover_medium} id={styles.image} />
                </div>
                <div id={styles.buttonContainer}>
                    <button id={styles.playButton} onClick={() => getAlbum(item)}>
                        <svg focusable="false" height="1em" role="img" width="1em" viewBox="0 0 12 12" aria-hidden="true">
                            <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z">
                            </path>
                        </svg>
                    </button>
                    <button>
                        <Link to={`/review/create/${item.id}`} >
                            RESEÑA
                        </Link>
                    </button>
                </div>
            </div>

            <div id={styles.infoContainer}>
                <div id={styles.info}>
                    <span id={styles.name}>{item.title}</span>
                </div>
                <div id={styles.info}>
                    <span id={styles.fans}>{"de " + item.artist.name}</span>
                </div>
                {item.explicit_lyrics && <div id={styles.explicit}>EXPLICIT</div>}
            </div>
        </div>
    )
}

export default AlbumCard;