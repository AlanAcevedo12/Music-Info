import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div id={styles.navBarContainer}>
            <div id={styles.logoContainer}>
                <Link to="/home">
                    <h1>Home</h1>
                </Link>
            </div>
            <div id={styles.listContainer}>
                <ul id={styles.navList}>
                    <li id={styles.navItem}>
                        <Link to="/favorites" className={styles.itemContainer}>
                            <svg class="svg-icon" focusable="false" height="24" role="img" width="24" viewBox="0 0 24 24" >
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M11.381 20.41c.402.385.619.59.619.59s3.475-3.276 8.34-8.338c4.694-4.98-1.427-13.749-7.66-7.493a11.246 11.246 0 0 0-.68.744l-.043-.05c-.212-.25-.425-.48-.637-.693-6.233-6.25-12.354 2.608-7.66 7.492a279.09 279.09 0 0 0 7.72 7.747z">
                                </path>
                            </svg>
                            <span id={styles.itemText}>Favoritos</span>
                        </Link>
                    </li>
                    {/* <li id={styles.navItem}>
                        <Link to="/search/" className={styles.itemContainer}>
                            <svg viewBox="0 0 24 24" width="24px" height="24px" id={styles.svgSearch}>
                                <path d="M20 11a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-2.707 7.28a9 9 0 1 1 .772-.63l3.289 3.29a.5.5 0 0 1-.708.706l-3.292-3.292a.507.507 0 0 1-.061-.074z"
                                />
                            </svg>
                            <span id={styles.itemText}>Busqueda</span>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default NavBar;

