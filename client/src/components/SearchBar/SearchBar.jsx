import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, getArtist, getTrack, logout } from "../../redux/actions/actions";
import styles from "./SearchBar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserPopUp from "../UserPopUp/UserPopUp";

function SearchBar() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const user = useSelector(state => state.user);
    const [popUp, setPopUp] = useState(false);
    const navigate = useNavigate();
    let location = useLocation();

    function onSubmitHandler(e) {
        e.preventDefault();
        dispatch(getArtist(input));
        dispatch(getTrack(input));
        dispatch(getAlbum(input));
        if(location.pathname !== "/home") navigate("/home"); 
    }

    function onChangeHandler(e) {
        setInput(e.target.value);
    }

    function openPopUp() {
        // navigate("/profile");
        if (popUp) setPopUp(false);
        if (!popUp) setPopUp(true);
    }

    return (
        <div id={styles.searchBarContainer}>
            <form onSubmit={onSubmitHandler} id={styles.form}>
                <button id={styles.searchButton}>
                    <svg viewBox="0 0 24 24" width="16px" height="16px" id={styles.svgSearch}>
                        <path d="M20 11a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-2.707 7.28a9 9 0 1 1 .772-.63l3.289 3.29a.5.5 0 0 1-.708.706l-3.292-3.292a.507.507 0 0 1-.061-.074z"
                        />
                    </svg>
                </button>
                <input id={styles.searchInput} type="text" autoComplete="off"
                    placeholder="Buscar" onChange={onChangeHandler} value={input} />
            </form>
            {
                !user ?
                    <>
                        <Link to="/login" id={styles.login}>
                            <span id={styles.loginSpan}>
                                Iniciar sesión
                            </span>
                        </Link>
                        <Link to="/register" id={styles.register}>
                            <span id={styles.registerSpan}>
                                Registrarse
                            </span>
                        </Link>
                    </>
                    :
                    <>
                        <div id={styles.userContainer}>
                            <button id={styles.userButton} onClick={openPopUp}>
                                <img src="https://e-cdns-images.dzcdn.net/images/user//32x32-000000-80-0-0.jpg" />
                            </button>
                            {
                                popUp && <UserPopUp styles={{ position: "absolute" }} user={user} />
                            }
                        </div>
                    </>
            }
        </div >
    )
}

export default SearchBar;