import styles from "./CardReview.module.css";

function CardReview({ review }) {
    const date = new Date(review.date);
    return (
        <div className={styles.card}>
            <div id={styles.imageContainer}>
                <img id={styles.image}
                    src={`https://api.deezer.com/album/${review.album.id}/image`} />
            </div>
            <div id={styles.infoContainer}>
                <h1>{review.title}</h1>
                <p>{review.description}</p>
            </div>
            <div id={styles.scoreContainer}>
                <h2>{review.score}/100</h2>
            </div>
            <div id={styles.dateContainer}>
                <h4>{date.toLocaleDateString()}</h4>
            </div>
        </div>
    )
}

export default CardReview;