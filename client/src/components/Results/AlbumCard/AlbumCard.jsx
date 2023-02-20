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
                <div id={styles.playButtonContainer}>
                    <button id={styles.playButton} onClick={() => getAlbum(item)}>
                        <svg focusable="false" height="1em" role="img" width="1em" viewBox="0 0 12 12" aria-hidden="true">
                            <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div id={styles.reviewButtonContainer}>
                    <button id={styles.reviewButton}>
                        <Link to={`/review/create/${item.id}`} id={styles.link}>
                            <svg focusable="false" height="100%" viewBox="1 1 15 15" aria-hidden="true">
                                <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
                                d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                                </path>
                            </svg>
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