import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./CreateReview.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect } from "react";
import CreateReviewForm from "../../components/CreateReviewForm/CreateReviewForm";
import { useParams } from "react-router-dom";

function CreateReview() {
  const { albumId } = useParams();

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
          <div id={styles.createForm}>
            <CreateReviewForm albumId={albumId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateReview;
