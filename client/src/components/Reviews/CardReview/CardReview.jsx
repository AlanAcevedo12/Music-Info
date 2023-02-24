import { useEffect } from "react";
import { useState } from "react";
import styles from "./CardReview.module.css";
import { Link } from "react-router-dom"

function CardReview({ review }) {
    let reviewData = review.review;
    const date = new Date(reviewData.date);

    return (
        <Link to={`/review/${reviewData.id}`} className={styles.card}>
            <div id={styles.imageContainer}>
                <img id={styles.image}
                    src={`https://api.deezer.com/album/${reviewData.album.id}/image`} />
            </div>
            <div id={styles.albumContainer}>
                <p id={styles.album}>{review.album.title}</p>
                <p id={styles.artist}>{review.album.artist.name}</p>
            </div>
            <div id={styles.infoContainer}>
                <h1 id={styles.title}>{reviewData.title}</h1>
                <p id={styles.description}>{reviewData.description}</p>
            </div>
            <div id={styles.scoreContainer}>
                <h2 id={styles.score}>{reviewData.score}/100</h2>
            </div>
            <div id={styles.authorContainer}>
                <h4 id={styles.author}>by {reviewData.user.name + " " + reviewData.user.surname}</h4>
            </div>
            <div id={styles.dateContainer}>
                <h4 id={styles.date}>{date.toLocaleDateString()}</h4>
            </div>
        </Link >
    )
}

export default CardReview;