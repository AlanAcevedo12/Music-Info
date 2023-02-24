import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReviewById } from "../../../redux/actions/actions";
import styles from "./ReviewContent.module.css";

function ReviewContent({ review, albumData }) {

    console.log(review)

    let date;
    if (review) date = new Date(review.date);

    return (
        <div id={styles.reviewContent}>
            <div id={styles.titleCoverContainer}>
                <h1 id={styles.title}>{review?.title.toUpperCase()}</h1>
                <div id={styles.coverContainer}>
                    <img id={styles.cover} src={albumData.cover_xl} />
                </div>
            </div>
            <p id={styles.description}>{review?.description}</p>
            <h2 id={styles.finalScore}>Puntaje final: {review?.score}/100</h2>
            <div id={styles.reviewFooter}>
                <h4>{date?.toLocaleDateString()}</h4>
                <h5>by {review?.user.name + " " + review?.user.surname}</h5>
                {/* <h5>by {review?.user.username}</h5> */}
            </div>
        </div>
    )
}

export default ReviewContent;