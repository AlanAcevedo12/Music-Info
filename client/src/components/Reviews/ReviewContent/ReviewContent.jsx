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
            <h2>{review?.score}/100</h2>
            <p>{review?.description}</p>
            <h4>{date?.toLocaleDateString()}</h4>
            <h5>by {review?.user.name + " " + review?.user.surname}</h5>
        </div>
    )
}

export default ReviewContent;