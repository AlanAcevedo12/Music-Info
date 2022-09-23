import styles from "./AlbumsResults.module.css";

function AlbumsResults({ items }) {
    return (
        <div id={styles.SearchResults}>
            <div id={styles.titleContainer}>
                <h1 id={styles.title}>{items.length + " "}álbumes</h1>
            </div>
            <div id={styles.itemsContainer}>
                {
                    items.map(
                        (item, k) => {
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
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default AlbumsResults;