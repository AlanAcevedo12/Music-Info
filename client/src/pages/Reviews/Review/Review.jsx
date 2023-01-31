import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewContent from "../../../components/Reviews/ReviewContent/ReviewContent";
import { getReviewById } from "../../../redux/actions/actions";
import styles from "./Review.module.css";
import NavBar from "../../../components/NavBar/NavBar";
import SearchBar from "../../../components/SearchBar/SearchBar";

function Review() {
    const dispatch = useDispatch();
    const review = useSelector(store => store.review);
    useEffect(() => {
        dispatch(getReviewById(2));
    })
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
                        <ReviewContent review={review} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;