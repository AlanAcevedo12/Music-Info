import { useState } from "react";
import styles from "./Register.module.css";
import { useDispatch, useSelector } from "react-redux";
import {register} from "../../redux/actions/actions"

function Register() {
    const dispatch = useDispatch();
    const registerError = useSelector(state => state.registerError);
    const [input, setInput] = useState({ name: "", surname: "", email: "", password: "", username: "", age: "" });

    function onChangeHandler(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    function submitHandler(e) {
        e.preventDefault();
        // console.log(input);
        dispatch(register(input))
    }

    return (
        <div className={styles.RegisterContainer}>
            <h1>Registrarse</h1>
            {registerError && <span>ERROR</span>}
            <form id={styles.form} onSubmit={submitHandler}>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Correo electrónico</label>
                    <input className={styles.input} type="text" name="email" value={input.email} onChange={onChangeHandler} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Nombre</label>
                    <input className={styles.input} type="text" name="name" value={input.name} onChange={onChangeHandler} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Apellido</label>
                    <input className={styles.input} type="text" name="surname" value={input.surname} onChange={onChangeHandler} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Usuario</label>
                    <input className={styles.input} type="text" name="username" value={input.username} onChange={onChangeHandler} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Contraseña</label>
                    <input className={styles.input} type="text" name="password" value={input.password} onChange={onChangeHandler} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Edad</label>
                    <input className={styles.input} type="text" name="age" value={input.age} onChange={onChangeHandler} />
                </div>
                <button id={styles.submitButton} type="submit">REGISTRARSE</button>
            </form>
        </div>
    )
}

export default Register;