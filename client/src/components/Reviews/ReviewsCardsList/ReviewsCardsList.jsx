import CardReview from "../CardReview/CardReview";
import styles from "./ReviewsCardsList.module.css";
import Loading from "../../Loading/Loading"

function ReviewsCardsList({ reviews }) {
    return (
        <div id={styles.cards}>
            <h1 id={styles.amount}></h1>
            <br />
            { reviews.length ? <div id={styles.orderContainer}>
                <div id={styles.imgButtonContainer}></div>
                <div id={styles.albumButtonContainer}>
                    <button className={styles.orderButton}>ÁLBUM</button>
                </div>
                <div id={styles.summaryButtonContainer}>
                    <button className={styles.orderButton}>RESEÑA</button>
                </div>
                <div id={styles.buttonContainer}>
                    <button className={styles.orderButton}>PUNTAJE</button>
                </div>
                <div id={styles.buttonContainer}>
                    <button className={styles.orderButton}>AUTOR</button>
                </div>
                <div id={styles.buttonContainer}>
                    <button className={styles.orderButton}>FECHA</button>
                </div>
            </div> 
            : <Loading />}
            {
                reviews?.map(
                    (r, k) => {
                        return (
                            <CardReview review={r} key={k} />
                        )
                    }
                )
            }
        </div>
    )
}

export default ReviewsCardsList;