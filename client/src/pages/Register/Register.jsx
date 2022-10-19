import styles from "./Register.module.css";

function Register() {
    return (
        <div className={styles.RegisterContainer}>
            <h1>Registrarse</h1>
            <form>
                <div className={styles.inputContainer}>
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div className={styles.inputContainer}>
                    <label>Nombre</label>
                    <input type="text" />
                </div>
                <div className={styles.inputContainer}>
                    <label>Apellido</label>
                    <input type="text" />
                </div>
                <div className={styles.inputContainer}>
                    <label>Usuario</label>
                    <input type="text" />
                </div>
                <div className={styles.inputContainer}>
                    <label>Contraseña</label>
                    <input type="text" />
                </div>
                <div className={styles.inputContainer}>
                    <label>Edad</label>
                    <input type="text" />
                </div>
            </form>
        </div>
    )
}

export default Register;