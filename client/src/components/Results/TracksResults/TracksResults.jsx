import { useSelector } from "react-redux";
import TrackCard from "../TrackCard/TrackCard";
import styles from "./TracksResults.module.css";
import Loading from "../../Loading/Loading"

function TracksResults({ name, items }) {

    console.log(items)

    return (
        <div id={styles.SearchResults}>
            {items.length ? <>
                <div id={styles.titleContainer}>
                    <h1 id={styles.title}>{items.length + " "}canciones</h1>
                </div>
                <div id={styles.orderContainer}>
                    <div id={styles.trackButtonContainer}>
                        <button className={styles.orderButton}>CANCIÓN</button>
                    </div>
                    <div id={styles.buttonContainer}>
                        <button className={styles.orderButton}>ARTISTA</button>
                    </div>
                    <div id={styles.buttonContainer}>
                        <button className={styles.orderButton}>ÁLBUM</button>
                    </div>
                    <div id={styles.durationButtonContainer}>
                        <button className={styles.orderButton}>O</button>
                    </div>
                </div>
            </> : <Loading />}
            {items.map((item, index) => {
                return <TrackCard item={item} index={index} key={item.id} />
            })}
        </div>
    )
}

export default TracksResults;