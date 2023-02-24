import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewContent from "../../../components/Reviews/ReviewContent/ReviewContent";
import { clearReview, getReviewById } from "../../../redux/actions/actions";
import styles from "./Review.module.css";
import NavBar from "../../../components/NavBar/NavBar";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading"

function Review() {
    const dispatch = useDispatch();
    const review = useSelector(store => store.review);
    let { reviewId } = useParams("reviewId");

    useEffect(() => {
        dispatch(getReviewById(reviewId));
    }, [])

    useEffect(() => {
        return () => {
            dispatch(clearReview());
        }
    }, [])

    return (
        <div id={styles.home}>
            <div id={styles.mainContainer}>
                <div id={styles.nav}>
                    <NavBar />
                </div>
                <div id={styles.content}>
                    <div id={styles.search}>
                        <SearchBar />
                    </div>
                    <div id={styles.review}>
                        {
                            !review.data ?
                                <Loading /> :
                                <ReviewContent review={review.review} albumData={review.data} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;