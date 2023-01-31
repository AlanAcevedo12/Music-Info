import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewContent from "../../components/ReviewContent/ReviewContent";
import { getReviewById, getReviewsByAlbum } from "../../redux/actions/actions";
import styles from "./ListReview.module.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ReviewsCardsList from "../../components/ReviewsCardsList/ReviewsCardsList";

function ListReviews() {
    const dispatch = useDispatch();
    const reviews = useSelector(store => store.reviews);
    useEffect(() => {
        dispatch(getReviewsByAlbum(41373501));
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
                    <div id={styles.reviews}>
                        <ReviewsCardsList reviews={reviews} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListReviews;