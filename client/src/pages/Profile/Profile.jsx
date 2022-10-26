import { useSelector } from "react-redux";

function Profile(){
    const user = useSelector(state => state.user);

    console.log(user)
    return (
        <h1>{user ? user.name : "Sin sesión iniciada"}</h1>
    )
}

export default Profile;