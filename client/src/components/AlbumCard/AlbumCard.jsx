import styles from "./AlbumCard.module.css"

function AlbumCard({ item, getAlbum }) {

    return (
        <div id={styles.albumContainer}>
            <div id={styles.imageConatiner}>
                <img src={item.cover_medium} id={styles.image} />
            </div>
            <div id={styles.infoContainer}>
                <div id={styles.info}>
                    <span id={styles.name}>{item.title}</span>
                </div>
                <div id={styles.info}>
                    <span id={styles.fans}>{"de " + item.artist.name}</span>
                </div>
                {item.explicit_lyrics && <div id={styles.explicit}>EXPLICIT</div>}
                <button onClick={() => getAlbum(item)}>PLAY</button>
            </div>
        </div>
    )
}

export default AlbumCard;