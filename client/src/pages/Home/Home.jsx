import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import ReviewsCardsList from "../../components/Reviews/ReviewsCardsList/ReviewsCardsList";
import { useDispatch, useSelector } from "react-redux";
import { clearReview, getLastReviews } from "../../redux/actions/actions";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const reviews = useSelector(store => store.reviews);

  useEffect(() => {
    dispatch(clearReview());
    dispatch(getLastReviews());
  }, [])

  return (
    <div id={styles.home}>
      <div id={styles.mainContainer}>
        <div id={styles.nav}>
          <NavBar />
        </div>
        <div id={styles.searchAndResultContainer}>
          <div id={styles.search}>
            <SearchBar />
          </div>
          <div id={styles.reviews}>
            <ReviewsCardsList reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
