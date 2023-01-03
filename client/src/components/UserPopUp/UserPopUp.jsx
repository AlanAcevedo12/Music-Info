import styles from "./UserPopUp.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

function UserPopUp({ user }) {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    async function logoutHandler() {
        await dispatch(logout());
        navigate("/home");
        window.location.reload();
    }

    function goToProfile() {
        navigate("/profile");
    }

    return (
        <div id={styles.popUpContainer}>
            <h1>{user.username}</h1>
            <button onClick={goToProfile}>Perfil</button>
            <button onClick={logoutHandler}>Desconectarse</button>
        </div>
    )
}

export default UserPopUp;