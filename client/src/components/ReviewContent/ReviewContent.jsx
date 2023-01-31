import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewById } from "../../redux/actions/actions";
import styles from "./ReviewContent.module.css";

function ReviewContent({ review }) {
    const date = new Date(review.date);
    return (
        <div id={styles.reviewContent}>
            <h1>{review.title.toUpperCase()}</h1>
            <h2>{review.score}/100</h2>
            <p>{review.description}</p>
            <h4>{date.toLocaleDateString()}</h4>
            <h5>by {review.user.name + " " + review.user.surname}</h5>
        </div>
    )
}

export default ReviewContent;