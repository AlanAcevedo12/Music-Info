import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewById } from "../../redux/actions/actions";
import styles from "./ReviewContent.module.css";

function ReviewContent({ review }) {
    return (
        <div id={styles.reviewContent}>
            <h1>{review.title}</h1>
            <h1>{review.score}</h1>
            <p>{review.description}</p>
            <h1>{review.date}</h1>
            <h1>{review.user.name}</h1>
        </div>
    )
}

export default ReviewContent;