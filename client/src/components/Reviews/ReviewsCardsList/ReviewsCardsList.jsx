import CardReview from "../CardReview/CardReview";
import styles from "./ReviewsCardsList.module.css";

function ReviewsCardsList({ reviews }) {
    return (
        <div id={styles.cards}>
            <h1>Lista de reseñas</h1>
            <br />
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