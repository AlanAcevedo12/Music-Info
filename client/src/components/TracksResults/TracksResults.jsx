import { useSelector } from "react-redux";
import TrackCard from "../TrackCard/TrackCard";
import styles from "./TracksResults.module.css";

function TracksResults({ name, items }) {

    return (
        <div id={styles.SearchResults}>
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
            {items.map((item, index) => {
                return <TrackCard item={item} index={index} key={index} />
            })}
        </div>
    )
}

export default TracksResults;