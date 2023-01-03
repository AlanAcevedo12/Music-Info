import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div id={styles.navBarContainer}>
            <div id={styles.logoContainer}>
                <Link to="/home">
                    <h1 id={styles.logo}>Home</h1>
                </Link>
            </div>
            <div id={styles.listContainer}>
                <ul id={styles.navList}>
                    <li id={styles.navItem}>
                        <Link to="/favorites" className={styles.itemLink}>
                            <div id={styles.itemContainer}>
                                <svg class={styles.svgIcon} focusable="false" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                </svg>
                                <span id={styles.itemText}>Favoritos</span>
                            </div>
                        </Link>
                    </li>
                    <li id={styles.navItem}>
                        <Link to="/review/create" className={styles.itemLink}>
                            <div id={styles.itemContainer}>
                                <div className={styles.svgContainer}>
                                    <svg class={styles.svgIcon} focusable="false" viewBox="1 1 15 15">
                                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                                        </path>
                                    </svg>
                                </div>
                                <span id={styles.itemText}>Reseña</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;

