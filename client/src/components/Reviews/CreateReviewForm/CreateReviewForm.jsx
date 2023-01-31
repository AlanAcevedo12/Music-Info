import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReview } from "../../../redux/actions/actions.js";
import styles from "./CreateReviewForm.module.css";

function CreateReviewForm({ albumId }) {
    const dispatch = useDispatch();
    const { id: userId } = useSelector(state => state.user);
    const [inputReseña, setInputReseña] = useState({
        albumId,
        title: "",
        score: "",
        description: "",
        userId
    })

    function onChangeHandler(e) {
        setInputReseña({ ...inputReseña, [e.target.name]: e.target.value })
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        dispatch(postReview(inputReseña))
    }

    return (
        <div className={styles.CreateReviewForm}>
            <form id={styles.form} onSubmit={onSubmitHandler}>
                <div id={styles.titleInputContainer}>
                    <textarea id={styles.titleInput}
                        name="title" type="text" maxLength="100"
                        placeholder="Escriba el título aquí..."
                        onInput={(e) => autoGrow(e.target)}
                        onChange={onChangeHandler}
                    />
                </div>
                <div id={styles.scoreInputContainer}>
                    <input id={styles.scoreInput}
                        name="score" type="range"
                        min="0" max="100"
                        onChange={onChangeHandler}
                    />
                </div>
                <div id={styles.reviewInputContainer}>
                    <textarea id={styles.reviewInput}
                        // onInput={(e) => autoGrow(e.target) }
                        placeholder="Escriba su reseña aquí..."
                        name="description" type="text"
                        onChange={onChangeHandler}
                    />
                </div>
                <div id={styles.submitButton}>
                    <button type="submit">
                        Publicar reseña
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateReviewForm;

function autoGrow(element) {
    // console.log(element)
    element.style.height = "3rem";
    console.log(element.scrollHeight)
    element.style.height = (element.scrollHeight - 35) + "px";
}