import styles from "./ArtistsResults.module.css";

function ArtistsResults({ items }) {
    return (
        <div id={styles.SearchResults}>
            <div id={styles.titleContainer}>
                <h1 id={styles.title}>{items.length + " "}artistas</h1>
            </div>
            <div id={styles.itemsContainer}>
                {
                    items.map(
                        (item, k) => {
                            return (
                                <div id={styles.artistContainer}>
                                    <div id={styles.imageConatiner}>
                                        <img src={item.picture_medium} id={styles.image} />
                                    </div>
                                    <div id={styles.infoContainer}>
                                        <span id={styles.name}>{item.name}</span>
                                        <span id={styles.fans}>{new Intl.NumberFormat().format(item.nb_fan)+" seguidores"}</span>
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

export default ArtistsResults;