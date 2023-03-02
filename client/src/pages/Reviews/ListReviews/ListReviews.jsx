import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearReview, getReviewById, getReviewsByAlbum, getReviewsByUser } from "../../../redux/actions/actions";
import styles from "./ListReview.module.css";
import NavBar from "../../../components/NavBar/NavBar";
import SearchBar from "../../../components/SearchBar/SearchBar";
import ReviewsCardsList from "../../../components/Reviews/ReviewsCardsList/ReviewsCardsList";

function ListReviews() {
    const dispatch = useDispatch();
    const reviews = useSelector(store => store.reviews);
    const userId = useSelector(store => store.user.id);


    useEffect(() => {
        dispatch(clearReview());
    }, [])
    
    useEffect(() => {
        if (userId) dispatch(getReviewsByUser(userId));
    }, [userId])

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